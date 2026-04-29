import { customAlphabet } from 'nanoid'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
export const generateOtp = () => {
    const nanoid = customAlphabet('1234567890abcdef', 6)
    const otp = nanoid() //=> "4f90d13a42"
    return otp
}

export const sendEmail = async (to, subject, html) => {
    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        const info = await transporter.sendMail({
            from: `"LMS Portal" <${process.env.EMAIL_USER}>`, // sender address
            to: to,
            subject: subject, // subject line
            html: html, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (error) {
        console.log("ERR: ", error)
    }
}