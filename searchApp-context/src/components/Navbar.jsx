import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className='bg-white p-3 max-w-[85%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Search App</h1>
                    <div className='flex gap-3 justify-center items-center'>
                        <input
                            placeholder='Search Product...'
                            className='p-3 border-2 border-green-500 rounded-md'
                            type="search" name="" id="" />
                        <button className='bg-green-500 hover:bg-green-600 px-3 py-3 rounded-md font-bold cursor-pointer'>Search</button>
                    </div>
                    <div className='flex gap-3'>
                        <Link
                            to={'/'}
                            className='px-3 py-3 border-2 border-green-600 rounded-md'>Home</Link>
                        <Link
                            to={'/cart'}
                            className='px-3 py-3 border-2 border-green-600 rounded-md'>MyCart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar