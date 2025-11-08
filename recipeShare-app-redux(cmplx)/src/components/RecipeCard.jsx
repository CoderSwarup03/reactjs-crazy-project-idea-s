import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'
import SaveButton from './SaveButton'


export default function RecipeCard({ recipe }) {
    return (
        <article className="bg-white border rounded p-4 shadow-sm flex gap-4">
            <img src={recipe.image || 'https://via.placeholder.com/120'} alt="cover" className="w-28 h-20 object-cover rounded" />
            <div className="flex-1">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-lg"><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                        <p className="text-sm text-gray-600">{recipe.ingredients.slice(0, 3).join(', ')}{recipe.ingredients.length > 3 ? '...' : ''}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <RatingStars id={recipe.id} value={recipe.rating} />
                        <SaveButton id={recipe.id} isSaved={recipe.isSaved} />
                    </div>
                </div>
            </div>
        </article>
    )
}