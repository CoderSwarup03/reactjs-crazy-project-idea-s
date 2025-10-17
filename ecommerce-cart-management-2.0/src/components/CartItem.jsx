import React from 'react'
import { useProduct } from '../context/ProductProvider';
const CartItem = ({ item }) => {
    const {deleteCart} = useProduct()
    console.log(item);
    return (
        <>
            <div className='flex justify-between p-2 rounded-md border-2 border-green-500'>
                <div>
                    <h2 className='text-lg font-bold'>{item.name}</h2>
                    <h2 className='text-lg font-bold'>{item.price} x {item.qty}</h2>
                    <img src={item.img} alt="" />
                </div>
                <div>
                    <button 
                    onClick={() => deleteCart(item.id)}
                    className='text-xl font-semibold px-3 py-2 rounded-md bg-red-500'>Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem