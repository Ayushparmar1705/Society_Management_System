import React, { useEffect, useState } from 'react'

import DashboardManagement from "../../../Api/RolebasedAuth/Chairman/Dashboard"
import Dashboard from '../../../Pages/Auth/chairman/Dashboard';
import { jwtDecode } from 'jwt-decode';

export default function DashboardHook() {
    const [countResidence, setCountresidnece] = useState(0);
    const [countStaff , setCountStaff] = useState(0);
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token).id;
        const sid = localStorage.getItem("society_id");
    const totalResidence = async () => {
        const result = await DashboardManagement.countResidence(sid);
        if (result.code === 200) {
            console.log(result.message);
            console.log(result);
            setCountresidnece(result.message);
            
        }
        else {
            console.log(result.code)
        }
    
    }
    const totalStaff = async () => {
        const result = await DashboardManagement.countStaff(decodedToken);
        if (result.code === 200) {
            console.log(result.message);
            setCountStaff(result.message);

            
        }
        else {
            console.log(result.code)
        }
    
    }
     const totalAllocateParking = async () => {
        const result = await DashboardManagement.countParking(sid);
        if (result.code === 200) {
            console.log(result.message);
            setCountStaff(result.message);

            
        }
        else {
            console.log(result.code)
        }
    
    }
   
    useEffect(()=>{
        totalResidence();
        totalStaff();
    },[]);
    return <Dashboard countResidence={countResidence} countStaff={countStaff} totalAllocateParking={totalAllocateParking}></Dashboard>
}
