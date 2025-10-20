import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../data/FoodData'
import { useSelector } from 'react-redux';

const FoodItem = () => {
    const category = useSelector((state) => state.category.category);
    return (
        <>
            <div className='max-w-[90%] md:max-w-[85%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {FoodData.filter((item) => {
                        if (item.category === "All") {
                            return item
                        } else {
                            // return category === item.category
                            return category.toLowerCase() === "all" || item.category.toLowerCase().includes(category.toLowerCase())
                        }
                    }).map((item) => (
                        <FoodCart key={item.id} item={item} />
                    ))}

                    {/* frist added */}
                    {/* {FoodData.map((item) => {
                        return (
                            <FoodCart key={item.id} item={item}/>
                        )
                    })} */}
                </div>
            </div>
        </>
    )
}

export default FoodItem