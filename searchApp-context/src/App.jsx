import React, { useState, useEffect } from 'react'
import ContextProvider from './context/ContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import CartPage from './pages/CartPage'

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([])


  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProduct()
  }, [])



  const addToCart = (item) => {
    setCart([...cart, item])
    alert("Product added to cart")
  }

  const deleteCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
    alert("Product removed from cart")
  }

  return (
    <>
      <ContextProvider.Provider value={{ cart, addToCart, deleteCart, products }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider.Provider>
    </>
  )
}

export default App