import React from 'react'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router'
import Departments from './pages/department/Departments'
import Students from './pages/student/Students'
import AddDepartment from './pages/department/AddDepartment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/add-department" element={<AddDepartment />} />
      <Route path="/students" element={<Students />} />
      <Route path="/add-student" element={<Departments />} />
    </Routes>
  )
}

export default App
