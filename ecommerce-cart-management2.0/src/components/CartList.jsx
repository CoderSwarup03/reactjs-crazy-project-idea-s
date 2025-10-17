import React from 'react'
import { useRecipe } from '../context/RecipeProvider'
import CartItem from './CartItem';
const CartList = () => {
  const { clearCart, totalAmount, carts } = useRecipe();
  return (
    <>
      <div className='bg-gray-100 p-4 border-2 border-green-500'>
        <h1 className='text-center font-semibold text-green-500 text-2xl'>Cart List</h1>
        {carts.length === 0 ? (
          <h1 className='text-center font-semibold text-2xl'>Cart is Empty</h1>
        ) : (
          <>
            <div className='flex flex-col gap-2 p-2'>
              {carts.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>Total Amount : {totalAmount}</h2>
                <button
                  onClick={clearCart}
                  className='bg-green-500 hover:bg-green-500 text-2xl font-bold'>Clear Cart</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartList