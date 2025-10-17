import React from 'react'
import { useRecipe } from '../context/RecipeProvider'
const CartItem = ({ item }) => {
  const { deleteFromCart } = useRecipe()
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <img src={item.img} alt="" className='w-[100px] h-[100px]'/>
          <span>{item.name}</span>
          <span>{item.price}x {item.qty}</span>
        </div>
        <div>
          <button 
          onClick={()=> deleteFromCart(item.id)}
          className='bg-red-500 hover:bg-red-600 py-2 px-3 rounded-md'>Delete</button>
        </div>
      </div>
    </>
  )
}

export default CartItem