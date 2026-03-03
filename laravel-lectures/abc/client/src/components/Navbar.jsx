import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='mx-auto my-4 w-fit'>
      <nav className='p-5 rounded shadow bg-gray-800 text-gray-50 font-bold flex gap-4'>
        <Link to={'/'}>Dashboard</Link>
        <Link to={'/departments'}>Departments</Link>
      </nav>
    </div>
  )
}

export default Navbar