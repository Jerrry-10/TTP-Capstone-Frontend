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
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    return (
        <div>
        <div className="card text-center">
        <div className="card-header">
            
        <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a className="nav-link" href="/userprofile">User Profile - Home</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/sleep">Sleep Goals</a>
      </li>
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/fitness">Fitness Goals</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/nutrition">Nutritional Goals</a>
      </li>
      <li className="nav-item">
      <p className='white'> Current date is {date}</p>
      </li>
    </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">These are your fitness goals!</h5>
        <p className="card-text">Any fitness goals you enter for the day will be displayed below.</p>
        
      </div>
    </div>
    { Fitnessd.map(e=>{
     return(
       <div class="card ">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f8HZU7bIeeLfHB_rykUKBGiomj9RUV4zkw&usqp=CAU" class="card-img-top imgheigh" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">I want to run for:</h5>
    <p class="card-text">{e.exercise}</p>

  </div>
</div>
     )
   }) }
    </div>
   

    )}
    
  

 