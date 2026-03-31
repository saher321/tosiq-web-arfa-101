// node pkgs: express, nodemon, dotenv, jwt, nanoid, nodemailer
import express from "express";
import userRoute from "./routes/user.route.js";

const app = express();


app.get("/", (req, res) => {
  res.send("Message from Backend");
});


app.use('', userRoute)

// PORT :: 5000, 7000, 8000, 8080

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
