import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className = 'navbar' id="Nav">
                <li className = "NavText"><Link to = "/" className = "NavText">Home page</Link> </li>
               
            </ul>
        </div>
    )
}