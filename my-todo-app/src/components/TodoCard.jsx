import React from 'react';

function TodoCard({ index, todo, onUpdateStatus, onRemoveTodo }) {
  return (
    <li className={`todo-card ${todo.status}`}>
      <span>{index + 1}</span>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>Status: {todo.status}</p>
      </div>
      <div className="todo-actions">
        <button onClick={() => onUpdateStatus(index)}>
          {todo.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
        </button>
        <button onClick={() => onRemoveTodo(index)}>Remove Todo</button>
      </div>
    </li>
  );
}

export default TodoCard;