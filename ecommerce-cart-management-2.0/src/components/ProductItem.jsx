import React from 'react'
import { useProduct } from '../context/ProductProvider'
const ProductItem = ({ item }) => {
    const { addToCart } = useProduct()
    return (
        <>
            <div className='flex flex-col items-center p-4 border-2 border-green-500 rounded-md'>
                <img
                    src={item.img} alt={item.title}
                    className='h-[230px] object-cover'
                />
                <h2 className='text-2xl font-bold'>{item.name}</h2>
                <div className='flex justify-between w-full items-center p-3'>
                    <div className='flex flex-col'>
                        <p className='text-lg font-bold'>{item.category}</p>
                        <p className='text-lg font-bold'>{item.price}</p>
                    </div>
                    <div>
                        <button
                            onClick={addToCart(item)}
                            className='bg-green-500 px-4 py-2 rounded-md font-semibold cursor-pointer text-lg'>Add Item</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem