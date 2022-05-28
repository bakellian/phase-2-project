import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const Login = () => {
    
    const classes = useStyles();
    const [userName, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value);
        console.log(userName)
    };

  return (
    <div>
        <h1>Log In</h1>
            <form className={classes.root} >
                <TextField
                    id="filled-name"
                    label="Username"
                    value={userName}
                    onChange={handleChange}
                variant="filled"
                />
            </form>
        <Button variant="contained">Log In</Button>
    </div>
  )
}

export default Login