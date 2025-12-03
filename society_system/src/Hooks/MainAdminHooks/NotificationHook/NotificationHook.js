import React, { useEffect, useState } from "react";
import Notification from "../../../Pages/Notification/Notification";
import ManageNotification from "../../../Api/MainAdmin/ManageNotification";
import { socket } from "../../../socketFile/Socket";
import { toast } from "react-toastify";

export default function NotificationHook() {
  const [notification, setNotification] = useState([]);

  const getNotification = async () => {
    try {
      const result = await ManageNotification.manageNotification();
      // axios response: result.data
      const data = result.message || [];
      setNotification(data);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  useEffect(() => {
    getNotification();

    // ask for desktop notification permission (once)
    if (window.Notification && window.Notification.permission !== "granted") {
      window.Notification.requestPermission().catch((e) => {
        // ignore if blocked
        console.warn("Notification permission request error:", e);
      });
    }

    // socket listener
    const onNewNotification = (data) => {
      // add to UI
      setNotification((prev) => [data, ...prev]);

      // play sound (safe: catch promise rejection)
      try {
        const audio = new Audio("/Assets/notification.mp3");
        audio.play().catch((err) => {
          // autoplay may be blocked; ignore
          // console.log("Audio play blocked:", err);
        });
      } catch (e) {
        console.warn("Audio error:", e);
      }

      // show toast
      toast.success("New notification received!");

      // browser desktop notification
      if (window.Notification && window.Notification.permission === "granted") {
        try {
          new window.Notification("New contact message", {
            body: `${data.name} sent a message`,
            icon: "/Assets/notification_logo.jpg",
          });
        } catch (e) {
          console.warn("Browser notification error:", e);
        }
      }
    };

    socket.on("new_notification", onNewNotification);

    // cleanup
    return () => {
      socket.off("new_notification", onNewNotification);
    };
  }, []);

  return <Notification notification={notification} />;
}
