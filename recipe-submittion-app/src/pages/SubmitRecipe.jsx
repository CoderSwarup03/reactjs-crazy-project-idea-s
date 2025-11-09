import React, { useState } from 'react'
import { useRecipe } from '../context/RecipeProvider';
import { Link, useNavigate } from 'react-router-dom';

const SubmitRecipe = () => {
  const { addRecipe } = useRecipe();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, url, description, ingredients });
    setTitle('');
    setUrl('');
    setIngredients('');
    setIngredients('');
    alert('clicked')
    navigate('/')
  }

  return (
    <>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 p-5 rounded-md flex flex-col gap-3'>
        <h1 className='text-2xl font-bold text-blue-500 text-center'>Submit Your Fav Recipe</h1>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-3'>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Recipe Name'
            className='text-lg font-semibold border outline-none p-2 rounded-md'
            type="text" />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Recipe Image URL'
            className='text-lg font-semibold border outline-none p-2 rounded-md'
            type="text" />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Recipe Description'
            className='text-lg font-semibold border outline-none p-2 rounded-md'
            type="text" />
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder='Recipe Ingredients'
            className='text-lg font-semibold border outline-none p-2 rounded-md'
            type="text" />
          <button className='text-lg font-semibold bg-green-500 hover:bg-green-600 cursor-pointer rounded-md p-2'>Submit</button>
        </form>
        <Link to={'/'} className='text-center bg-green-500 px-3 py-2 rounded-md'>Back To Home</Link>
      </div>
    </>
  )
}

export default SubmitRecipe