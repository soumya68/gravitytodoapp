import React from "react";

const Filter = ({ currentFilter, setFilter }) => {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="flex justify-around mb-4">
      {filters.map((f) => (
        <button
          key={f}
          className={`px-4 py-2 rounded ${
            currentFilter === f ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;