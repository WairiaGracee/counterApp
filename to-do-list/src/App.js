import React, { useState } from 'react';
import TodoList from './todoList';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-area">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TodoList tasks={tasks} onToggle={toggleComplete} onDelete={handleDelete} />
    </div>
  );
}

export default App;

