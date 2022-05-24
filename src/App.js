import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //alias to use "router" instead of "BrowserRouter"
import HomePage from './Components/Static /HomePage';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
//using Routes instead of switch 

const App = () => { //changed to arrow function to keep it up to date with ES6 best practices
  

  return (
    <Router>
      {/* Navbar is inside router so we will be able to use links */}
      <Navbar /> 
      {/* whats the difference between route v switch  */}
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </Router> 
  );
}

export default App;
