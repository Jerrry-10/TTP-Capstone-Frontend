import React, {useState} from 'react'
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
        </div>
    )
}