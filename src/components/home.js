import React from 'react';
import { Link } from 'react-router-dom'
// import Navbar from './navbar';
import Login from './login';
import Register from './Register'

function Home () {
 
    return (
  <div>

  <h1> Healthy Friend ™ </h1>
  <h2> The site that will help you balance your life goals, health goals, fitness, and sleep goals! Log in or Register for your chance to have your own Healthy Friend on your journey!</h2>
  <button onClick={Login}><Link to = "/login" className="NavText"> <input value="Log In"type = 'submit'/>  </Link> </button>
  <button onClick={Register}> <Link to = "/Register" className="NavText"> <input value="Make a new account here!"type = 'submit'/>  </Link> </button>

  


  </div>
    );
}

export default Home;