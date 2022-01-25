import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Goals from './components/goals';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';
import Register from './components/Register'
import Userprofile from './components/userprofile';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <div>
     
       <Routes> 
         <Route exact path = "/" element =  {<Home/> }   /> 
         <Route exact path = "/Register" element =  {<Register/> }   /> 
         <Route exact path = "/Login" element = {<Login/>} />
         <Route exact path = "/goals" element = {<Goals/>} />
         <Route exact path = "/user" element = {<Userprofile/>} />
       </Routes>
     </div>

   </BrowserRouter>
  );
}

export default App;
