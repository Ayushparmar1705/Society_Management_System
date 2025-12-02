const { Userlogin } = require("../../model/User/Login");
require("dotenv").config();
const crypto = require("crypto");
const createConnection = require("../../config/MongoDbConfig");
const db = require("../../config/dbConfig");
const jwt = require("jsonwebtoken");
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Generate OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999);
};

// Configure Brevo (formerly SendinBlue) client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = process.env.API_KEY;

const brevoClient = new SibApiV3Sdk.TransactionalEmailsApi();

const loginController = {
    loginUser: async (req, res) => {
        try {
            const { email } = req.body;

            const result = await Userlogin.login(email);
            if (!result || result.length === 0) {
                return res.status(404).send({ code: 404, message: "User not found" });
            }

            if (result[0].role === "residence" && result[0].user_status === 0) {
                return res.status(403).send({ code: "approval", message: "Waiting for chairman approval" });
            }

            const otp = generateOTP();

            // Prepare Brevo email
            const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
                sender: { name: "Urbanhome", email: "no-reply@yourdomain.com" }, // replace with your verified Brevo sender
                to: [{ email: email }],
                subject: "Urbanhome OTP - don't share with anyone",
                textContent: `Your Urbanhome OTP is ${otp}`,
                // htmlContent: `<p>Your Urbanhome OTP is <strong>${otp}</strong></p>`, // optional HTML version
            });

            // Send email via Brevo
            const data = await brevoClient.sendTransacEmail(sendSmtpEmail);
            console.log("Brevo email response:", data);

            // Store OTP for verification (MongoDB)
            await createConnection.otpVerification.insert(otp, email);

            return res.status(200).send({
                code: 200,
                message: "OTP sent to your email",
                result: result,
            });
        } catch (error) {
            console.error("Login error:", error);
            return res.status(500).send({ code: 500, message: "Internal server error" });
        }
    },

    verifyOTP: async (req, res) => {
        try {
            const { email, otp } = req.body;

            const result = await db.query("SELECT * FROM users WHERE email = ?", [email]);
            if (!result || result.length === 0) {
                return res.status(404).send({ code: 404, message: "User not found" });
            }

            const verificationResult = await createConnection.otpVerification.verification(email, otp);
            if (!verificationResult) {
                return res.status(400).send({ message: "Invalid OTP" });
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
            console.error("OTP verification error:", error);
            return res.status(500).send({ code: 500, message: "Internal server error" });
        }
    }
};

module.exports = { loginController };
