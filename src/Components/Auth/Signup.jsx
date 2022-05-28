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

//hand user login down from APP as a deconstructed prop
const Signup = ({ userLogin }) => {

    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setUserName(e.target.value); // this stages the re-render. updates state and rerenders when user logs in
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
            .then(resp => resp.json())
            .then(data => {
                userLogin(data) //setting the user login with the data from the fetch. Callback function handed down from APP. 
                navigate('/petlist')
            }) //redirects to the petlist page after user signs up 
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
                    //anytime we make an input change its going to use the handleCHange function
                variant="filled"
                />
            </form>
        <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
    </div>
    )
}

export default Signup