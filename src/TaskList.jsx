import React, { useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");

  const handleNewTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = { name: newTaskName, completed: false };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
  };

  const handleTaskCompletion = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        <input type="text" value={newTaskName} onChange={handleNewTaskNameChange} />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} completed={task.completed} onCompletion={() => handleTaskCompletion(index)} />
      ))}
    </div>
  );
}

export default TaskList;
