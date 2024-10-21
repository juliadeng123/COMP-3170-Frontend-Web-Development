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
  
  const remainingTasks = tasks.filter(task => task.status === "Pending").length;

  function deleteTask(taskName) {
    setTasks(tasks.filter(task => task.name !== taskName));
  }

  const taskList = tasks.map(task => (
    <Task key={task.name} task={task} onDelete={deleteTask} onToggle={toggleTaskCompletion} 
/>
  ));

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <TaskForm 
        add={addTask}
        value={name} 
        onChange={handleChange} 
      />      
      <h3>You have {remainingTasks} tasks remaining</h3>
      {taskList}
    </div>
  );
}
export default App;
