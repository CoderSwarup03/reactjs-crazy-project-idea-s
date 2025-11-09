import React, { createContext, useContext, useState } from 'react'
const RecipeContext = createContext();
export const useRecipe = () => useContext(RecipeContext);

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);

  const addRecipe = (newItems) => {
    setRecipe((item) => [...item, newItems])
  }

  const deleteCart = (id) => {
    setRecipe((item) => item.id !== id)
  }

  return (
    <RecipeContext.Provider value={{ addRecipe, recipe, deleteCart }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider