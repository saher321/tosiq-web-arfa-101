import express from 'express'
import { addDept, getAllDept } from './department.controller.js'

const departmentRoute = express.Router()

// const prefix = 'api/v1'
// http://localhost:5000/prefix/departments
departmentRoute.get('/departments', getAllDept)
departmentRoute.post('/departments/create', addDept)

export default departmentRoute