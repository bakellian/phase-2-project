import React from 'react'
import { useState, useEffect } from 'react';
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
//pass userLogin from APP
const Login = ({ userLogin }) => {
    
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.userName.toLowerCase() === userName.toLowerCase())
        if(user) {
            userLogin(user); 
            navigate('/petlist');
        } else {
            setErrorMessage('Please use a valid username')
        }
    }

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(r => r.json())
        .then(data => setUsers(data))
    }, [])

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
        {errorMessage && <div className="error"> {errorMessage} </div>}
        <Button variant="contained" onClick={handleSubmit}>Log In</Button>
    </div>
  )
}

export default Login