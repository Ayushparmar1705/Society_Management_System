// const { Userlogin } = require("../../model/User/Login");
// require("dotenv").config();
// const nodemailer = require("nodemailer");
// const crypto = require("crypto");
// const createConnection = require("../../config/MongoDbConfig");
// const FormData = require("form-data");
// const Mailgun = require("mailgun.js");

// const db = require("../../config/dbConfig");
// const jwt = require("jsonwebtoken")
// const genretOTP = () => {
//     return crypto.randomInt(100000, 999999);
// }
// const loginController = {
//     loginUser: async (req, res) => {
//         const { email } = req.body;

//         const result = await Userlogin.login(email);
//         console.log(result);
//         if (result[0].role === "residence" && result[0].user_status === 0) {
//             return res.status(500).send({ code: "approval", message: "Waiting for chairman approval" });
//         }
//         else {


//             const mailgun = new Mailgun(FormData);
//             const mg = mailgun.client({
//                 username: "api",
//                 key: process.env.API_KEY,

//             });
//             const otp = genretOTP();
//             try {
//                 const data = await mg.messages.create("sandbox91b71e47fdd04c2b9cb132573c009658.mailgun.org", {
//                     from: "Urbanhome <postmaster@sandbox91b71e47fdd04c2b9cb132573c009658.mailgun.org>",
//                     to: email,
//                     subject: 'Urbanhome OTP. dont share to anyone',
//                     text: `urbanhome otp ${otp}`
//                 })
//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }



//             await createConnection.otpVerification.insert(otp, email);
//             return res.status(200).send({ code: 200, message: "otp send in your main", result: result });
//         }

//     },
//     verifyOTP: async (req, res) => {
//         const otpdata = req.body;
//         const sql = "SELECT * FROM users WHERE email = ?";
//         const result = await db.query(sql, [otpdata.email]);
//         if (result.length > 0) {
//             const verificationResult = await createConnection.otpVerification.verification(otpdata.email, otpdata.otp);
//             if (verificationResult === null) {
//                 return res.status(500).send({ message: "Invalid OTP" });
//             }
//             else {
//                 const token = jwt.sign({ id: result[0].uid }, process.env.JWT_SECRET, { expiresIn: "1h" });
//                 console.log(result);
//                 // return res.status(200).send({ code: 200, message: "OTP verify succcesfully", role: result[0].role, _token: token, uid: result[0].uid, society_id: result[0].society_id, flat_id: result[0].fid });


//                 return res.status(200).send({
//                     code: 200,
//                     message: "OTP verify succesfully",
//                     role: result[0].role,
//                     _token: token,
//                     uid: result[0].uid,
//                     society_id: result[0].sid,
//                     flat_id: result[0].fid,
//                 });
//             }
//         } else {
//             return res.status(500).send({ code: 500, message: "User not found" });
//         }



//     }
// }
// module.exports = { loginController }
const { Userlogin } = require("../../model/User/Login");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");
const createConnection = require("../../config/MongoDbConfig");
const db = require("../../config/dbConfig");
const jwt = require("jsonwebtoken");

// Set SendGrid API key
sgMail.setApiKey(process.env.API_KEY);
console.log(process.env.API_KEY)
// Generate a 6-digit OTP
const generateOTP = () => crypto.randomInt(100000, 999999);

const loginController = {
    loginUser: async (req, res) => {
        try {
            const { email } = req.body;

            const result = await Userlogin.login(email);
            if (!result || result.length === 0) {
                return res.status(404).send({ code: 404, message: "User not found" });
            }

            // Check for residence approval
            if (result[0].role === "residence" && result[0].user_status === 0) {
                return res.status(403).send({
                    code: "approval",
                    message: "Waiting for chairman approval",
                });
            }

            // Generate OTP
            const otp = generateOTP();

            // Send OTP via SendGrid API
            const msg = {
                to: email, // recipient
                from: "ayushparmar1705@gmail.com", // verified sender in SendGrid
                subject: "Urbanhome OTP - Do not share",
                text: `Your Urbanhome OTP is: ${otp}`,
            };

            await sgMail.send(msg);
            console.log("OTP email sent to:", email);

            // Save OTP in DB
            await createConnection.otpVerification.insert(otp, email);

            return res.status(200).send({
                code: 200,
                message: "OTP sent to your email",
                result: result,
            });

        } catch (error) {
            console.error("Error in loginUser:", error);
            return res.status(500).send({ code: 500, message: "Failed to send OTP email" });
        }
    },

    verifyOTP: async (req, res) => {
        try {
            const { otp, email } = req.body;

            const sql = "SELECT * FROM users WHERE email = ?";
            const result = await db.query(sql, [email]);

            if (!result || result.length === 0) {
                return res.status(404).send({ code: 404, message: "User not found" });
            }

            const verificationResult = await createConnection.otpVerification.verification(email, otp);
            if (!verificationResult) {
                return res.status(400).send({ code: 400, message: "Invalid OTP" });
            }

            const token = jwt.sign(
                { id: result[0].uid },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            return res.status(200).send({
                code: 200,
                message: "OTP verified successfully",
                role: result[0].role,
                _token: token,
                uid: result[0].uid,
                society_id: result[0].sid,
                flat_id: result[0].fid,
            });
        } catch (error) {
            console.error("Error in verifyOTP:", error);
            return res.status(500).send({ code: 500, message: "OTP verification failed" });
        }
    },
};

module.exports = { loginController };
