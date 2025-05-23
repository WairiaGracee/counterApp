import React from 'react';

function TodoItem({ task, index, onToggle, onDelete }) {
    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
        <span onClick={() => onToggle(index)}>{task.text}</span>
        <button onClick={() => onDelete(index)}>Delete</button>
        </li>
    );
}

export default TodoItem;
