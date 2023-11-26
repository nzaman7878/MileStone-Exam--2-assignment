// Import the React module
import React from 'react';

// Define the TodoCard functional component
function TodoCard({ index, todo, onUpdateStatus, onRemoveTodo }) {
  return (
    // List item representing a TodoCard with dynamic class based on todo status
    <li className={`todo-card ${todo.status}`}>
      {/* Display the index of the todo (1-based) */}
      <span>{index + 1}</span>
      {/* Todo content section */}
      <div className="todo-content">
        {/* Display the title of the todo */}
        <h3>{todo.title}</h3>
        {/* Display the status of the todo */}
        <p>Status: {todo.status}</p>
      </div>
      {/* Todo actions section */}
      <div className="todo-actions">
        {/* Button to toggle the status of the todo (Mark Completed/Mark Pending) */}
        <button onClick={() => onUpdateStatus(index)}>
          {todo.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
        </button>
        {/* Button to remove the todo */}
        <button onClick={() => onRemoveTodo(index)}>Remove Todo</button>
      </div>
    </li>
  );
}

// Export the TodoCard component as the default export
export default TodoCard;
