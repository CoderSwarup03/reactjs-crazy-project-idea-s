import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  console.log(cartItems);

  const navigate = useNavigate();

  return (
    <>
      <div className={`fixed right-0 top-0 p-4 w-full md:w-[36vw] lg:w-[22vw] h-[100vh] border-2 border-green-500 rounded-md bg-white m-2 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 ease-in-out z-50`}>
        <div className='flex justify-between p-3 items-center border-b-2 border-green-500'>
          <span className='text-xl font-bold'>My Order</span>
          <IoCloseSharp
            onClick={() => setActiveCart(!activeCart)}
            className='text-xl font-bold cursor-pointer' />
        </div>
        {
          cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <CartItem key={item.id} item={item} />
              )
            })
          ) : (
            <h2 className='text-xl font-semibold text-gray-500 text-center'>Cart is empty</h2>
          )
        }
        <div className='absolute bottom-0 w-full mb-3'>
          <div className='border-b-2 border-green-500 p-3 w-[90vw] lg:w-[20vw]'>
            <h3 className='text-xl font-semibold'>Items:{totalQty}</h3>
            <h3 className='text-xl font-semibold'>Total:{totalPrice}</h3>
          </div>
          <div className='flex justify-center items-center mt-2'>
            <button 
            onClick={()=> navigate('/success')}
            className='bg-green-500 hover:bg-green-600 hover:text-white cursor-pointer rounded-md w-[90vw] lg:w-[20vw] py-2 font-bold'>Order Place</button>
          </div>
        </div>
      </div>
      <HiShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full p-2 bg-white text-[60px] border-2 border-green-500 cursor-pointer fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />
    </>
  )
}

export default Cart