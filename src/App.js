import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/home';
function App() {
  return (
    <BrowserRouter>
    
     <div>
     
       <Routes> 
         <Route exact path = "/" element =  {<Home/> }   /> 
       </Routes>
     </div>

   </BrowserRouter>
  );
}

export default App;
