import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="bg-white border-b shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="font-semibold text-lg">🍳 RecipeShare</Link>
                <div className="flex gap-3">
                    <Link to="/add" className="text-sm px-3 py-1 border rounded">Add Recipe</Link>
                    <Link to="/saved" className="text-sm px-3 py-1 border rounded">Saved</Link>
                </div>
            </div>
        </nav>
    )
}