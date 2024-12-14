import { config } from "dotenv";
import mailgun from "mailgun-js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
config();
const SendMail = () =>
  mailgun({
    apiKey: process.env.MAIL_API_KEY,
    domain: process.env.MAIL_DOMAIN_KEY,
  });

export default SendMail;

export const Email = async (user) => {
  let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  const token = jwt.sign({ userInfo: user.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    debug: true, // true for 465, false for other ports
    logger: true, // true for 465, false for other ports
    connection: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.EMAIL_USER, // generated ethereal user
  //     pass: process.env.EMAIL_PASS, // generated ethereal password
  //   },
  // });
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: `${user.email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b><a href="http://localhost:3000/AccountVerified/${token}">verified account</a></b>`, // html body
  });
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
