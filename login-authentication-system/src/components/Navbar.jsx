import React from 'react'
import { userAuth } from '../context/ContextProvider'
const Navbar = () => {
    const { user } = userAuth()
    return (
        <>
            <div className='bg-blue-500 p-4'>
                <div className='max-w-[85%] mx-auto flex justify-between'>
                    <h1 className='text-2xl font-bold text-white'>AuthApp</h1>
                    <div>
                        {user ? (
                            <span className='text-2xl font-semibold'>Hello {user.username}</span>
                        ) : (
                            <span className='text-2xl font-semibold'>Yet to login</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar