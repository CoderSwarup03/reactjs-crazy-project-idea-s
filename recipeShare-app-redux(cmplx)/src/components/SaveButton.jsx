import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSave } from '../features/recipes/recipesSlice'


export default function SaveButton({ id, isSaved }) {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(toggleSave(id))} className={`px-2 py-1 border rounded text-sm ${isSaved ? 'bg-yellow-100' : ''}`}>
            {isSaved ? 'Saved' : 'Save'}
        </button>
    )
}