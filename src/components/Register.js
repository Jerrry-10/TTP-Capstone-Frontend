import React, {useState} from 'react'
import { Redirect, Link } from "react-router-dom"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Register(){
  const [fn,setfn] = useState("")
  const [ln,setln] = useState("")
  const [pw,setpw] = useState("")
  const [e,sete] = useState("")
  const [dob,setdob] = useState("")
 // const [show, setshow] = useState(false)
  const Signup = async a =>{
    alert("signed up")
    a.preventDefault()
    // console.log("before " + show)
    // setshow(true)
    // console.log("after " + show)
    try{
        const body = {fn,ln,e,pw}
        
        const response = await fetch("http://localhost:5001/signup", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
      //  document.getElementById('complate').innerText = `Your signup was added to the database Please head to `
        window.location = "/login"
      // if(ln !== "" || ln.length > 0){
      //   setshow(true)
      // }
     
    }catch(err){
        console.error(err.messenge)
    }
}
    return(
        <div>
        <form className='container' onSubmit={Signup}>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input className="form-control" type="text" name="FirstName" onChange={a => setfn(a.target.value)} placeholder='Enter your first name...' />
          </div>
          <div>
            <label htmlFor="Lastname">Last name</label>
            <input className="form-control" type="text" name="Lastname" onChange={a => setln(a.target.value)} placeholder='Enter your last name...'/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className="form-control" type="email" name="email" onChange={a => sete(a.target.value)} placeholder='Enter the email you want to associate with this account...'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" onChange={a => setpw(a.target.value)} placeholder='Enter a password...'/>

          </div> 
          
          <div className="d-grid gap-2">
            <button className="btn btn-block btn-primary" >Register</button>
          </div>
        </form>
        <div id = 'complate'></div>
        </div>
    )
}

// FROM BOOTSTRAP: MIGHT HELP LATER
//{show == false ? null : <div><Link to = "/login" className="NavText"> Login</Link></div>}
{/* <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form> */}