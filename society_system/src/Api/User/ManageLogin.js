const { default: ApiEndpoints } = require("../../Apiroutes/UserRoutes/UserEndpoints");

const ManageLogin = {
    login: async (email) => {

        console.log(email);
        const data = await fetch(ApiEndpoints.userlogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        })
        console.log(data);
        const result = await data.json();
        return result
    },
    verifyOTP : async(email,otp)=>{
        const data = await fetch(ApiEndpoints.verifyotp,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({email,otp})
        })
        const result = await data.json();
        console.log("verify otp = ",result);
        return result
    }

}
module.exports = {ManageLogin}