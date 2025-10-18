import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import CartItem from './CartItem';
const Cart = () => {
  return (
    <>
      <div className='fixed right-0 top-0 p-4 w-full md:w-[32vw] lg:w-[22vw] h-[100vh] border-2 border-green-500 rounded-md bg-white m-2'>
        <div className='flex justify-between p-3 items-center border-b-2 border-green-500'>
          <span className='text-xl font-bold'>My Order</span>
          <IoCloseSharp className='text-xl font-bold cursor-pointer' />
        </div>
        <CartItem />
        <div className='absolute bottom-0 w-full mb-3'>
          <div className='border-b-2 border-green-500 p-3 w-[90vw] lg:w-[20vw]'>
            <h3 className='text-xl font-semibold'>Items:</h3>
            <h3 className='text-xl font-semibold'>Total: </h3>
          </div>
          <div className='flex justify-center items-center mt-2'>
            <button className='bg-green-500 hover:bg-green-600 hover:text-white cursor-pointer rounded-md w-[90vw] lg:w-[20vw] py-2 font-bold'>Order Place</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart