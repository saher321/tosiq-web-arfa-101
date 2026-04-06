import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGODB_LIVE_URI)
        if (conn) {
            console.log("Database is connected successful:", conn.connection.host)
        } else {
            console.log("Failed to connect the database")
        }

    } catch (error) {
        console.log("ERR: ", error)
        process.exit(1);
    }
}