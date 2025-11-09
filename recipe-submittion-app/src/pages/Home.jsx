import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 p-5 border-green-500 rounded-md'>
        <h1  className='text-2xl font-bold text-green-500 text-center'>Recipe app</h1>
        <div className='flex gap-2 justify-between items-center mt-3'>
          <Link to={'/submit'} className='text-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-md px-3 py-2'>Submit Recipe</Link>
          <Link to={'/view'} className='text-xl text-white font-semibold bg-green-500 hover:bg-green-600 cursor-pointer px-3 py-2 rounded-md'>View Recipe</Link>
        </div>
      </div>
    </>
  )
}

export default Home