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

const PetForm = () => {
    const classes = useStyles();
    const [petName, setPetName] = useState('')
    const [petDescription, setPetDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted')
    }

  return (
    <div>
        <h1>Create a Pet</h1>
            <form className={classes.root} >
                <TextField
                    id="pet-name"
                    label="Pet Name"
                    value={petName}
                    // onChange={handleChange}
                variant="filled"
                />
                <TextField
                    id="pet-description"
                    label="Pet Description"
                    value={petDescription}
                    // onChange={handleChange}
                variant="filled"
                />
            </form>
        <Button variant="contained" onClick={handleSubmit}>Create Pet</Button>
    </div>
  )
}

export default PetForm