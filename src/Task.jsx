import React, { useState } from "react";

function Task({ id, name, completed, onCompletion, onDelete, onUpdate }) {
  const [updatedName, setUpdatedName] = useState(name);

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleUpdateTask = () => {
    const updatedTask = { id, name: updatedName, completed };
    onUpdate(updatedTask);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={completed} onChange={onCompletion} />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>{name}</span>
      </label>
      <input type="text" value={updatedName} onChange={handleNameChange} />
      <button onClick={handleUpdateTask}>Actualizar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default Task;
