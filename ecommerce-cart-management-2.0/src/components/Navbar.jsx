import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-evenly bg-gray-100 p-4'>
                <h1 className='text-2xl font-bold'>EcommerceApp</h1>
                <div className='flex gap-2'>
                    <Link to={'/'} className='text-xl font-bold px-3 py-1 rounded-md border-2 border-green-200 cursor-pointer'>Home</Link>
                    <Link to={'/cart'} className='text-xl font-bold px-3 py-1 rounded-md border-2 border-green-200 cursor-pointer'>Cart</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar