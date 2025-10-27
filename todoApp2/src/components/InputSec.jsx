import React, { useState } from 'react'

const InputSec = ({ addTodos }) => {
    const [input, setInput] = useState('')
    const handleSubmit = () => {
        if(input=== '' || input.trim() === '') {
            setInput('')
            alert('Please enter a todo')
            return;
        }
        addTodos(input)
        setInput('')
        console.log("added")
    }
    return (
        <>
            <div className='w-full p-4 m-2 flex flex-col justify-center items-center gap-2'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='w-full outline-none p-3 border-2 border-green-500 rounded-md text-lg font-semibold'
                    placeholder='Enter your todo...'
                    type="text" name="" id="" />
                <button 
                onClick={handleSubmit}
                className='w-full outline-none p-3 border-2 bg-green-500 hover:bg-green-600 cursor-pointer rounded-md text-lg font-semibold'>Add Todo</button>
            </div>
        </>
    )
}

export default InputSec