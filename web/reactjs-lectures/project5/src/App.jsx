import React from 'react'
import { Route, Routes } from 'react-router'
import About from './About'
import Contact from './Contact'
import Home from './Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/contactus' element={<Contact />} />
    </Routes>
  )
}

export default App
