import React from 'react'

export default function Notification({ notification }) {
    return (
        <div>

            <div>
                <p>Notifications</p>
                <div>
                    <div>
                        {notification.map((data) => (
                            <div>
                                <p>{data.name}</p>
                                <p>{data.email}</p>
                                <p>{data.society_name}</p>
                                <p>{data.address}</p>
                                <p>{data.purpose}</p>
                                <p>{data.message}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
