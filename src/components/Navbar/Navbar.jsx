import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-header">Foody</div>
        <div className="navbar-items">
            <ul className='navbar-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Create Recipe</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
