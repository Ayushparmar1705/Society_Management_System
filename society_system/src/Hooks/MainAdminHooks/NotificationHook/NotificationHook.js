import React, { useEffect, useState } from "react";
import Notification from "../../../Pages/Notification/Notification";
import ManageNotification from "../../../Api/MainAdmin/ManageNotification";
import { socket } from "../../../socketFile/Socket";
import { toast } from "react-toastify";

export default function NotificationHook() {
  const [notification, setNotification] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Fetch existing notifications from backend
  const getNotification = async () => {
    try {
      const result = await ManageNotification.manageNotification();
      const data = result.data?.message || []; // use result.data
      setNotification(data);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  // Enable notifications + sound on first user click
  const enableNotifications = () => {
    if (window.Notification) {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          toast.success("Desktop notifications enabled!");
        }
      });
    }
    setSoundEnabled(true);
    toast.info("Sound enabled for notifications!");
  };

  useEffect(() => {
    getNotification();

    // Socket listener
    const onNewNotification = (data) => {
      setNotification((prev) => [data, ...prev]);

      // Play sound if enabled
      if (soundEnabled) {
        try {
          const audio = new Audio("/Assets/notification.mp3");
          audio.play().catch(() => {
            console.log("Audio blocked by browser. User must interact first.");
          });
        } catch (e) {
          console.warn("Audio error:", e);
        }
      }

      // Show toast
      toast.success("New notification received!");

      // Browser desktop notification
      if (window.Notification && Notification.permission === "granted") {
        try {
          new Notification("New contact message", {
            body: `${data.name} sent a message`,
            icon: "/Assets/notification_logo.jpg",
          });
        } catch (e) {
          console.warn("Browser notification error:", e);
        }
      }
    };

    socket.on("new_notification", onNewNotification);

    return () => socket.off("new_notification", onNewNotification);
  }, [soundEnabled]);

  return (
   
      <Notification enableNotifications={enableNotifications} notification={notification} />
  );
}
