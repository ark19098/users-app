import './App.css';
import React, { useState } from 'react';
import Adduser from './components/Users/Adduser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers([...users, user]);
  }
  return (
    <div>
      <Adduser addUserHandler={addUser} />
      <UsersList  users={users} />
    </div>
  );
}

export default App;
