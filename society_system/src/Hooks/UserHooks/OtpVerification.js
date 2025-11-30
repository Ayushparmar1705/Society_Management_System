import React from 'react'
import OtpVerificationpage from '../../Pages/Users/OtpVerificationpage'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ManageLogin } from '../../Api/User/ManageLogin';
import {toast} from "react-toastify"
export default function OtpVerification() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email
    const society_name = location.state?.society_name;
    const [otp, setOtp] = useState("");
    const handleVerifyotp = async()=>{
        const result = await ManageLogin.verifyOTP(email,otp)
        
        if(result.code === 200)
        {
            
            if(result.role === 'chairman')
            {
                localStorage.setItem("token",result._token)
                localStorage.setItem("society_name",society_name);
                localStorage.setItem("society_id",result.sid);
                navigate("/dashboard")
                toast.success(result.message);
            }
            else
            {
                localStorage.setItem("flat_id",result.flat_id);
                localStorage.setItem("role",result.role);
                localStorage.setItem("sid",result.sid);
                localStorage.setItem("token",result._token);
                navigate("/managevisitor");
                toast.success(result.message);
            }
          
        }
        else
        {
            toast.error(result.message);
        }

    }
    return <OtpVerificationpage otp={otp} setOtp={setOtp} handleVerifyotp={handleVerifyotp}></OtpVerificationpage>
}
