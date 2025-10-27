import React from 'react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <>
            <div className='bg-white p-2 m-2 flex justify-between items-center w-full rounded-md'>
                <h1 className={`text-2xl font-semibold ${todo.completed ? 'line-through' : ''}`}>{todo.task}</h1>
                <div className='flex gap-2'>
                    <button
                        onClick={() => toggleTodo(todo.id)}
                        className='text-xl font-semibold bg-green-500 hover:bg-green-600 cursor-pointer rounded-md p-2'>Complete</button>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className='text-xl font-semibold bg-green-500 hover:bg-green-600 cursor-pointer rounded-md p-2'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default TodoItem