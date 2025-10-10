import React from 'react'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { userAuth } from './context/ContextProvider'
import Profile from './components/Profile'
const App = () => {
  const { user } = userAuth();
  return (
    <>
      <Navbar />
      {user ? <Profile /> : <LoginForm />}
    </>
  )
}

export default App