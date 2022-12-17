import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const Adduser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();     //set initially to undefined.

    const userNameChangeHandler = (event) => {
      setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
      event.preventDefault(); 
      if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age (non-empty values).'
        });
        return;
      }
      if (+enteredAge < 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age and age (> 0).'
        });
        return;
      }
      console.log(enteredUserName, enteredAge);
      let user = {
        name: enteredUserName,
         age: enteredAge
      }
      props.onAddUser(user)    // Add to list only after validation checks We can also directly call this inside onSubmit={addUserHandler(enteredName, enteredAge)}.
      setEnteredUserName('');
      setEnteredAge('');      
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
   <>
      {error && <ErrorModal open={true} title={error.title} message={error.message} onConfirm={errorHandler} />}       
      <Card mClassName={classes.input}>
          <form onSubmit={addUserHandler}>
              <label htmlFor="username" >Username</label>
              <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
              <label htmlFor="age" >Age (Years)</label>
              <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
              <Button type="submit">Add User</Button>
          </form>
      </Card>  
   </> 
    
  )
}

export default Adduser
