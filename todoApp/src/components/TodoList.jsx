import TodoItem from "./TodoItem";
import React from "react";
export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="w-full max-w-md">
      {todos.length === 0 ? (
        <p className="text-gray-400">No tasks yet. Add one above!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}
