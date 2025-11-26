const { Usersignup } = require("../../model/User/Signup");
const nodemailer = require("nodemailer")

const SignupController = {
    getFlatsCodeBySocietyId : (req,res)=>{
        const id = req.params.id;
        Usersignup.getFlatcodebysocietyId(id,(err,result)=>{
            if(err){
                return res.status(500).send({code : 500 , message : err});
            }
            else{
                return res.status(200).send({code : 200 , message : result})
            }
        })
    },
    SignupUser : (req,res)=>{
        const data = req.body;
        console.log(data);
        Usersignup.Signup(data , (err , result)=>{
            if(err){
                if(err.errno === 1062)
                {
                    return res.status(500).send({code : 500 , message : "Phone number alredy exists"})
                }
                return res.status(500).send({code : 500 , message : err});
            }
            else{
      
                return res.status(200).send({code : 200 , message : "User Account created succesfully"});
            }
        })
    },

}

module.exports = {SignupController}