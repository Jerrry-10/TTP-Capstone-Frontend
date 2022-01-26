import React from 'react';
import { Link } from 'react-router-dom'
// import Navbar from './navbar';
import Login from './login';
import Register from './Register'

function Home () {
 
const link = () =>{
  return(
    <a href='/login'></a>
  
  )
}

 return (
  <div>

  <h1> Healthy Friend ™ </h1>
  <Link to = "/login" className="NavText"> <input value="twa"type = 'submit'/>  </Link> 
  


  </div>
    );
}

export default Home;