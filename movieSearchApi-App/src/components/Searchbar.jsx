import React, { useState } from 'react'

const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input)
    }
  }


  return (
    <>
      <div className='flex flex-col  justify-center items-center gap-2 mt-5'>
        <h1 className='text-2xl font-bold text-center'>Movie Search</h1>
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text" name="" id=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Search Movie...'
            className='px-2 py-1 rounded-md outline-none border-2 border-[#222] w-[300px]'
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-semibold px-2 py-1 rounded-md ml-2 text-white cursor-pointer'>Search</button>
        </form>
      </div>
    </>
  )
}

export default Searchbar