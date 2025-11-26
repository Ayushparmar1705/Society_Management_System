import React, { useEffect, useState } from 'react'
import Managestaff from '../../../Pages/Auth/chairman/Managestaff'
import { StaffManagement } from '../../../Api/RolebasedAuth/Chairman/StaffManagement';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import confirmationMessage from '../../../Component/confirmationMessage';
import { useNavigate } from 'react-router-dom';

export default function ManagestaffHook() {
    // create the result variable to store all staff data
    const [result, setResult] = useState([]);

    // create loading variable for loading
    const [loading, setLoading] = useState(false);
    // fetch the token from local storage and decoded it
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token).id

    const navigate = useNavigate();


    // create the function which is fetch all staff details from db
    const fetchStaff = async () => {
        try {
            setLoading(true);
            const data = await StaffManagement.Managestaff(decodedToken);

            setResult(data.message);

        } catch (err) {
            setLoading(false);
            console.log(err);
        }
        finally {
            setLoading(false);
        }
        return result
    }


    // create the function to in active the staff with confirmation message
    const inActivestaff = async (id) => {
        // <confirmationMessage id={id} fetchStaff={fetchStaff}></confirmationMessage>
        confirmationMessage({ fetchStaff, fun: "InActive", staffAction: StaffManagement.InActivestaff(id) })
    }
    const Activestaff = async (id) => {
        confirmationMessage({ fetchStaff , fun: "Active", staffAction: StaffManagement.Activestaff(id) })
    }

    const getOnestaff = async(id)=>{
        const data = await StaffManagement.editStaff(id);

        navigate("/update-staff",{state : {data : data}})
    }



    // call the fetch staff function
    useEffect(() => {
        fetchStaff();
    }, [])
    return <Managestaff Activestaff={Activestaff} inActivestaff={inActivestaff} loading={loading} result={result} getOnestaff={getOnestaff}></Managestaff>
}
