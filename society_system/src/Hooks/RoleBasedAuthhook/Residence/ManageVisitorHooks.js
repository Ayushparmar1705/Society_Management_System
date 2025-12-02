
import React, { useEffect, useState } from 'react'
import Managevisitor from '../../../Pages/Auth/residence/Managevisitor'
import ManageResidence from '../../../Api/RolebasedAuth/residence/ManageVisitor';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

export default function ManageVisitor() {


    const [visitor, setVisitor] = useState([]);

    const fetchVisitor = async () => {
        const token = localStorage.getItem("token");
        console.log("token" , jwtDecode(token));
        const sid = localStorage.getItem("sid");
        const decodedSid = jwtDecode(sid);
        console.log("sid = ",decodedSid.sid);
        const fid = localStorage.getItem("flat_id");

        console.log("fid = ",fid);
        const result = await ManageResidence.Managevisitor(decodedSid.sid,jwtDecode(fid).fid);
        console.log(result);
        setVisitor(result.message);
    }



    const approve = async(id)=>{
        const result = await ManageResidence.Approve(id);
        console.log(result);
        if(result.code === 500)
        {
            toast.error(result.message);
        }
        else
        {
            toast.success(result.message);
        }
    }

    useEffect(() => {
        fetchVisitor();
    },[])


    return <Managevisitor visitor={visitor} approve={approve}></Managevisitor>
}