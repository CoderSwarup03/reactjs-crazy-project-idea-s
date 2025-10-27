import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <>
            {todos.length === 0 ? (
                <h1 className='text-2xl text-center text-gray-400'>Todos is empty...</h1>
            ) : (
                todos.map((item) => {
                    return (
                        <TodoItem key={item.id} todo={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    )
                })
            )}
        </>
    )
}

export default TodoList