import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Static /HomePage';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PetList from './Components/Pets/PetList';
import PetForm from './Components/Pets/PetForm';
import { useState, useEffect } from 'react';


const App = () => {
  
  const [user, setUser] = useState('{}');
  const [loggedIn, setLoggedIn] = useState(false);
  const [pets, setPets] = useState([]);

  const userLogin = user => {
    setUser(user);
    setLoggedIn(true);
    localStorage.setItem('user_id', user.id);
  }

  const userLogout = user => {
    setUser({}); 
    setLoggedIn(false); 
    localStorage.removeItem('user_id');
  }

  const addPet = (pet) => {
    setPets([...pets, pet])
  }

  const deletePet = (deletedPet) => {
    setPets(pets.filter(pet => pet.id !== deletedPet.id))
  }

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if(userId !== 'undefined' && !loggedIn) {
      fetch('http://localhost:3001/users/' + userId) 
        .then(resp => resp.json())
        .then(data => {
          userLogin(data)
          fetch('http://localhost:3001/pets') 
            .then(resp => resp.json())
            .then(petsData => {
              const userPets = petsData.filter(petData => {
                return petData.petsData.user_id === parseInt(userId)
              })
              setPets(userPets)
            }) 
          }) 
    }
  }, [])

  return (
    <Router>
      <Navbar loggedIn={ loggedIn } userLogout={userLogout} user={ user } /> 
      <Routes>
        <Route path="/" element={ <HomePage /> } /> 
        <Route path="/signup" element={ <Signup  userLogin={ userLogin } /> } />
        <Route path="/login" element={ <Login userLogin={ userLogin } /> } />
        <Route path="/petlist" element={ <PetList user={ user } loggedIn={ loggedIn } pets={ pets } deletePet={ deletePet } /> } />
        <Route path="/petlist/new" element={ <PetForm loggedIn={ loggedIn } user={ user } addPet={ addPet } /> } />
      </Routes>
    </Router> 
  );
}

export default App;
