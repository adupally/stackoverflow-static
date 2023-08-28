import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
const  App = () => {
  return (
<>
    <div className="App">
      <Router>
      
     
     <Home />
     </Router>
    </div>
    </>
  );
}

export default App;
