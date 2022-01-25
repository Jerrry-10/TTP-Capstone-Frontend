import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export default function Login(){
    return(
        <div>
        <form className='container'>
          <div>
            <label htmlFor="userName">User Name</label>
            <input className="form-control" type="text" name="userName"   />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" />
          </div>
          <div class="d-grid gap-2">
            <button className="btn btn-block btn-primary" type="button">Button</button>
          </div>
        </form>
        <span> Don't have an account? <Link to = "/Register" > Register here!</Link></span>
        </div>
    )
}

