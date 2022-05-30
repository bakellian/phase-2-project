import React from 'react'
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

const PetForm = () => {
    const classes = useStyles();
    const [petName, setPetName] = useState('')
    const [petDescription, setPetDescription] = useState('')
    const [pets, setPets] = useState({})
    const navigate = useNavigate();

    const handleNameChange = e => {
        setPetName(e.target.value);
    }

    const handleDescriptionChange = e => {
        setPetDescription(e.target.value);
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
            </form>
        <Button variant="contained">Create Pet</Button>
    </div>
  )
}

export default PetForm