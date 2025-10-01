import React, { useState } from 'react'

const Navbar = ({ setProducts }) => {
    const [query, setQuery] = useState('')

    const searchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await response.json();
        console.log(data.products)
        setProducts(data.products);
    }


    return (
        <>
            <div className='flex justify-evenly gap-2 shadow-md py-2'>
                <div><h2 className='text-2xl font-semibold'>myRecipe App</h2></div>
                <div className='flex gap-2'>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        className='w-[350px] px-2 py-1 outline-none border-2 border-[#222] hover:border-blue-500 rounded-md'
                        type="search" name="" id="" />
                    <button
                        onClick={searchProduct}
                        className='px-2 py-1 bg-blue-500 hover:bg-blue-600 text-semibold rounded-md text-white'>Search</button>
                </div>
                <div className='flex gap-2'>
                    <span className='font-semibold text-xl px-2 py-1 rounded-md'>Home</span>
                    <span className='font-semibold text-xl px-2 py-1 rounded-md'>Login</span>
                </div>
            </div>
        </>
    )
}

export default Navbar