import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const RecipeContext = createContext();
export const useRecipe = () => useContext(RecipeContext)

const RecipeProvider = ({ children }) => {
  const [carts, setCarts] = useState([])
  // All functionlity added
  const addToCart = (product) => {
    setCarts((item) => {
      const existItem = item.find((x) => x.id === product.id)
      if (existItem) {
        return item.map((x) => {
          return (
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          )
        })
      }
      return [...item, { ...product, qty: 1 }]
    })
  }

  const deleteFromCart = (id) => {
    setCarts(carts.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCarts([])
  }

  const totalAmount = carts.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <RecipeContext.Provider value={{ totalAmount, clearCart, deleteFromCart, addToCart, carts }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider