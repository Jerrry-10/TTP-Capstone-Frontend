import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/home';
import Login from './components/login'
import Navbar from './components/navbar';

function App() 
{
  return (

    <div className = "App">
      <Navbar />
      <Route exact path= "/" component={<Home></Home>} />
      <Route exact path= "/login" component={<Login></Login>} />
    
    
    <div class="row">
            <div class="col">
                <h1> Healthy Friend </h1>
                <h2> Click the button to log in/register. </h2>
                    </div>
            </div>
 </div>

  );
}
export default App;