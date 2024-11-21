import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'

import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setUsers(users);
      } catch(e) {
        console.log(e.message);
      }
    }

    fetchUsers();
  }, []);
  
  return (
      <div className='App'>
        <h1>
          <Link to="/">Blog Portal</Link>
        </h1>

        <div className='layout'>
          <Sidebar users={users} />
          <Outlet />
        </div>
      </div>
      

  );
}

export default App;
