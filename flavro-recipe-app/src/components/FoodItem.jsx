import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../data/FoodData'
import { useSelector } from 'react-redux';

const FoodItem = () => {
    const category = useSelector((state) => state.category.category);
    const search = useSelector((state) => state.search.search);
    console.log(search);
    return (
        <>
            <div className='max-w-[90%] md:max-w-[85%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {FoodData.filter((item) => {
                        if (category === "All") {
                            return item.name.toLowerCase().includes(search.toLowerCase())
                        } else {
                            return category === item.category && item.name.toLowerCase().includes(search.toLowerCase())
                            
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