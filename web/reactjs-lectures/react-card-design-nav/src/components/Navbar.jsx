import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='mt-3 flex items-center justify-center'>
        <div className='w-fit p-4 rounded-full bg-gray-950 text-white'>
        <nav className='flex gap-3'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/contact-us">Contact</NavLink>
        </nav>
    </div>

    </div>
  )
}

export default Navbar
