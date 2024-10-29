import Task from './components/Task';
import TaskForm from './components/TaskForm';
import './App.css';
import { useState } from 'react';

function App() {
  
  const initialTasks = [
    { name: "Task 1", status: "Pending" },
    { name: "Task 2", status: "Pending" },
    { name: "Task 3", status: "Pending" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [name, setName] = useState('');
  const [filter, setFilter] = useState("All");

  function addTask(task) {
    if (task === "") 
      return
    setTasks([...tasks, { name: task, status: "Pending" }]);
    setName('');
  }

  function toggleTaskCompletion(taskName) {
    setTasks(tasks.map(task =>
      task.name === taskName
        ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
        : task
    ));
  }

  const filteredTasks = filter === "Completed"
  ? tasks.filter(task => task.status === "Completed")
  : filter === "Pending"
  ? tasks.filter(task => task.status === "Pending")
  : tasks;

  const remainingTasks = tasks.filter(task => task.status === "Pending").length;

  function deleteTask(taskName) {
    setTasks(tasks.filter(task => task.name !== taskName));
  }

  const taskList = filteredTasks.map(task => (
    <Task key={task.name} task={task} onDelete={deleteTask} onToggle={toggleTaskCompletion}
/>
  ));

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }




  return (
    <div className="app">

      <h1>Daily Planner</h1>
      <TaskForm 
        add={addTask}
        value={name} 
        onChange={handleChange} 
      />
      <div className="filterButtons">
        <button className="filterButton" onClick={() => handleFilterChange("All")}>All</button>
        <button className="filterButton" onClick={() => handleFilterChange("Completed")}>Completed</button>
        <button className="filterButton" onClick={() => handleFilterChange("Pending")}>Pending</button>      
      </div>
      <h3>You have {remainingTasks} tasks remaining</h3>
      {taskList}
    </div>
  );
}
export default App;
