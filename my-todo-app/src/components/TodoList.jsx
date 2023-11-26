// Import React module and TodoCard component
import React from 'react';
import TodoCard from './TodoCard.jsx';

// Define the TodoList functional component
function TodoList({ todos, onUpdateStatus, onRemoveTodo }) {
  return (
    // Unordered list representing the TodoList
    <ul className="todo-list">
      {/* Map over each todo and create a TodoCard for each */}
      {todos.map((todo, index) => (
        <TodoCard
          key={index} // Use the index as the key for each TodoCard
          index={index} // Pass the index to TodoCard component
          todo={todo} // Pass the todo object to TodoCard component
          onUpdateStatus={onUpdateStatus} // Pass the onUpdateStatus function to TodoCard
          onRemoveTodo={onRemoveTodo} // Pass the onRemoveTodo function to TodoCard
        />
      ))}
    </ul>
  );
}

// Export the TodoList component as the default export
export default TodoList;
