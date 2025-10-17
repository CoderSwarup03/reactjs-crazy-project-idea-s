import React from 'react'
import { useRecipe } from '../context/RecipeProvider'
const ProductItem = ({ item }) => {
  const { addToCart } = useRecipe()
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2 p-2 border-2 border-green-500 rounded-md'>
        <img src={item.img} alt="" className='w-[250px] h-[200px]' />
        <h2 className='text-2xl font-semibold'>{item.name}</h2>
        <div className='flex justify-between bg-gray-100'>
          <p>{item.category}</p>
          <p>{item.price}</p>
        </div>
        <div className='w-full'>
          <button
            onClick={() => addToCart(item)}
            className='w-full py-2 bg-green-500 hover:bg-green-600 cursor-pointer rounded-md font-bold'>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductItem