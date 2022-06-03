import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PetCard from './PetCard';

const PetList = ({ user, loggedIn, pets, deletePet }) => {
  const navigate = useNavigate();
  
  useEffect(() => {if(!loggedIn) {
    navigate('/login');
  }}, [loggedIn])
    
  const petCards = pets.map(pet => <PetCard key={ pet.id } pet={ pet } deletePet={ deletePet } pets={ pets }/>)

  return (
    <React.Fragment>
      <div style={{textAlign:'center'}}> 
        <h1>{user.userName}'s Pets</h1>
        <Button variant="contained" to='/petlist/new' component={ Link }>Create a New Pet</Button>
      </div>
        <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', height: '100vh'}}> 
        { petCards }
        </div>
    </React.Fragment>
  )
}

export default PetList