import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className = 'navbar' id="Nav">
                <li className = "Home"><Link to = "/" className = "NavText">Home Page</Link> </li>
                <li className = "Login"><Link to = "/login" className = "NavText">Log In</Link> </li>
                <li className = "UserProfile"><Link to = "/userprofile" className = "NavText">User Profile</Link> </li>
                <li className = "NavText"><Link to = "/information" className = "NavText">Information</Link> </li>
                <li className = 'Goals'><Link to = "/goals" className="NavText">Goals</Link> </li>
                {/* 
                <li className = "NavText"><Link to = "/" className = "NavText">Home page</Link> </li> */}
               
            </ul>
        </div>
    )
}