import express from 'express'
import { getAllDept } from '../controllers/department.controller.js'

const departmentRoute = express.Router()

// const prefix = 'api/v1'
// http://localhost:5000/prefix/departments
departmentRoute.get('/departments', getAllDept)

export default departmentRoute