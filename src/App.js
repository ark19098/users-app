import './App.css';
import React, { useState } from 'react';
import Adduser from './components/Users/Adduser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);
  // const addUserHandler = (user) => {
  //   setUsersList([...usersList, user]);
  //   console.log(usersList)
  // }
  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user]
    });
  }
  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
