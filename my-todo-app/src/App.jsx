import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { title: task, status: 'pending' }]);
      setTask('');
    }
  };

  const handleUpdateStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status =
      updatedTodos[index].status === 'pending' ? 'completed' : 'pending';
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      <TodoList
        todos={todos}
        onUpdateStatus={handleUpdateStatus}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default App;
