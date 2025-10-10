import React, { useState } from 'react'
import { userAuth } from '../context/ContextProvider'

const LoginForm = () => {
  const [form, setFrom] = useState({ username: '', password: '' });
  const { login } = userAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.username, form.password);
  }

  return (
    <>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 rounded-md p-4 w-[350px]'>
        <h1 className='text-2xl font-bold text-center'>Login Form</h1>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-2 mt-5'>
          <input
            onChange={(e) => setFrom({ ...form, username: e.target.value })}
            className='w-full p-3 rounded-md outline-none border-2 border-green-500 '
            type="text" name="" id="" />
          <input
            onChange={(e) => setFrom({ ...form, password: e.target.value })}
            className='w-full p-3 rounded-md outline-none border-2 border-green-500 '
            type="password" name="" id="" />
          <button
            type='submit'
            className='w-full py-2 bg-green-500 hover:bg-green-600 rounded-md text-2xl font-semibold'>Login</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm