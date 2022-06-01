import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const PetForm = ({ loggedIn, user }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        user_id: 0,
        name: "",
        type: "Dog",
        description: "Enter your pet description"
    })
    const navigate = useNavigate(); //hook for being able to redirect to other routes 
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        // if(!loggedIn) {
        //     navigate('/login')
        // }
        if(loggedIn) {
            setFormData({
                ...formData, user_id: user.id
            }) //setting the user ID to the created pet so it saves under that user. the use effect side effect will change our current user and update our pet's user ID
        }
    }, [user, loggedIn]) //not working - whenever page is refreshed were brought to login - even though we are logged in 

    const handleSubmit = e => {
        e.preventDefault();

        if(formData.name) {
            fetch('http://localhost:3001/pets', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ formData })
            })
                .then(r => r.json())
                .then(data => console.log(data))
        } else {
            setErrorMessage('Please enter a pet name')
        }
    }

  return (
    <div>
        <h1>Create a Pet</h1>
            <form className={classes.root} >
                <TextField
                    id="name"
                    label="pet name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})} //copy everything into the new object were setting in state 
                    variant="filled"
                />
                {errorMessage && <div className="error"> {errorMessage} </div>}
                <TextField
                    id="description"
                    label="pet description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    variant="filled"
                />
                 <Select
                    labelId="type"
                    id="type"
                    value={formData.type}
                    label="type"
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                    <MenuItem value={"Dog"}>Dog</MenuItem>
                    <MenuItem value={"Cat"}>Cat</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleSubmit}>Create Pet</Button>
            </form>
    </div>
  )
}

export default PetForm