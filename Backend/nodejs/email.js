import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '2103015068@uhamka.ac.id',
        pass: 'process.env.PASSWORD'
    },
    tls: {
        rejectUnauthorized: false // Menghindari masalah sertifikat
      }
});

const mailOptions = {
    from: '2103015068@uhamka.ac.id',
    to: 'oktavariba@gmail.com',
    subject: 'test nodejs email',
    text: 'halo halo bandung'
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log(info.response)
    }
})