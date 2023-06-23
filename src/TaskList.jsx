import React, { useState } from "react";
import Task from "./Task";
import useTaskManager from "./useTaskManager";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();
  const [newTaskName, setNewTaskName] = useState("");

  const handleNewTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = { name: newTaskName, completed: false };
    createTask(newTask);
    setNewTaskName("");
  };

  const handleTaskCompletion = (taskIndex) => {
    const task = tasks[taskIndex];
    const updatedTask = { completed: !task.completed };
    updateTask(taskIndex, updatedTask);
  };

  const handleTaskDeletion = (taskIndex) => {
    deleteTask(taskIndex);
  };

  const handleTaskUpdate = (taskIndex, updatedTask) => {
    updateTask(taskIndex, updatedTask);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={handleNewTaskNameChange}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          name={task.name}
          completed={task.completed}
          onCompletion={() => handleTaskCompletion(index)}
          onDelete={() => handleTaskDeletion(index)}
          onUpdate={(updatedTask) => handleTaskUpdate(index, updatedTask)}
        />
      ))}
    </div>
  );
}

export default TaskList;
