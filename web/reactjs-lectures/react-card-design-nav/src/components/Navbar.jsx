import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
