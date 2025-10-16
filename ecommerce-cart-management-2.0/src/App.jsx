import React from 'react'
import ProductProvider from './context/ProductProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App