import './App.css';

function App() {

  
  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input type="text" placeholder="Enter a new task..." />
        <button>Add Task</button>
      </div>

      <ul className="task-list">
        {/* Sample Task Item */}
        <li className="task-item">
          <span className="task-text">Sample Task</span>
          <div className="task-actions">
            <button className="complete-btn">Complete</button>
            <button className="delete-btn">Delete</button>
          </div>
        </li>
      </ul>

      {/* Optional Clear All Button */}
      <button className="clear-btn">Clear All</button>
    </div>
  );
}

export default App;
