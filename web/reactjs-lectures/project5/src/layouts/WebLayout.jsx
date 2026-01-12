import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({ children }) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default WebLayout
