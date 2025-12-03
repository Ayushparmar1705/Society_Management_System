import React, { useEffect, useState } from "react";
import ManageNotification from "../../../Api/MainAdmin/ManageNotification";
import { socket } from "../../../socketFile/Socket";
import { toast } from "react-toastify";
import NotificationPage from "../../../Pages/Notification/NotificationPage";

export default function NotificationHook() {
  const [notification, setNotification] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Fetch existing notifications from backend
  const getNotification = async () => {
    try {
      const result = await ManageNotification.manageNotification();
      const data = result.message || [];
      setNotification(data);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  // Enable notifications + sound
  const enableNotifications = () => {
    if (window.Notification) {
      window.Notification.requestPermission().then((perm) => {
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

    const onNewNotification = (data) => {
      setNotification((prev) => [data, ...prev]);

      // Play sound if enabled
      if (soundEnabled) {
        const audio = new Audio("/Assets/notification.mp3");
        audio.play().catch(() => {
          console.log("Audio blocked: user must interact with page first.");
        });
      }

      // Show toast
      toast.success("New notification received!");

      // Browser desktop notification
      if (window.Notification && window.Notification.permission === "granted") {
        new window.Notification("New contact message", {
          body: `${data.name} sent a message`,
          icon: "/Assets/notification_logo.jpg",
        });
      }
    };

    socket.on("new_notification", onNewNotification);

    return () => {
      socket.off("new_notification", onNewNotification);
    };
  }, [soundEnabled]);

  return (
    <NotificationPage
      enableNotifications={enableNotifications}
      notification={notification}
    />
  );
}
