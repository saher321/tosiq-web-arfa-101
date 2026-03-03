import React from 'react'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router'
import Departments from './pages/department/Departments'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/departments" element={<Departments />} />
    </Routes>
  )
}

export default App
