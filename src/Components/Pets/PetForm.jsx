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
        type: "",
        description: ""
    })
    const navigate = useNavigate(); //hook for being able to redirect to other routes 
    
    useEffect(() => {
        // if(!loggedIn) {
        //     navigate('/login')
        // }
    }, [loggedIn]) //not working - whenever page is refreshed were brought to login - even though we are logged in 

    // const handleChange = e => {
    //     setFormData({ 
    //         [e.target.name]: e.target.name.value,
    //         [e.target.description]: e.target.value,
    //         [e.target.type]: e.target.value
    //     })
    // }

    const handleSubmit = e => {
        e.preventDefault();
        alert('you submitted')
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
                {/* <TextField
                    id="type"
                    label="pet type"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    variant="filled"
                /> */}
                <Button variant="contained" onClick={handleSubmit}>Create Pet</Button>
            </form>
    </div>
  )
}

export default PetForm