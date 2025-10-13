// src/App.jsx
import React from "react";
import { NotificationProvider, useNotification } from "./context/NotificationContext";
import NotificationList from "./components/NotificationList";

const MainApp = () => {
  const { addNotification } = useNotification();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🔔 Notification System</h1>

      <div className="space-x-3">
        <button
          onClick={() => addNotification("This is an info message!")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Info
        </button>

        <button
          onClick={() => addNotification("Operation successful!", "success")}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Success
        </button>

        <button
          onClick={() => addNotification("Something went wrong!", "error")}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Error
        </button>
      </div>
    </div>
  );
};

const App = () => (
  <NotificationProvider>
    <MainApp />
    <NotificationList />
  </NotificationProvider>
);

export default App;
