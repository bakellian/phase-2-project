import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //alias to use "router" instead of "BrowserRouter"
// in the new update "Switch" is now "Routes". Does exactly what switch does but more effective. and don't have to use "exact" prop anymore. Router does it automatically 
import HomePage from './Components/Static /HomePage';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PetList from './Components/Pets/PetList';
import PetForm from './Components/Pets/PetForm';
import { useState, useEffect } from 'react';
//using Routes instead of switch 

const App = () => { //changed to arrow function to keep it up to date with ES6 best practices
  
  const [user, setUser] = useState('{}'); //need state of user to live in the app since its the parent to all the component so we can have the user persist throughout the app. 
  const [loggedIn, setLoggedIn] = useState(false);//also need to keep track if loggen in or not. set to false in beginning stages since no one will be logged in. 

   //this takes the data that we get back from the FETCH
  const userLogin = user => {
    setUser(user); //sets the user
    setLoggedIn(true); //set logged in to true 
    localStorage.setItem('user_id', user.id);
    //setting cookie in the browser for the user_id so the logged in user can persist across the app. 
  }

  // what is use effect and how does it work?
  useEffect(() => {
    const userId = localStorage.getItem('user_id'); //grabbing our logged in user id into a variable
    // userId && !loggedIn
    if(userId !== 'undefined' && !loggedIn) { //if user ID exists and were not logged in we need to log ourselves in. 
      console.log('yo', userId)
      fetch('http://localhost:3001/users/' + userId) 
        .then(resp => resp.json())
        .then(data => userLogin(data)) //this will update everything in userLogin function
    }
  }, [])
 

  return (
    <Router>
      {/* Navbar is inside router so we will be able to use links */}
      {/* giving the nav bar the log in status */}
      <Navbar loggedIn={ loggedIn }/> 
      {/* Router v Routes in React?? */}
      { loggedIn ? <h1>Logged In!!!!!</h1> : null }
      <Routes>
        <Route path="/" element={ <HomePage /> } /> 
        {/* rendering homepage in the element */}
        <Route path="/signup" element={ <Signup  userLogin={ userLogin } /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/petlist" element={ <PetList /> } />
        <Route path="/petform" element={ <PetForm /> } />
      </Routes>
    </Router> 
  );
}

export default App;
