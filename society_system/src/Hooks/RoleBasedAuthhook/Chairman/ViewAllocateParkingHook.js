import React, { useEffect, useState } from 'react'
import ViewAllocateParking from '../../../Pages/Auth/chairman/ViewAllocateParking'

import { jwtDecode } from 'jwt-decode';
import ParkingAllocationApi from '../../../Api/RolebasedAuth/Chairman/ParkingAllocation';


export default function ViewAllocateParkingHook() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token).id;

    const fetchParkingdetails = async () => {
        try {
            setLoading(true);
            const data = await ParkingAllocationApi.viewAllocateParking(decodedToken);
            setResult(data.message);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchParkingdetails();
    }, []);
    return <ViewAllocateParking result={result} loading={loading}></ViewAllocateParking>
}