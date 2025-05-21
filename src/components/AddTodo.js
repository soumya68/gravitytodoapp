import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        className="flex-grow border rounded-l px-4 py-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="bg-blue-500 text-white px-4 rounded-r" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;