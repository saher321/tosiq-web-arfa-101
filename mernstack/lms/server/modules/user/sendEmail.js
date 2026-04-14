import nodemailer from "nodemailer";
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
            to, // list of recipients
            subject, // subject line
            html, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
}