import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const Signup = () => {

    const classes = useStyles();

    const [userName, setUserName] = useState('');
    
    const handleChange = (e) => {
        setUserName(e.target.value);
        console.log(userName)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        //we want to send out a fetch
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName })
            //send an object of username to our server - automatically gives it an ID
        })
    }
    
  return (
    <div>
        <h1>Sign Up</h1>
        <form className={classes.root} >
        <TextField
          id="filled-name"
          label="Username"
          value={userName}
          onChange={handleChange}
        //   anytime we make an input change its going to use the handleCHange function
          variant="filled"
        />
    </form>
    <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
    </div>

  )
}

export default Signup