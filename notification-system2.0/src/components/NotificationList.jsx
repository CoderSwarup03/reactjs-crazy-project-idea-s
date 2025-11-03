import React from 'react'
import { useNotification } from '../context/NotificationProvider'

const NotificationList = () => {
  const { notification } = useNotification();

  return (
    <>
      <div className='flex flex-col gap-2 fixed top-4 right-4 space-x-3'>
        {notification.map((item) => {
          return (
            <div
            key={item.id}
            className={`px-3 py-1 rounded-md text-white font-semibold transition-all duration-500 ${item.type === 'info' ? 'bg-blue-500' : item.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
            >
                {item.message}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default NotificationList