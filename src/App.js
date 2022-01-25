import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Goals from './components/goals';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import Register from './components/Register'
import Userprofile from './components/userprofile';
import Sleep from './components/sleep';
import Fitness from './components/fitness';
import Nutrition from './components/nutrition';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <div>
     
     <Routes> 
         <Route exact path = "/" element =  {<Home/> }   /> 
         <Route exact path = "/Register" element =  {<Register/> }   /> 
         <Route exact path = "/Login" element = {<Login/>} />
         <Route exact path = "/Userprofile" element = {<Userprofile/>} />
         <Route exact path = "/goals" element = {<Goals/>} />
         <Route exact path = "/Sleep" element = {<Sleep/>} />
         <Route exact path = "/Fitness" element = {<Fitness/>} />
         <Route exact path = "/Nutrition" element = {<Nutrition/>} />
         
       </Routes>
     </div>

   </BrowserRouter>
  );
}

export default App;
