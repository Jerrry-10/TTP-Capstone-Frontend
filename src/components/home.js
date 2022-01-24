import React from 'react'
import Navbar from './navbar'
import Login from './login'
import UserProfile from './userprofile'
import Information from './information'
import Goals from './goals'


export default function Home() {
    return (
        <div class="container">
         <img src="" class="logo"/>
         
         <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
         <div class="container-fluid">
         <a class="navbar-brand" href="#">Navbar</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Log In</a>
        <a class="nav-link" href="#">User Profile</a>
        <a class="nav-link" href="#">Your Information</a>
        <a class="nav-link" href="#">Goals</a>
      </div>
    </div>
  </div>
</nav>

         <div class="row">
            <div class="col">
                <h1> Healthy Friend </h1>
                <h2> The project that is designed to help you with your personal goals and help you manage them!
                   --- Log In to the Left --- </h2>
                    </div>




                    

        {/* <div class="row">
            <div class="col">
                <h1> not sure </h1>
                <h2> not sure </h2>
            </div> */}



            
{/* 
            <div class="col">
                <div class="card card1">
                    <h5>card here</h5>
                  
                </div>
                <div class="card card2">
                    <h5>card here</h5>
                    
                </div>
                <div class="card card3">
                    <h5>card here</h5>
                   
                </div>
                <div class="card card4">
                    <h5> </h5>
                    
                </div>
            </div> */}


        </div>
      </div>
     // </div>
    )}