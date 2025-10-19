import React from 'react'
import { LuPlus, LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../slices/CartSlices';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='p-3 border-2 border-green-500 rounded-md mt-4 flex justify-between items-center shadow-md'>
        <div>
          <img src={item.img} alt="image"
            className='w-[50px] h-[50px]'
          />
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h1 className='text-sm font-bold'>{item.name}</h1>
          <span className='text-gray-500 font-bold text-sm'>₹{item.price}</span>
        </div>
        <div className='flex gap-2 flex-col justify-center items-center'>
          <div>
            <MdDelete
              onClick={() => dispatch(removeFromCart({
                id: item.id,
                name: item.name,
                price: item.price,
                img: item.img
              }))}
              className='text-red-500 hover:text-red-600 text-2xl cursor-pointer' />
          </div>
          <div className='flex justify-center items-center gap-2 border-2 border-green-500 px-2 py-1 rounded-md'>
            <LuMinus
              onClick={() => item.qty > 1 ? dispatch(decrementQty({ id: item.id })) : item.qty = 1}
              className='cursor-pointer' />
            <span>{item.qty}</span>
            <LuPlus
              onClick={() => dispatch(incrementQty({ id: item.id }))}
              className='cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem