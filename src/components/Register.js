import React, {useState} from 'react'
export default function Login(){
    return(
        <div>
        <form className='container'>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input className="form-control" type="text" name="FirstName"  placeholder='Enter your first name...' />
          </div>
          <div>
            <label htmlFor="Lastname">Last name</label>
            <input className="form-control" type="text" name="Lastname" placeholder='Enter your last name...'/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className="form-control" type="email" name="email" placeholder='Enter the email you want to associate with this account...'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" placeholder='Enter a password...'/>
          </div> 
          
          <div class="d-grid gap-2">
            <button className="btn btn-block btn-primary" type="button">Register</button>
          </div>
        </form>
        </div>
    )
}

// FROM BOOTSTRAP: MIGHT HELP LATER

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