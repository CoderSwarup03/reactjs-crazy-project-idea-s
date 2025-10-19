import React from 'react'
import { LuPlus, LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
const CartItem = () => {
  return (
    <>
      <div className='p-3 border-2 border-green-500 rounded-md mt-4 flex justify-between items-center shadow-md'>
        <div>
          <img src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png" alt="image"
            className='w-[50px] h-[50px]'
          />
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h1 className='text-sm font-bold'>Margherita Pizza</h1>
          <span className='text-gray-500 font-bold text-sm'>₹130</span>
        </div>
        <div className='flex gap-2 flex-col justify-center items-center'>
          <div>
            <MdDelete className='text-red-500 hover:text-red-600 text-2xl'/>
          </div>
          <div className='flex justify-center items-center gap-2 border-2 border-green-500 px-2 py-1 rounded-md'>
            <LuMinus className='cursor-pointer'/>
            <span>1</span>
            <LuPlus className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem