import React, {useState} from 'react'
export default function Login(){
  const [fn,setfn] = useState("")
  const [ln,setln] = useState("")
  const [pw,setpw] = useState("")
  const [e,sete] = useState("")
  const [dob,setdob] = useState("")
  const Signup = async a =>{
    a.preventDefault()
    try{
        const body = {fn,ln,e,pw}
        const response = await fetch("http://localhost:5001/signup", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        document.getElementById('sscuess').innerText = 'Your signup was added to the database'
    }catch(err){
        console.error(err.messenge)
    }
}
    return(
        <div>
        <form className='container' onSubmit={Signup}>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input className="form-control" type="text" name="FirstName" onChange={a => setfn(a.target.value)}  />
          </div>
          <div>
            <label htmlFor="Lastname">Last name</label>
            <input className="form-control" type="text" name="Lastname" onChange={a => setln(a.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input className="form-control" type="email" name="email" onChange={a => sete(a.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" onChange={a => setpw(a.target.value)}/>
          </div> 
          
          <div class="d-grid gap-2">
            <button className="btn btn-block btn-primary" type="button">Register</button>
          </div>
        </form>
        </div>
    )
}