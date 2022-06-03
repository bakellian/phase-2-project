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
    //setting cookie in the browser for the user_id so the logged in user can persist across the app. 
    //figure out how to put character fetch in here from use effect below
  }

  const fetchPets = (user) => {
    //feth the pets when the user logs in
    
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

  // what is use effect and how does it work?
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
      {/* Navbar is inside router so we will be able to use links */}
      {/* giving the nav bar the log in status */}
      <Navbar loggedIn={ loggedIn } userLogout={userLogout} user={ user } /> 
      {/* Router v Routes in React?? */}
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
