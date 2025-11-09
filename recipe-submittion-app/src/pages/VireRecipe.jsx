import React from 'react'
import { useRecipe } from '../context/RecipeProvider'
import { Link, useNavigate } from 'react-router-dom';

const VireRecipe = () => {
  const { recipe, deleteCart } = useRecipe();
  const navigate = useNavigate();

  return (
    <>
      <div className='border-2 border-green-500 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4'>
        {recipe.length === 0 ? (
          <h1>No Recipe Found</h1>
        ) : (
          recipe.map((item) => {
            return (
              <div key={item.id} className='flex flex-col items-center gap-3'>
                <h1>{item.title}</h1>
                <img src={item.url} alt={item.title} className='w-[200px] h-[200px]' />
                <p>{item.description}</p>
                <p>{item.ingredients}</p>
                <div>
                  <button
                    onClick={() => deleteCart(item.id)}
                    className='bg-red-500 text-white font-semibold'>DeleteCart</button>
                </div>

              </div>
            )
          })
        )}
        <Link to={'/'} className='text-2xl font-semibold bg-green-500 rounded-md'>Back to Home</Link>
      </div>
    </>
  )
}

export default VireRecipe