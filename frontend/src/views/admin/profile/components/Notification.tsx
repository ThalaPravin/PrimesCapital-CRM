import React, { useState } from "react";
import Switch from "components/switch";

function NotificationItem({
  id,
  label,
  checked,
  onChange,
}: {
  id: number;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const handleChange = () => {
    onChange(!checked); // Toggle the checked value
  };

  return (
    <div className="mt-4 flex items-center gap-3">
      <Switch id={`switch${id}`} checked={checked} onChange={handleChange} />
      <label
        htmlFor={`switch${id}`} // corrected htmlFor
        className="text-base font-medium text-navy-700 dark:text-white"
      >
        {label}
      </label>
    </div>
  );
}

function Notification() {
  const [notificationData, setNotificationData] = useState([
    { id: 1, label: "Item comment notifications", checked: true },
    { id: 2, label: "Buyer review notifications", checked: false },
    { id: 3, label: "Rating reminders notifications", checked: true },
    { id: 4, label: "New lead notifications", checked: true },
    { id: 5, label: "Lead status updates", checked: false },
    { id: 6, label: "Deal negotiation updates", checked: true },
    { id: 7, label: "Deal closure notifications", checked: true },
    // Add more notifications as needed
  ]);


  const handleNotificationChange = (id: number, checked: boolean) => {
    setNotificationData((prevData) =>
      prevData.map((notification) =>
        notification.id === id ? { ...notification, checked } : notification
      )
    );
  };

  return (
    <div>
      <h1>Notifications</h1>
      {notificationData.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          label={notification.label}
          checked={notification.checked}
          onChange={(checked) =>
            handleNotificationChange(notification.id, checked)
          }
        />
      ))}
    </div>
  );
}

export default Notification;
