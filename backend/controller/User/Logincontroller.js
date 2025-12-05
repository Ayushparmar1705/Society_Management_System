const { Userlogin } = require("../../model/User/Login");
require("dotenv").config();
const crypto = require("crypto");
const createConnection = require("../../config/MongoDbConfig");
const db = require("../../config/dbConfig");
const jwt = require("jsonwebtoken");
const { Resend } = require("resend");

// Initialize Resend
const resend = new Resend(process.env.API_KEY);

// OTP Generator
const generateOTP = () => crypto.randomInt(100000, 999999);

const loginController = {
    loginUser: async (req, res) => {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).send({ message: "Email is required" });
            }

            const result = await Userlogin.login(email);

            if (!result || result.length === 0) {
                return res.status(404).send({ message: "User not found" });
            }

            // Residence user approval check
            if (result[0].role === "residence" && result[0].user_status === 0) {
                return res
                    .status(403)
                    .send({ code: "approval", message: "Waiting for chairman approval" });
            }

            // Generate OTP
            const otp = generateOTP();

            // Send email using Resend
            try {
                await resend.emails.send({
                    from: "Urbanhome <onboarding@resend.dev>",
                    to: email,
                    subject: "Urbanhome OTP Verification",
                    text: `Your OTP is: ${otp}. Do not share it with anyone.`,
                });
            } catch (emailError) {
                console.error("OTP Email Error:", emailError);
                return res.status(500).send({
                    message: "OTP sending failed",
                    error: emailError.message,
                });
            }

            // Save OTP to MongoDB
            await createConnection.otpVerification.insert({
                email,
                otp,
            });

            return res.status(200).send({
                code: 200,
                message: "OTP sent to your email",
                result: result,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: "Internal server error" });
        }
    },

    verifyOTP: async (req, res) => {
        try {
            const { email, otp } = req.body;

            if (!email || !otp) {
                return res.status(400).send({ message: "Email and OTP are required" });
            }

            // Check user in MySQL
            const sql = "SELECT * FROM users WHERE email = ?";
            const result = await db.query(sql, [email]);

            if (result.length === 0) {
                return res.status(404).send({ code: 404, message: "User not found" });
            }

            // OTP Verification
            const verificationResult = await createConnection.otpVerification.verification(
                email,
                otp
            );

            if (!verificationResult) {
                return res.status(400).send({ message: "Invalid OTP" });
            }

            // Generate JWT Token
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
            console.error(error);
            return res.status(500).send({ message: "Internal server error" });
        }
    },
};

module.exports = { loginController };
