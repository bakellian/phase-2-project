import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const PetForm = ({ loggedIn, user }) => {
    const classes = useStyles();
    const [petName, setPetName] = useState('')
    const [petDescription, setPetDescription] = useState('')
    const [petType, setPetType] = useState('')
    const [pets, setPets] = useState({})
    const navigate = useNavigate(); //hook for being able to redirect to other routes 
    
    // useEffect(() => {
    //     if(!loggedIn) {
    //         navigate('/login')
    //     }
    // }, [loggedIn]) //not working - whenever page is refreshed were brought to login - even though we are logged in 

    const handleNameChange = e => {
        setPetName(e.target.value);
    }

    const handleDescriptionChange = e => {
        setPetDescription(e.target.value);
    }

    const handlePetTypeChange = e => {
        setPetType(e.target.value);
    }

  return (
    <div>
        <h1>Create a Pet</h1>
            <form className={classes.root} >
                <TextField
                    id="pet-name"
                    label="Pet Name"
                    value={petName}
                    onChange={handleNameChange}
                variant="filled"
                />
                <TextField
                    id="pet-description"
                    label="Pet Description"
                    value={petDescription}
                    onChange={handleDescriptionChange}
                variant="filled"
                />
                <TextField
                    id="pet-type"
                    label="Pet Type"
                    value={petType}
                    onChange={handlePetTypeChange}
                variant="filled"
                />
            </form>
        <Button variant="contained">Create Pet</Button>
    </div>
  )
}

export default PetForm