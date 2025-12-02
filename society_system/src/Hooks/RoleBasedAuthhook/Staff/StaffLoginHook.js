import React, { useState } from 'react'
import Managestaff from '../../../Api/RolebasedAuth/StaffLogin/StaffLogin';
import StaffLogin from '../../../Pages/Staff/StaffLogin';
import { toast } from 'react-toastify';
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom';
export default function StaffLoginHook() {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        phone:"",
    })
    const handleOnChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }

    const handleOnClick = async()=>{
        const result = await Managestaff.login(formData)
        console.log("staff login data = ",result);
        const decoded = jwtDecode(result.token);
        console.log(decoded);
        if(result.code === 500)
        {
            toast.error("User not found...");
        }
        else
        {
            localStorage.setItem("token",result.token);
            localStorage.setItem("cid",decoded.cid);
          
            navigate("/staffdashboard");
        }
    }
    return <StaffLogin handleOnChange={handleOnChange} handleOnClick={handleOnClick}></StaffLogin>
}
