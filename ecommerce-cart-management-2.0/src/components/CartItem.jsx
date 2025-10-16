import React from 'react'

const CartItem = ({ item }) => {
    return (
        <>
            <div className='flex justify-between p-2 rounded-md border-2 border-green-500'>
                <div>
                    <h2 className='text-lg font-bold'>{item.name}</h2>
                    <h2 className='text-lg font-bold'>{item.price} x {item.qty}</h2>
                </div>
                <div>
                    <button className='text-xl font-semibold px-3 py-2 rounded-md bg-red-500'>Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem