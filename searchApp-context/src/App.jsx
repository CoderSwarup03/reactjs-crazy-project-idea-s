import React, { useState, useEffect } from 'react'
import ContextProvider from './context/ContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import CartPage from './pages/CartPage'
import LoginForm from './pages/LoginForm'

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([])
  const [user, setUser] = useState(null);


  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProduct()
  }, [])


  const login = (username, password) => {
    if (username === 'admin' && password === '12345') {
      setUser({ username })
      return
    } else {
      alert('Invalid username or password')
      return
    }
  }

  const addToCart = (item) => {
    setCart([...cart, item])
    alert("Product added to cart")
  }

  const logout = () => {
    setUser(null)
  }

  const deleteCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id))
    alert("Product removed from cart")
  }

  return (
    <>
      <ContextProvider.Provider value={{ cart, addToCart, deleteCart, products, setProducts, login, logout, user, setUser }}>
        <BrowserRouter>
          {/* <LoginForm /> */}
          <Routes>
            {
              user ? (
                <>
                  <Route path='/' element={<Profile />} />
                  <Route path='/cart' element={<CartPage />} />
                </>
              ) : (
                <Route path='/' element={<LoginForm />} />
              )
            }
            {/* <Route path='/' element={<Profile />} /> */}
            {/* <Route path='/' element={<Navbar/>} /> */}
            {/* <Route path='/cart' element={<CartPage />} /> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider.Provider>
    </>
  )
}

export default App