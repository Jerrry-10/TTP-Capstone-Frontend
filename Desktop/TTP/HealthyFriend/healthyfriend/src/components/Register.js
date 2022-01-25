import React, {useState} from 'react'
export default function Login(){
    return(
        <div>
        <form className='container'>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input className="form-control" type="text" name="FirstName"   />
          </div>
          <div>
            <label htmlFor="Lastname">Last name</label>
            <input className="form-control" type="text" name="Lastname" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input className="form-control" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" />
          </div> 
          
          <div class="d-grid gap-2">
            <button className="btn btn-block btn-primary" type="button">Register</button>
          </div>
        </form>
        </div>
    )
}