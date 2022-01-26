import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login(){
  const [email,setemail] = useState("")
  const [pass,setpass] = useState("")
  const Log = async a =>{
  // let navigate = useNavigate();
    a.preventDefault()
    try{
        const body = {email, pass}
        console.log('hello')
        const response = await fetch("http://localhost:5001/login", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        console.log(response)
       window.location="/userprofile"
       
    }catch(err){
        console.error(err.messenge)
    }
}
  
    return(
        <div>
        <form className='container' onSubmit={Log}>
          <div>
            <label htmlFor="userName"> email</label>
            <input className="form-control" type="text" name="userName" onChange={a => setemail(a.target.value)}   />
          </div>
          <div>
          <hr></hr>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" onChange={a => setpass(a.target.value)} />
          </div>
          <div class="d-grid gap-2">
            <button className="btn btn-block btn-primary">Button</button>
          </div>
        </form>
        <span> Don't have an account? <Link to = "/Register" > Register here!</Link></span>
        </div>
    )
}