import React, { useEffect, useState } from 'react'
import Notification from '../../Pages/Notification/Notification'
import ManageNotification from '../../Api/MainAdmin/ManageNotification'
import { socket } from '../../socketFile/Socket';

export default function NotificationHook() {
    const [notification, setNotification] = useState([]);
    const getNotification = async () => {
        const result = await ManageNotification.manageNotification();
        const data = await result.message;
        setNotification(data);
    }

    useEffect(() => {
        getNotification();
        if (window.Notification && window.Notification.permission !== 'granted') {
            window.Notification.requestPermission();
        }
        socket.on("new_notification", (data) => {
            setNotification((prev) => [data, ...prev]);
        })
        const audio = new Audio("/Assets/notification.mp3");
        audio.play();



        toast.sucess("New notification recived!");

        if (window.Notification && window.Notification.permission === 'granted') {
            new window.Notification("New contact message", {
                body: `${data.name} send a message`,
                icon: '/Assets/notification_logo.jpg'
            })
        }
    }, []);
    return <Notification notification={notification}></Notification>
}
