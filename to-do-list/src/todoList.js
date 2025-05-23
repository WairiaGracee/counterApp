import React from 'react';
import TodoItem from './todoItem';

function TodoList({ tasks, onToggle, onDelete }) {
    return (
        <ul className="todo-list">
        {tasks.map((task, index) => (
            <TodoItem
            key={index}
            task={task}
            index={index}
            onToggle={onToggle}
            onDelete={onDelete}
            />
        ))}
        </ul>
    );
}

export default TodoList;
