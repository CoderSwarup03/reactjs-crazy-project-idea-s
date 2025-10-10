import React, { use } from 'react'
import { userAuth } from '../context/ContextProvider'
const Profile = () => {
  const {user,logout} = userAuth();
  return (
    <>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col gap-4 border-2 border-blue-500 rounded-md'>
          <h1 className='text-2xl font-bold text-center'>{user.username}</h1>
          <span className='text-xl font-semibold text-center'>Welcome You Sucessfully Login</span>
          <button 
          onClick={logout}
          className='text-xl font-bold px-3 py-2 bg-red-500 hover:bg-red-600 rounded-md'>Logout</button>
      </div>
    </>
  )
}

export default Profile