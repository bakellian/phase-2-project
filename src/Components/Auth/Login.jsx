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
        //want to have all users available on component load to see what people can log in with (useEddeft)
        //then on submote we want to go through our users and find the users 
        e.preventDefault();
        const user = users.find(user => user.userName.toLowerCase() === userName.toLowerCase())
        if(user) {
            userLogin(user); //this is coming from APP. it will setCurrentUser, setLoggedIn to true and update local storage
            navigate('/petlist');
        } else {
            setErrorMessage('Please use a valid username')
        }
        
        // find a user that matches the userName

    }

    useEffect(() => {
        //fetch our users. set users to our data so app knows what can be used to login
        fetch('http://localhost:3001/users')
        .then(r => r.json())
        .then(data => setUsers(data))
        //now if you check the state in this component you can see all the users
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