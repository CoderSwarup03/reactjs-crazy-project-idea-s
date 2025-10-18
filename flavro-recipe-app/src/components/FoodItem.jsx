import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../data/FoodData'

const FoodItem = () => {
    return (
        <>
            <div className='max-w-[90%] md:max-w-[85%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    {FoodData.map((item) => {
                        return (
                            <FoodCart key={item.id} item={item}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FoodItem