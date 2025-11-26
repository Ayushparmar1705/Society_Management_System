import React, { useEffect, useState } from 'react';
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';
import MemberHook from '../Chairman/MemberHook';
import ViewMembers from '../../../Pages/Staff/Viewmember';
import { Membermanagement } from '../../../Api/RolebasedAuth/Chairman/MemberManagement';
import { jwtDecode } from 'jwt-decode';

export default function ViewMembersHook() {
    const [loading, setLoading] = useState(true)
    const [member,setMember] = useState([]);
    const id = localStorage.getItem("token");
    const sid = localStorage.getItem("sid");
    const decodedSid = jwtDecode(sid).sid;
    const fetchMember = async () => {
        try {
            setLoading(true)
            console.log(decodedSid);
            const result = await Membermanagement.allMembers(decodedSid);
            setMember(result);
        
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }


    useEffect(()=>{
        fetchMember();
    },[]);

    
    return <ViewMembers loading={loading} member={member}></ViewMembers>
}
