



import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Recipies from './pages/Recipies'
import RecipeDetail from './pages/RecipeDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/recipies' element={<Recipies />} />
      <Route path='/recipes/:id' element={<RecipeDetail />} />
    </Routes>
  )
}

export default App
