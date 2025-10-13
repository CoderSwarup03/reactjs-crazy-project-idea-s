import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import ContextProvider from '../context/ContextProvider'
const LoginForm = () => {
  const { login } = useContext(ContextProvider)
  const [form, setForm] = useState({ username: '', password: '' })

  const handleSubmit = () => {
    login(form.username, form.password);
  }



  return (
    <>
      <div className='absolute top-1/2 left-1/2 -transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-3 border-2 border-green-500 rounded-md p-5'>
        <h1 className='text-bold text-3xl'>LoginForm</h1>
        <input
          placeholder='username'
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className='p-3 w-full border-2 border-green-500 rounded-md outline-none'
          type="text" />
        <input
          placeholder='password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className='p-3 w-full border-2 border-green-500 rounded-md outline-none'
          type="password" />
        <button
          onClick={handleSubmit}
          className='bg-green-500 py-2 rounded-md w-full'>Login</button>
      </div>

    </>
  )
}

export default LoginForm