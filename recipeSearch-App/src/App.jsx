import React, { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  const [products, setProducts] = useState([])
  return (
    <>
      <Navbar setProducts={setProducts} />
      <Home products={products} setProducts={setProducts}/>
    </>
  )
}

export default App