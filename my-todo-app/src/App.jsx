// Import modules and components from React
import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx'; // Import TodoList component
import './App.css'; // Import styles for the App component

// Define the main App component
function App() {
  // State for managing the list of todos and the current task
  const [todos, setTodos] = useState([]); // Array to store todo items
  const [task, setTask] = useState(''); // String to store the current task

  // Event handler for input changes
  const handleInputChange = (e) => {
    setTask(e.target.value); // Update the task state with the input value
  };

  // Event handler for submitting a new todo
  const handleSubmit = () => {
    // Check if the task is not empty
    if (task.trim() !== '') {
      // Add a new todo to the todos array with 'pending' status
      setTodos([...todos, { title: task, status: 'pending' }]);
      setTask(''); // Clear the task input after adding a todo
    }
  };

  // Event handler for updating the status of a todo (pending/completed)
  const handleUpdateStatus = (index) => {
    const updatedTodos = [...todos]; // Create a copy of the todos array
    // Toggle the status of the selected todo between 'pending' and 'completed'
    updatedTodos[index].status =
      updatedTodos[index].status === 'pending' ? 'completed' : 'pending';
    setTodos(updatedTodos); // Update the todos state with the modified array
  };

  // Event handler for removing a todo
  const handleRemoveTodo = (index) => {
    // Filter out the selected todo from the todos array
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); // Update the todos state with the filtered array
  };

  // JSX structure representing the UI of the App
  return (
    <div className="app">
      <h1>Todo App</h1>
      {/* Input container for adding new todos */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      {/* TodoList component to display the list of todos */}
      <TodoList
        todos={todos}
        onUpdateStatus={handleUpdateStatus}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

// Export the App component as the default export
export default App;
