import React from 'react';
import {useState} from 'react';


function Userprofile () {
    const [lists, setLists] = useState([])

    const getLists = async () =>{
        try{
            const response = await fetch("http://localhost:5000")
            const jsonData = await response.json()
            setLists(jsonData)
        }catch(err){
            console.error(err.messenge)
        }
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;




    return (
<div>
    <div class="card text-center">
    <div class="card-header">
        
    <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/userprofile">User Profile - Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/sleep">Sleep Goals</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/fitness">Fitness Goals</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/nutrition">Nutritional Goals</a>
  </li>

  
   <li class="nav-item">

    <a class="nav-link disabled">Current date is {date}</a>
  </li> 

</ul>

  </div>
  <div class="card-body">
    <h5 class="card-title">This is your User Profile!</h5>
    <p class="card-text">This is where you will be able to see your goals and personal information. Click through the tabs to see your information.</p>
    {/* <a href="#" class="btn btn-primary">Go to my fitness goals!</a> */}
  </div>
</div>
</div>

  )};

export default Userprofile;