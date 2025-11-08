import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../features/recipes/recipesSlice'


export default function RecipeList() {
    const dispatch = useDispatch()
    const { items, status } = useSelector((s) => s.recipes)


    useEffect(() => {
        if (status === 'idle') dispatch(fetchRecipes())
    }, [status, dispatch])


    if (status === 'loading') return <div className="p-6 text-center">Loading recipes...</div>


    return (
        <div className="max-w-4xl mx-auto space-y-4 p-4">
            {items.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
            ))}
            {items.length === 0 && <div className="text-center text-gray-500">No recipes yet.</div>}
        </div>
    )
}