import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/CartSlices';
const FoodCart = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='flex flex-col justify-center items-center p-4 border-2 border-green-500 rounded-md'>
                <img src={item.img}
                    className='cursor-grab h-[200px]'
                    alt="" />
                <div className='flex justify-between items-center w-full py-3'>
                    <h1 className='text-xl font-bold'>{item.name}</h1>
                    <span className='text-gray-500 font-bold text-lg'>₹{item.price}</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, eveniet.</p>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-center items-center text-xl font-bold'>
                        <FaStar className='text-yellow-400 mr-1' /> {item.rating}
                    </div>
                    <button
                        onClick={() => dispatch(addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            rating: item.rating,
                            price: item.price,
                            qty: item.qty = 1
                        }))}
                        className='bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md font-semibold cursor-pointer'>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default FoodCart