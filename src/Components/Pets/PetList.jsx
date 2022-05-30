import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';


//each pet card will have a button that links into the detailed pet page

const PetList = ({ user, loggedIn }) => {
  const navigate = useNavigate();
  //with use effect we will only have access to this page if we are logged in. 
  //if were not logged in 
  // useEffect(() => {}, [loggedIn])
  //   if(!loggedIn) {
  //     navigate('/login');
  //   }

  return (
    <div >
      <h1>{user.userName}'s Pets</h1>
      <Button variant="contained" to='/petlist/new' component={ Link }>Create a New Pet</Button>
    </div>
  )
}

export default PetList