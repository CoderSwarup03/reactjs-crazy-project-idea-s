// src/context/NotificationContext.js
import React from 'react'
import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add new notification
  const addNotification = (message, type = "info") => {
    const id = Date.now();
    const newNotification = { id, message, type };
    setNotifications((prev) => [...prev, newNotification]);

    // Auto-remove notification after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};




