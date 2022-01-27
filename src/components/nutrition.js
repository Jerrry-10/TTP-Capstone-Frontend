import React, { Component } from 'react';

class Nutrition extends Component {
  render() {
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
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
      <a class="nav-link disabled">Current date is {date}</a>
      </li>
    </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">These are your nutritional goals!</h5>
        <p class="card-text">Any nutritional goals you enter for the day will be displayed below.</p>
        {/* <a href="#" class="btn btn-primary">Go to my fitness goals!</a> */}
      </div>
    </div>
    </div>
    );
  }
}
 
export default Nutrition;