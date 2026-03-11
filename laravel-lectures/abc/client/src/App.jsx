import React from 'react'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router'
import Departments from './pages/department/Departments'
import Students from './pages/student/Students'
import AddDepartment from './pages/department/AddDepartment'
import AddStudent from './pages/student/AddStudent'
import EditDepartment from './pages/department/EditDepartment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/add-department" element={<AddDepartment />} />
      <Route path="/departments/edit/:id" element={<EditDepartment />} />
      <Route path="/students" element={<Students />} />
      <Route path="/add-student" element={<AddStudent />} />
    </Routes>
  )
}

export default App
