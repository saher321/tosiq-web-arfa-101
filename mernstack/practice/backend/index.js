// epxress, nodemon, dotenv, nanoid, nodemailer, mongoose, jwt

import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import { connectDB } from './config/db.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.use('', userRoute)

app.get('/', (req, res) => {
    return res.send({status: true, message: "Server is running state"}) 
})

const colors = ["Pink", "Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Brown", "Black", "White"]

app.get('/colors', (req, res) => {
    return res.send({status: true, colors})
})

connectDB().then(() => {
    app.listen( PORT, () => {
        console.log("Server is running at http://localhost:"+PORT)
    })
})