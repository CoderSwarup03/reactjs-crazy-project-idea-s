import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContextProvider from '../context/ContextProvider'
import { useContext } from 'react'

const Navbar = () => {
    const [inputSeach, setInputSeach] = useState('')

    const { setProducts, logout } = useContext(ContextProvider)

    const handleSeach = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${inputSeach}`)
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
    }

    return (
        <>
            <div className='bg-white p-3 max-w-[85%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Search App</h1>
                    <div className='flex gap-3 justify-center items-center'>
                        <input
                            value={inputSeach}
                            onChange={(e) => setInputSeach(e.target.value)}
                            placeholder='Search Product...'
                            className='p-3 border-2 border-green-500 rounded-md w-[300px]'
                            type="search" name="" id="" />
                        <button
                            onClick={handleSeach}
                            className='bg-green-500 hover:bg-green-600 px-3 py-3 rounded-md font-bold cursor-pointer'>Search</button>
                    </div>
                    <div className='flex gap-3'>
                        <Link
                            to={'/'}
                            className='px-3 py-3 border-2 border-green-600 rounded-md'>Home</Link>
                        <Link
                            to={'/cart'}
                            className='px-3 py-3 border-2 border-green-600 rounded-md'>MyCart</Link>

                        <button
                            onClick={logout}
                            className='text-2xl px-4 py2 bg-red-500 hover:bg-red-600 rounded-md font-semibold'>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar