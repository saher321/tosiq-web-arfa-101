import express from 'express'
import { getUsers } from '../controllers/user.controller.js'

const userRoute = express.Router()

userRoute.get('/users', getUsers)

export default userRoute
