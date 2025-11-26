import React, { useState } from 'react'

import { toast } from 'react-toastify';

import { StaffManagement } from '../../../Api/RolebasedAuth/Chairman/StaffManagement';
import Updatestaff from '../../../Pages/Auth/chairman/Updatestaff';
import { useLocation } from 'react-router-dom';

export default function UpdatestaffHook() {

    const location = useLocation();
    const result = location.state.data


    const [formData, setFormData] = useState({
        name: result.message[0].name,
        email: result.message[0].email,
        phone: result.message[0].phone,
        role: result.message[0].role,
        sid : result.message[0].sid
    })
    const handleOnChange = (e) => {
        console.log(formData)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleOnClick = async (id) => {
        
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
            const result = await StaffManagement.updateStaff(formData, id)
            console.log(result);
            if (result.code === 500) {
                toast.error("Error to inserting the staff")
            }
            else {
                toast.success("Staff add succesfully")
            }
        }
    }
    return <Updatestaff formData={formData} handleOnChange={handleOnChange} handleOnClick={handleOnClick}></Updatestaff>
}
