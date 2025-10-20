import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../slices/CategorySlice';

const CategoryMenu = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const handleCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((item) => item.category))];
        setCategories(uniqueCategories);
        console.log(uniqueCategories)
    }
    useEffect(() => {
        handleCategories();
    }, [])

    const addCategorys = useSelector((state) => state.category.category);

    return (
        <>
            <div className='max-w-[90%] md:max-w-[85%] mx-auto p-4 flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Find The Best Food!</h1>
                <div className='flex gap-2 justify-start items-start flex-wrap'>
                    <button
                        onClick={() => dispatch(addCategory('All'))}
                        className={`text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all ${addCategorys === 'All' && 'bg-green-500 text-white'}`}>All</button>
                    {
                        categories.map((item, index) => {
                            return (
                                <button
                                    onClick={() => dispatch(addCategory(item))}
                                    key={index} className={`text-xl px-3 py-1 rounded-md font-semibold bg-gray-200 cursor-pointer hover:bg-green-500 hover:text-white transition-all ${addCategorys === item.category && 'bg-green-500 text-white'}`}>{item}</button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryMenu