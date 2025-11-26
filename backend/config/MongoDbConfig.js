const { MongoClient } = require("mongodb")
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri);

const otpVerification = {
    insert: async (otp , email) => {
        try {
            await client.connect();
            const database = client.db("otp");
            const collection = database.collection("otp_collection");
            const result = await collection.insertOne({ otp, email }
            )
        } catch (err) {
            console.error(err)
        }
    },
    verification: async (email,otp) => {

        await client.connect();
        const database = client.db("otp");
        const collection = database.collection("otp_collection");
        const result = await collection.findOne({
            email: email,
            otp: Number(otp),
   
        })

        return result
    }

}
module.exports = { otpVerification }