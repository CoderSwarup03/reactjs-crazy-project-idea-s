// src/components/NotificationList.jsx
import React from "react";
import { useNotification } from "../context/NotificationContext";

const NotificationList = () => {
  const { notifications } = useNotification();

  return (
    <div className="fixed top-4 right-4 space-y-3 z-50">
      {notifications.map((note) => (
        <div
          key={note.id}
          className={`px-4 py-3 rounded-lg shadow-md text-white font-medium transition-all duration-300
            ${
              note.type === "success"
                ? "bg-green-500"
                : note.type === "error"
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
        >
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
