import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <div>
     
       <Routes> 
         <Route exact path = "/" element =  {<Home/> }   /> 
       </Routes>
     </div>

   </BrowserRouter>
  );
}

export default App;
