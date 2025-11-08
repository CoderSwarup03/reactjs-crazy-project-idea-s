import React from 'react'
import { useNotification } from '../context/NotificationProvider'

const MainApp = () => {
    const {addNotification} = useNotification();
    return (
        <>
            <div className='flex flex-col gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-2xl font-bold text-blue-500 text-center'>Notification System🔔</h1>
                <div className='space-x-3 flex flex-col md:flex-row items-center gap-2 border-2 border-green-600 p-2'>
                    <button 
                    onClick={()=> addNotification('This is success meggage')}
                    className='text-xl font-semibold px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer'>Info</button>
                    <button 
                    onClick={()=> addNotification('This is success meggage','success')}
                    className='text-xl font-semibold px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md cursor-pointer'>Success</button>
                    <button 
                    onClick={()=> addNotification('This is success meggage','error')}
                    className='text-xl font-semibold px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer'>Error</button>
                </div> 
            </div>
        </>
    )
}

export default MainApp