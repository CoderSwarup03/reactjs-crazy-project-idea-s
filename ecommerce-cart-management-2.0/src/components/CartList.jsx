import React from 'react'
import { useProduct } from '../context/ProductProvider'
import CartItem from './CartItem'
const CartList = () => {
    const { cart, totalAmount, clearCart } = useProduct()
    return (
        <>
            <div className='max-w-[50%] mx-auto p-4 flex flex-col'>
                {
                   cart && cart.length === 0 ? (
                        <h2 className='text-xl font-semibold text-center'>Cart is empty</h2>
                    ) : (
                        <>
                            <div className='flex flex-col gap-4'>
                                {cart && cart.map((item) => {
                                    return (
                                        <CartItem key={item.id} item={item} />
                                    )
                                })}
                                <div className='flex justify-between items-center mt-4'>
                                    <h2 className='text-xl font-semibold'>Total Amount: ${totalAmount}</h2>
                                    <button onClick={clearCart} className='bg-green-500 px-4 py-2 rounded-md font-semibold cursor-pointer text-lg'>Clear Cart</button>
                                </div>
                            </div>

                        </>
                    )
                }
            </div>
        </>
    )
}

export default CartList