import React from 'react'
import { useDispatch } from 'react-redux'
import { rateRecipe } from '../features/recipes/recipesSlice'


export default function RatingStars({ id, value }) {
    const dispatch = useDispatch()
    const rounded = Math.round(value || 0)
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => dispatch(rateRecipe({ id, rating: n }))} className={`text-xl ${n <= rounded ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                </button>
            ))}
            <span className="text-sm text-gray-600">{value ? Number(value).toFixed(1) : '—'}</span>
        </div>
    )
}