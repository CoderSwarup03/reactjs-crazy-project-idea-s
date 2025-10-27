import React, { useContext } from 'react'
import ContextProvider from '../context/ContextProvider'
import Navbar from '../components/Navbar'
const CartPage = () => {

  const { cart, deleteCart } = useContext(ContextProvider)

  return (
    <>
      <Navbar />
      <div className='max-w-[85%] mx-auto bg-gray-100 p-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
            cart.length === 0 ? (
              <h1 className='text-2xl font-bold text-center text-red-500 '>Cart is empty</h1>
            ) : (
              cart.map((item) => {
                return (
                  <div key={item.id} className='flex flex-col justify-center items-center gap-3 p-4 border-2 border-green-500 rounded-md'>
                    <img src={item.thumbnail} alt="" />
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                    <button
                      onClick={() => deleteCart(item)}
                      className='text-2xl w-full font-semibold bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md cursor-pointer'>Remove Cart</button>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </>
  )
}

export default CartPage