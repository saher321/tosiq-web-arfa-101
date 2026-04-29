import User from "./user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { generateOtp, sendEmail } from '../../utils/common.js'
dotenv.config()

const users = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    role: "admin",
    city: "Lahore",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    role: "user",
    city: "Karachi",
  },
  {
    id: 3,
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    role: "vendor",
    city: "Islamabad",
  },
  {
    id: 4,
    name: "Ayesha Malik",
    email: "ayesha.malik@example.com",
    role: "user",
    city: "Multan",
  },
  {
    id: 5,
    name: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    role: "vendor",
    city: "Faisalabad",
  },
  {
    id: 6,
    name: "Fatima Noor",
    email: "fatima.noor@example.com",
    role: "admin",
    city: "Rawalpindi",
  },
  {
    id: 7,
    name: "Hassan Raza",
    email: "hassan.raza@example.com",
    role: "user",
    city: "Peshawar",
  },
  {
    id: 8,
    name: "Zainab Sheikh",
    email: "zainab.sheikh@example.com",
    role: "vendor",
    city: "Quetta",
  },
];

export const allUsers = (req, res) => {
  res.send({ status: 200, count: users.length, users });
}

// filter request :: roles => admin, vendor, user
// http://localhost:5000/users/rolename
export const filteredUser = (req, res) => {
  let userRole = req.params.role;
  // let userRole = req.body.role

  const filteredUsers = users.filter((user) => {
    return user.role == userRole;
  });

  if (filteredUsers.length == 0)
    return res.send({ status: false, message: "No users were found" });

  return res.send({ status: 200, users: filteredUsers });
}

export const createUser = async (req, res) => {
  const data = req.body;
  if (!data.name || !data.email || !data.password || !data.role) {
    return res.send({ status: false, message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email: data.email });
    if (user) {
      return res.send({ status: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const html = `
    <h1>Thank you! You have successfully created your account in LMS Portal</h1>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Role: ${data.role}</p>
    `
    sendEmail(data.email, "User Created Successfully 🎉", html);
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role
    });

    await newUser.save();
    return res.send({ status: true, message: "User created successfully" });
  } catch (error) {
    console.log(error)
    return res.send({ status: false, message: "Network error" });
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({ status: false, message: "Please fill all the fields" })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.send({ status: false, message: "User not found" })
    }

    let isMatched = await bcrypt.compare(password, user.password)
    if (!isMatched) {
      return res.send({ status: false, message: "Invalid password" })
    }

    // sign (usr-info, secret-code, expire-duration)
    const token = jwt.sign({ id: user._id, name: user.name, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })
    if (token) {
      return res.send({ status: true, message: "Login successful", token })
    } else {
      return res.send({ status: false, messaage: "Failed to create session" })
    }
  } catch (error) {
    console.log("ERR: ", error)
    return res.send({ status: false, message: "Network error" })
  }

}

export const forgotPassword = async (req, res) => {
  const { email } = req.body
  if (!email) return res.send({
    status: false,
    message: "Provide your email"
  })

  try {
    const user = await User.findOne({email: email})
    if (!user) return res.send({
      status: false,
      message: "Email is not valid"
    })
    const otp = generateOtp();
    user.otp = otp;
    user.is_otp_verified = false;
    user.save();
    const html = `
    Your requested otp is: ${otp}
    `
    sendEmail(user.email, "Your reset password OTP", html)

    return res.send({
      status: true,
      message: "Otp has been send to your email"
    })

    
  } catch (error) {
    
  }
}