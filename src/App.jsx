import React from "react";
import Header from "./Header";
import TaskList from "./TaskList";

const tasks = [
  { id: 1, name: "Task 1", completed: true },
  { id: 2, name: "Task 2", completed: true },
  { id: 3, name: "Task 3", completed: false },
];

function App() {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
