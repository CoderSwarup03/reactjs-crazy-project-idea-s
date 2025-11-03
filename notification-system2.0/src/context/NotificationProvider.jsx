import React, { createContext, useContext, useState } from 'react'
const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState([]);

    const addNotification = (message, type = 'info') => {
        const id = Date.now();
        const newNotication = {id,message,type};
        setNotification((prev) => [...prev, newNotication])

        setTimeout(() => {
            setNotification((item) => item.filter((item) => item.id !== id))
        }, 1500);
    }

    return (
        <NotificationContext.Provider value={{addNotification,notification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider