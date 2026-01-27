import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({children}) => {
  return (
    <>
    <Navbar />
    <div className='my-5 mx-auto max-w-6xl'>
      {children} 
    </div>
    <Footer />
    </>
  )
}

export default WebLayout
