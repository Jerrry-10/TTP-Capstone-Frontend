import React, {useState} from 'react'
export default function Login(){
    return(
        <div>
        <form >
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName"   />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
        </div>
    )
}