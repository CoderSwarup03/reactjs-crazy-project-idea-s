import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecipe } from '../features/recipes/recipesSlice'
import { useNavigate } from 'react-router-dom'


export default function AddRecipeForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [steps, setSteps] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        dispatch(
            addRecipe({
                title: title.trim(),
                image: image || null,
                ingredients: ingredients.split(',').map((s) => s.trim()).filter(Boolean),
                steps: steps.split('\n').map((s) => s.trim()).filter(Boolean),
            })
        )
        navigate('/')
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 bg-white border rounded space-y-3">
            <h2 className="text-lg font-semibold">Add a Recipe</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border p-2 rounded" placeholder="Title" />
            <input value={image} onChange={(e) => setImage(e.target.value)} className="w-full border p-2 rounded" placeholder="Image URL (optional)" />
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="w-full border p-2 rounded" placeholder="Ingredients (comma separated)" />
            <textarea value={steps} onChange={(e) => setSteps(e.target.value)} className="w-full border p-2 rounded" placeholder="Steps (one per line)" rows={6} />
            <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Add Recipe</button>
            </div>
        </form>
    )
}