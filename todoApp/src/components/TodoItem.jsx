import React from "react";
export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg mb-2">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.task}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
      >
        Delete
      </button>
    </div>
  );
}
