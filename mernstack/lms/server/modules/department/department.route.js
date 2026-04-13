import express from 'express'
import { addDept, delDept, getAllDept } from './department.controller.js'

const departmentRoute = express.Router()

// const prefix = 'api/v1'
// http://localhost:5000/prefix/departments
departmentRoute.get('/departments', getAllDept)
departmentRoute.post('/departments/create', addDept)
departmentRoute.delete('/departments/delete/:id', delDept)

export default departmentRoute