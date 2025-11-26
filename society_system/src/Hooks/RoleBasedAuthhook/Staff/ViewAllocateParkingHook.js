import React, { useEffect, useState } from 'react'
import ParkingAllocationApi from '../../../Api/RolebasedAuth/Chairman/ParkingAllocation';
import ViewParking from '../../../Pages/Staff/ViewParking';

export default function ViewAllocateParkingHook() {

  const [result, setResult] = useState([]);
   const [loading, setLoading] = useState(true);
  const cid = localStorage.getItem("cid");
  const fetchParkingdetails = async () => {
    try {
      setLoading(true);
      const data = await ParkingAllocationApi.viewAllocateParking(cid);
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

  return <ViewParking result={result} loading={loading}></ViewParking>
}
