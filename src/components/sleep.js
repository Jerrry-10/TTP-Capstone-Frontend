import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';
 
export default function Fitness () {
  
  const [Fitnessd,setFitnessd] = useState([])
  const getFitdata = async () =>{
    await axios.get(`http://localhost:5001/goals/`).then(response => {
      setFitnessd(response.data)
      console.log(response.data)
    })
    

  }
  useEffect(() => {
    getFitdata()
  }, []);
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    return (
        <div>
        <div class="card text-center">
        <div class="card-header">
            
        <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link" href="/userprofile">User Profile - Your Information</a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/sleep">Sleep Goals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/fitness">Fitness Goals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/nutrition">Nutritional Goals</a>
      </li>
      <li class="nav-item">
        <p className='white'> Current date is {date}</p>
      </li>
    </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">These are your sleep goals!</h5>
        <p class="card-text">Any sleep goal you enter for the day will be displayed below.</p>
        {/* <a href="#" class="btn btn-primary">Go to my fitness goals!</a> */}
      </div>
    </div>
    { Fitnessd.map(e=>{
     return(
       <div class="card">
  <img src="https://cdn.discordapp.com/attachments/933464332874956800/936250259053613066/asleep_sleep_dream_bedtime_sleeping-128.png" class="card-img-top imgheigh" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">I want to sleep for:</h5>
    <p class="card-text">{e.fitness}</p>

  </div>
</div>
     )
   }) }
    </div>
    );
  }

 
