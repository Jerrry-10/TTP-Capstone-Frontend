import React from 'react';

// import Navbar from './navbar';
import Login from './login';
import Register from './Register'

function Home () {
 
    return (
  <div>

  <h1> Healthy Friend ™ </h1>
  <h2> The site that will help you balance your life goals, health goals, fitness, and sleep goals! Log in or Register for your chance to have your own Healthy Friend on your journey!</h2>
  <button onClick={Login}> Log In </button>
  <button onClick={Register}> Make a New Account! </button>

  </div>
    );
}

export default Home;