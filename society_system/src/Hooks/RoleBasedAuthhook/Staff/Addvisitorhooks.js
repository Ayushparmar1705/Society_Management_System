import React, { useEffect, useState } from 'react'
import AddVisitor from '../../../Pages/Staff/AddVisitor'
import Managesignup from '../../../Api/User/ManageSignup'
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode"
import Managevisitor from '../../../Api/RolebasedAuth/StaffLogin/Managevisitor';
export default function Addvisitorhooks() {
    const token = localStorage.getItem("token");
    console.log(token);
    const decodedToken = jwtDecode(token).id;
    console.log(jwtDecode(token));
    const [formData, setFormData] = useState({
        "visitor_name": "",
        "visitor_phone": "",
        "flat_code": "",
        "staff_id": decodedToken.sid,
        "society_id": decodedToken.society_id,
    })


    const [flatcode, setFlatCode] = useState([]);
    const decoded = localStorage.getItem("token");

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }
    const getFlatCodeBySocietyName = async () => {
        try {

            const res = await Managesignup.getFlatsCode(decodedToken.society_id);
            if (res.code === 200) {
                setFlatCode(res.message);
            }


            console.log(res);
        } catch (err) {
            console.log(err)
            toast.error("Failed to load flats.");
        }
    };


    useEffect(() => {
        getFlatCodeBySocietyName();
    }, []);
    const handleOnClick = async () => {
        const result = await Managevisitor.AddVisitor(formData);
        console.log(result);
        if (result.code === 200) {
            toast.success(result.message);
        }
        else {
            toast.success("error while adding visitor");
        }
    }






    return <AddVisitor handleOnChange={handleOnChange} handleOnClick={handleOnClick} flatcode={flatcode}></AddVisitor>
}
