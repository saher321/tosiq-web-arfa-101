import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const AdminLayout = ({children}) => {
  return (
    <>
      <Navbar />
        <div className='p-4 mx-auto my-4 max-w-6xl'>
          {children}
        </div>
      <Footer />
    </>
  )
}

export default AdminLayout