const { Userlogin } = require("../../model/User/Login");
require("dotenv").config();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const createConnection = require("../../config/MongoDbConfig");
const db = require("../../config/dbConfig");
const jwt = require("jsonwebtoken");
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Generate OTP
const genretOTP = () => {
    return crypto.randomInt(100000, 999999);
};

// Configure Brevo client
const brevoClient = new SibApiV3Sdk.TransactionalEmailsApi();
brevoClient.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

const loginController = {
    loginUser: async (req, res) => {
        const { email } = req.body;

        const result = await Userlogin.login(email);
        console.log(result);

        if (result[0].role === "residence" && result[0].user_status === 0) {
            return res.status(500).send({ code: "approval", message: "Waiting for chairman approval" });
        } else {
            const otp = genretOTP();

            // Prepare Brevo email
            const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
                sender: { name: "Urbanhome", email: "no-reply@yourdomain.com" }, // replace with your verified Brevo sender
                to: [{ email: email }],
                subject: "Urbanhome OTP - don't share with anyone",
                textContent: `Your Urbanhome OTP is ${otp}`,
                // htmlContent: `<p>Your Urbanhome OTP is <strong>${otp}</strong></p>`, // optional HTML version
            });

            try {
                const data = await brevoClient.sendTransacEmail(sendSmtpEmail);
                console.log("Brevo email response:", data);
            } catch (error) {
                console.error("Brevo email error:", error);
                return res.status(500).send({ code: 500, message: "Failed to send OTP" });
            }

            await createConnection.otpVerification.insert(otp, email);

            return res.status(200).send({
                code: 200,
                message: "OTP sent to your email",
                result: result,
            });
        }
    },

    verifyOTP: async (req, res) => {
        const otpdata = req.body;
        const sql = "SELECT * FROM users WHERE email = ?";
        const result = await db.query(sql, [otpdata.email]);

        if (result.length > 0) {
            const verificationResult = await createConnection.otpVerification.verification(otpdata.email, otpdata.otp);
            if (verificationResult === null) {
                return res.status(500).send({ message: "Invalid OTP" });
            } else {
                const token = jwt.sign({ id: result[0].uid }, process.env.JWT_SECRET, { expiresIn: "1h" });
                return res.status(200).send({
                    code: 200,
                    message: "OTP verified successfully",
                    role: result[0].role,
                    _token: token,
                    uid: result[0].uid,
                    society_id: result[0].sid,
                    flat_id: result[0].fid,
                });
            }
        } else {
            return res.status(500).send({ code: 500, message: "User not found" });
        }
    }
};

module.exports = { loginController };
