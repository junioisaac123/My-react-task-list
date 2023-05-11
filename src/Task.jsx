import React from "react";

function Task({ name, completed, onCompletion }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={completed} onChange={onCompletion} />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>{name}</span>
      </label>
    </div>
  );
}

export default Task;
