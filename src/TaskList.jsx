import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const handleNewTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = { name: newTaskName, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTaskName("");
  };

  const handleTaskCompletion = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
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
