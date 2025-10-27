import React from 'react'
import { useState } from 'react'
import InputSec from './components/InputSec'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodos = (task) => {
    setTodos([...todos,
    {
      id: new Date(),
      task,
      completed: false
    }
    ])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <>
      <div className='flex flex-col items-center justify-center bg-gray-100 p-3.5'>
        <h1 className='text-3xl font-bold text-green-600'>Todo App</h1>
        <InputSec addTodos={addTodos} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App