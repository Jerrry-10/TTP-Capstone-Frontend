import React, { Component, useState, useEffect } from 'react';
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
    return (
        <div>
        <div class="card text-center">
        <div class="card-header">
            
        <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link" href="/userprofile">User Profile - Home</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/sleep">Sleep Goals</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/fitness">Fitness Goals</a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/nutrition">Nutrition Goals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Will display time and date</a>
      </li>
    </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">These are your nutritional goals!</h5>
        <p class="card-text">Any nutritional goals you enter for the day will be displayed below.</p>
        {/* <a href="#" class="btn btn-primary">Go to my fitness goals!</a> */}
      </div>
    </div>
    { Fitnessd.map(e=>{
     return(
       <div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">I want to sleep for</h5>
    <p class="card-text">{e.nutrition}</p>

  </div>
</div>
     )
   }) }
    </div>
    );
  }
