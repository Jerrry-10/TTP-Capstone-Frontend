import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul id="Nav">
                <li className = "Nav"><Link to = "/" className = "NavText">Home page</Link> </li>
               
            </ul>
        </div>
    )
}