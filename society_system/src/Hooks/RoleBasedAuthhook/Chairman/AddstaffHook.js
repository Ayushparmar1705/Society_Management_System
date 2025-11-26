import React, { useState } from 'react'

import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import Addstaff from '../../../Pages/Auth/chairman/Addstaff';
import { StaffManagement } from '../../../Api/RolebasedAuth/Chairman/StaffManagement';

export default function AddstaffHook() {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const getId = decodedToken.id;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
    })
    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleOnClick = async () => {
        console.log("Add staff function called...");
        if (formData.name === "" || !isNaN(formData.name)) {
            toast.error("Invalid name");
        }
        else if (formData.email === "" || !isNaN(formData.email)) {
            toast.error("Invalid email");
        }
        else if (formData.phone === "" || formData.phone.length != 10) {
            toast.error("Invalid phone number");
        }
        else if (formData.role === "") {
            toast.error("Invalid role");
        }


        else {
            const result = await StaffManagement.Addstaff(formData, getId)
           
            if (result.code === 500) {
                toast.error(result.message)
            }
          
            else {
                toast.success("Staff add succesfully")
            }
        }
    }
    return <Addstaff handleOnChange={handleOnChange} handleOnClick={handleOnClick}></Addstaff>
}
