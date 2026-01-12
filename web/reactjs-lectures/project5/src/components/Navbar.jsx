import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="./">Home</NavLink> | {" "}
        <NavLink to="./aboutus">About</NavLink> |  {" "}
        <NavLink to="./contactus">Contact us</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
