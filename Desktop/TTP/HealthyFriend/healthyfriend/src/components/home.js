import React from 'react';

// import Navbar from './navbar';
import Login from './login';

function Home () {
   //  const ButtonGroup = styled.div;
// Usage
    return (
<>
        <h1> HealthyFriend</h1>
        <h2> logo</h2>
  <button onClick={<Login></Login>}> Log In </button>
</>
    );
}

export default Home;