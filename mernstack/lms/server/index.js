// node pkgs: express, nodemon, dotenv, jwt, nanoid, nodemailer
import express from "express"

const app = express()

const users = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    role: "admin",
    city: "Lahore"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    role: "user",
    city: "Karachi"
  },
  {
    id: 3,
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    role: "vendor",
    city: "Islamabad"
  },
  {
    id: 4,
    name: "Ayesha Malik",
    email: "ayesha.malik@example.com",
    role: "user",
    city: "Multan"
  },
  {
    id: 5,
    name: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    role: "vendor",
    city: "Faisalabad"
  },
  {
    id: 6,
    name: "Fatima Noor",
    email: "fatima.noor@example.com",
    role: "admin",
    city: "Rawalpindi"
  },
  {
    id: 7,
    name: "Hassan Raza",
    email: "hassan.raza@example.com",
    role: "user",
    city: "Peshawar"
  },
  {
    id: 8,
    name: "Zainab Sheikh",
    email: "zainab.sheikh@example.com",
    role: "vendor",
    city: "Quetta"
  }
];

app.get('/', (req, res) => {
    res.send("Message from Backend")
})

app.get('/users', (req, res) => {
    res.send({ status: 200, users })
})

// filter request
// http://localhost:5000/users/rolename
app.get('/users/:role', (req, res) => {
    let userRole = req.params.role
    // let userRole = req.body.role

    const filteredUsers = users.filter( (user) => {
      return user.role == userRole
    })

    if (filteredUsers.length == 0) 
      return res.send({status: false, message: "No users were found"})

    return res.send({ status: 200, users: filteredUsers})
})

// PORT :: 5000, 7000, 8000, 8080

app.listen( 5000, () => {
    console.log("Server is running at http://localhost:5000")
})