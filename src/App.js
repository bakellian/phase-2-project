import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //alias to use "router" instead of "BrowserRouter"
// in the new update "Switch" is now "Routes". Does exactly what switch does but more effective. and don't have to use "exact" prop anymore. Router does it automatically 
import HomePage from './Components/Static /HomePage';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PetList from './Components/Pets/PetList';
import PetForm from './Components/Pets/PetForm';
import { useState } from 'react';
//using Routes instead of switch 

const App = () => { //changed to arrow function to keep it up to date with ES6 best practices
  

  return (
    <Router>
      {/* Navbar is inside router so we will be able to use links */}
      <Navbar /> 
      {/* Router v Routes in React?? */}
      <Routes>
        <Route path="/" element={ <HomePage /> } /> 
        {/* rendering homepage in the element */}
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/petlist" element={ <PetList /> } />
        <Route path="/petform" element={ <PetForm /> } />
      </Routes>
    </Router> 
  );
}

export default App;
