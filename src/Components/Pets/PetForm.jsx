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

const PetForm = ({ loggedIn, user, addPet }) => {
    const classes = useStyles();
    const [petsData, setPetsData] = useState({
        user_id: 0,
        name: "",
        type: "Dog",
        description: "Enter your pet description"
    })
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        if(!loggedIn) {
            navigate('/login')
        }
        if(loggedIn) {
            setPetsData({
                ...petsData, user_id: user.id
            })
        }
    }, [user, loggedIn]) 

    const handleSubmit = e => {
        e.preventDefault();
        if(petsData.name) {
            fetch('http://localhost:3001/pets', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ petsData })
            })
                .then(r => r.json())
                .then(data => {
                    addPet(data);
                    navigate("/petlist")
                })
        } else {
            setErrorMessage('Please enter a pet name')
        }
    }

  return (
    <div style={{textAlign:'center'}}> 
        <h1>Create a Pet</h1>
            <form className={classes.root} >
                <TextField
                    id="name"
                    label="pet name"
                    value={petsData.name}
                    onChange={(e) => setPetsData({...petsData, name: e.target.value})} 
                    variant="filled"
                /><br />
                {errorMessage && <div className="error"> {errorMessage} </div>}
                <TextField
                    id="description"
                    label="pet description"
                    value={petsData.description}
                    onChange={(e) => setPetsData({...petsData, description: e.target.value})}
                    variant="filled"
                /><br />
                 <Select
                    labelId="type"
                    id="type"
                    value={petsData.type}
                    label="type"
                    onChange={(e) => setPetsData({...petsData, type: e.target.value})}
                >
                    <MenuItem value={"Dog"}>Dog</MenuItem>
                    <MenuItem value={"Cat"}>Cat</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select><br />
                <Button variant="contained" onClick={handleSubmit}>Create Pet</Button>
            </form>
    </div>
  )
}

export default PetForm