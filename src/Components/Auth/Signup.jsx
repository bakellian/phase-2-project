import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';


//after user signs up navigate them to their pet list. 
// instead of using useHistory hook (v5), the new version v6 uses useNavigate
//after user signs up we want them to be logged in

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const Signup = ({ userLogin }) => {

    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName })
        })
            .then(resp => resp.json())
            .then(data => {
                userLogin(data)
                navigate('/petlist')
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
                variant="filled"
                />
            </form>
        <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
    </div>
    )
}

export default Signup