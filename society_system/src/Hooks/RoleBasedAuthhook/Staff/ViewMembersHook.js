
import ViewMembers from '../../../Pages/Staff/Viewmember';
import { Membermanagement } from '../../../Api/RolebasedAuth/Chairman/MemberManagement';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

export default function ViewMembersHook() {
    const [loading, setLoading] = useState(true)
    const [member,setMember] = useState([]);
    // const id = localStorage.getItem("token");
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
