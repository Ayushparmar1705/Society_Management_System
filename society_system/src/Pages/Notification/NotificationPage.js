
export default function NotificationPage({ notification = [], enableNotifications }) {
    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ marginBottom: "15px" }}>Notifications</h2>
            <div>
                <button
                    onClick={enableNotifications}
                    style={{
                        padding: "8px 12px",
                        marginBottom: "12px",
                        background: "#007bff",
                        color: "#fff",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Enable Notifications & Sound
                </button>

            </div>
            <div style={{ height: "70vh", overflowY: "auto" }}>
                {notification.length === 0 && (
                    <p>No notifications yet...</p>
                )}

                {notification.map((data, index) => (
                    <div
                        key={data.id || index}
                        style={{
                            background: "#fff",
                            padding: "15px",
                            marginBottom: "10px",
                            borderRadius: "10px",
                            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
                        }}
                    >
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                        <p><strong>Society:</strong> {data.society_name}</p>
                        <p><strong>Address:</strong> {data.address}</p>
                        <p><strong>Purpose:</strong> {data.purpose}</p>
                        <p><strong>Message:</strong> {data.message}</p>
                        <small style={{ color: "gray" }}>
                            {new Date(data.created_at).toLocaleString()}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}
