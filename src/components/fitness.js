import React, { Component } from 'react';

 
class Fitness extends Component {
  render() {
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
      <a class="nav-link active" aria-current="page" href="/fitness">Fitness Goals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/nutrition">Nutritional Goals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Will display time and date</a>
      </li>
    </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">These are your fitness goals!</h5>
        <p class="card-text">Any fitness goals you enter for the day will be displayed below.</p>
        {/* <a href="#" class="btn btn-primary">Go to my fitness goals!</a> */}
      </div>
    </div>
    </div>
    );
  }
}
 
export default Fitness;