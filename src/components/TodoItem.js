import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
    >
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;