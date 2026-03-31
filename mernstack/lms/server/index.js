// node pkgs: express, nodemon, dotenv, mongoose, jwt, nanoid, nodemailer
import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import userRoute from "./routes/user.route.js";

// configurations
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

// test route
app.get("/", (req, res) => {
  res.send("Message from Backend");
});

// OUR ROUTES
app.use('', userRoute)

// PORT :: 5000, 7000, 8000, 8080

// connection
connectDB().then(() => {
  app.listen( PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}) 
