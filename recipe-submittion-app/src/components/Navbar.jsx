import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-50 border-b-2 border-green-500'>
        <div className='max-w-6xl mx-auto p-4 flex justify-between'>
          <h1 className='text-2xl font-bold text-green-500'>RecipeShare</h1>
          <div className='flex gap-3 items-center'>
            <Link to={'/'}>Home</Link>
            <Link to={'/submit'}>Submit</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar