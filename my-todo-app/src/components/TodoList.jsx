import React from 'react'
import TodoCard from './TodoCard.jsx';
function TodoList({ todos, onUpdateStatus, onRemoveTodo }) {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            index={index}
            todo={todo}
            onUpdateStatus={onUpdateStatus}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    );
  }
  
  export default TodoList;