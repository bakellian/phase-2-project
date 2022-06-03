import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PetCard from './PetCard';


//each pet card will have a button that links into the detailed pet page
//passing in our pets state from app.js
const PetList = ({ user, loggedIn, pets, deletePet }) => {
  const navigate = useNavigate();
  //with use effect we will only have access to this page if we are logged in. 
  //if were not logged in 
  // useEffect(() => {}, [loggedIn])
  //   if(!loggedIn) {
  //     navigate('/login');
  //   }
console.log("pets:", pets)
  //make a map for each pet to have its own card 
  const petCards = pets.map(pet => <PetCard key={ pet.id } pet={ pet } deletePet={ deletePet }/>)


  return (
    <div >
      <h1>{user.userName}'s Pets</h1>
      <Button variant="contained" to='/petlist/new' component={ Link }>Create a New Pet</Button>
      { petCards }
    </div>
  )
}

export default PetList