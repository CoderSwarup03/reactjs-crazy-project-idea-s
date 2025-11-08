import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubmitRecipe from './pages/SubmitRecipe'
import VireRecipe from './pages/VireRecipe'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/submit' element={<SubmitRecipe />} />
        <Route path='/view' element={<VireRecipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App