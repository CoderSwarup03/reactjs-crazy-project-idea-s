import React from 'react'
import { useProduct } from '../context/ProductProvider'
import CartItem from './CartItem'
const CartList = () => {
    const { cart, totalAmount, clearCart } = useProduct()
    return (
        <>
            <div className='max-w-[50%] mx-auto p-4 flex flex-col'>
                {
                    cart.length > 0 ? (
                        <>
                            <div>
                                {cart.map((item) => {
                                    return (
                                        <CartItem key={item.id} item={item} />
                                    )
                                })}
                            </div>
                        </>
                    ) : (
                        <h2>Cart is empty</h2>
                    )
                }
            </div>
        </>
    )
}

export default CartList