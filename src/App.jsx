import React from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import useTaskManager from "./useTaskManager";

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div>
      <Header />
      <TaskList
        tasks={tasks}
        createTask={createTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
