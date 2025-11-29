const { Userlogin } = require("../../model/User/Login");
require("dotenv").config();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const createConnection = require("../../config/MongoDbConfig");
const db = require("../../config/dbConfig");
const jwt = require("jsonwebtoken")
const genretOTP = () => {
    return crypto.randomInt(100000, 999999);
}
const loginController = {
    loginUser: async (req, res) => {
        const { email } = req.body;

        const result = await Userlogin.login(email);
        if (result[0].role === "residence" && result[0].user_status === 0) {
            return res.status(500).send({ code: "approval", message: "Waiting for chairman approval" });
        }
        else {
            const otp = genretOTP();
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "ayushparmar1705@gmail.com",
                    pass: process.env.GMAIL_PASSWORD,
                }
            })
            const sendMainFunction = async () => {

                const mailOption = {
                    from: "ayushparmar1705@gmail.com",
                    to: email,
                    subject: `OTP for urbanhome`,
                    text: `Your OTP ${otp}. don't share the OTP to anyone`
                }
                try {
                    await transporter.sendMail(mailOption);
                } catch (err) {
                    console.log(err);
                }
            }

            try {
                await sendMainFunction();
            } catch (err) {
                console.log(err);
            }
            await createConnection.otpVerification.insert(otp, email);
            return res.status(200).send({ code: 200, message: "otp send in your main", result: result });
        }
        // Userlogin.login(email, async (err, result) => {
        //     if (err) {
        //         return res.status(500).send({ mmessage: err });
        //     }

        //     else {
        //         console.log(result);
        //         if (result[0].role === "residence" && result[0].user_status === 0) {
        //             return res.status(404).send({ code: "approval", message: "Waiting for chairman approval" })
        //         }
        //         else {
        //             const otp = genretOTP()
        //             const sendMailFunction = async () => {
        //                 const transporter = nodemailer.createTransport({
        //                     service: "gmail",
        //                     auth: {
        //                         user: "ayushparmar1705@gmail.com",
        //                         pass: process.env.GMAIL_PASSWORD,
        //                     }
        //                 })
        //                 const mailOption = {
        //                     from: "ayushparmar1705@gmail.com",
        //                     to: email,
        //                     subject: `OTP for urbanhome`,
        //                     text: `Your OTP ${otp}. don't share the OTP to anyone`
        //                 }
        //                 await transporter.sendMail(mailOption)

        //             }
        //             sendMailFunction()
        //             createConnection.otpVerification.insert(otp, email)
        //             return res.status(200).send({ code: 200, message: "otp send in your mail", result: result })
        //         }
        //     }
        // })
    },
    verifyOTP: async (req, res) => {
        const otpdata = req.body;
        const sql = "SELECT * FROM users WHERE email = ?"
        db.query(sql, [otpdata.email], async (err, result) => {
            if (err) {
                return res.status(500).send({ message: err })
            }
            else {
                if (result.length > 0) {

                    const verificationResult = await createConnection.otpVerification.verification(otpdata.email, otpdata.otp)



                    if (verificationResult === null) {
                        return res.status(500).send({ message: "Invalid otp" })
                    }
                    else {

                        const token = jwt.sign({ id: result[0].uid }, process.env.JWT_SECRET, { expiresIn: "1h" })
                        const sid = jwt.sign({ sid: result[0].sid }, process.env.JWT_SECRET, { expiresIn: "1h" })
                        return res.status(200).send({ code: 200, message: "Otp verify succesfully", role: result[0].role, _token: token, sid: sid, society_id: result[0].society_id, flat_id: result[0].fid })
                    }
                }
                else {
                    return res.status(404).send({ code: 404, message: "User not found" })
                }

            }
        })


    }
}
module.exports = { loginController }