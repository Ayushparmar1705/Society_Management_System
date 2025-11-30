const { MongoClient } = require("mongodb")
// const uri = "mongodb://localhost:27017/"

const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL);
const connectDB = async () => {
    await client.connect();
}
const otpVerification = {
    insert: async (otp, email) => {
        try {
            connectDB();
            const database = client.db("otp");
            const collection = database.collection("otp_collection");
            const result = await collection.insertOne({ otp, email }
            )
        } catch (err) {
            console.error(err)
        }
    },
    verification: async (email, otp) => {

        connectDB();
        const database = client.db("otp");
        const collection = database.collection("otp_collection");
        const result = await collection.findOne({
            email: email,
            otp: Number(otp),

        })

        setTimeout(() => {
            collection.deleteOne({ email: email });
        }, 60000);

        return result
    },

}
module.exports = { otpVerification }