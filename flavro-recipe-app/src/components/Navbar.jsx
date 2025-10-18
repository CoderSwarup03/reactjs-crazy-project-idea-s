import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='max-w-[90%] md:max-w-[85%] mx-auto p-4'>
                <div className='flex flex-col md:flex-row justify-between gap-2'>
                    <div className='flex flex-col justify-center items-start'>
                        <h2 className='text-xl font-semibold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h2>
                        <h1 className='text-2xl font-bold'>Flavaro Food App</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input
                            placeholder='Search your recipe...'
                            className='text-md outline-none border-2 border-green-500 rounded-md px-3 py-2 w-full md:w-96'
                            type="search" name="" id="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar