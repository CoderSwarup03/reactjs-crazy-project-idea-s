import React from 'react'

const CategoryMenu = () => {
    return (
        <>
            <div className='max-w-[90%] md:max-w-[85%] mx-auto p-4 flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Find The Best Food!</h1>
                <div className='flex gap-2 justify-start items-start flex-wrap'>
                    <button className='text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all'>All</button>
                    <button className='text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all'>Lunch</button>
                    <button className='text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all'>BreakFast</button>
                    <button className='text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all'>Dinner</button>
                    <button className='text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all'>Snakes</button>
                </div>
            </div>
        </>
    )
}

export default CategoryMenu