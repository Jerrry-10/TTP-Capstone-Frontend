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
  <div className="container">
<h1 class="text-center">Healthy Friend ™</h1>
<h2 class="text-center"> The site that will help you balance your life goals, health goals, fitness, and sleep goals!</h2>
<h2 class="text-center"> Log in or Register to have your own Healthy Friend with you on your journey!</h2>


<div class="d-grid gap-2 col-3 mx-auto">
  <button class="btn btn-outline-success" onClick={Login}> <Link to = "/login" className="NavText" > <input value="Log In"type = 'submit'/>  </Link> </button>
  <button class="btn btn-outline-warning" onClick={Register}> <Link to = "/Register" className="NavText"> <input value="Make a New Account Here!"type = 'submit'/>  </Link> </button>
  </div>
  




  </div>
    );
}

export default Home;