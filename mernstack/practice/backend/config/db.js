import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_LOCAL)
    } catch (error) {
        console.log("ERR: ", error)
    }
}