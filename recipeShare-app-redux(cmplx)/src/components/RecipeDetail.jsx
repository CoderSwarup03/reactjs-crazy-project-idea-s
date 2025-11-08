import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import RatingStars from './RatingStars'
import SaveButton from './SaveButton'


export default function RecipeDetail() {
    const { id } = useParams()
    const recipe = useSelector((s) => s.recipes.items.find((r) => String(r.id) === id))


    if (!recipe) return <div className="p-6 text-center">Recipe not found.</div>


    return (
        <div className="max-w-3xl mx-auto p-6 bg-white border rounded">
            <div className="flex items-start gap-6">
                <img src={recipe.image || 'https://via.placeholder.com/200'} alt="cover" className="w-48 h-36 object-cover rounded" />
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold">{recipe.title}</h2>
                    <div className="mt-2 flex items-center justify-between">
                        <RatingStars id={recipe.id} value={recipe.rating} />
                        <SaveButton id={recipe.id} isSaved={recipe.isSaved} />
                    </div>
                </div>
            </div>
            <section className="mt-6">
                <h3 className="font-semibold">Ingredients</h3>
                <ul className="list-disc ml-5 mt-2 text-sm">
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
            </section>
            <section className="mt-4">
                <h3 className="font-semibold">Steps</h3>
                <ol className="list-decimal ml-5 mt-2 text-sm space-y-1">
                    {recipe.steps.map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                </ol>
            </section>
        </div>
    )
}