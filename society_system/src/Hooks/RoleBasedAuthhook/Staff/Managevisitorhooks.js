import ViewVisitor from '../../../Pages/Staff/ViewVisitor';
import ManageVisitor from '../../../Api/RolebasedAuth/StaffLogin/Managevisitor';
import {jwtDecode} from 'jwt-decode';
import { useEffect, useState } from 'react';

export default function Managevisitorhooks() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    console.log("view member token = ",token);
    const getVisitor = async () => {
        try {
            setLoading(true);
            const data = await ManageVisitor.viewVisitor(jwtDecode(token).society_id);
            setResult(data.message);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const tokenString = localStorage.getItem("token");
        if (tokenString) {
            const decodedToken = jwtDecode(tokenString);
            getVisitor(decodedToken.id);
        }
    }, []);

    return <ViewVisitor result={result} loading={loading} />;
}
