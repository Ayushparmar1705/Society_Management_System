
import { useEffect, useState } from 'react';
import ParkingAllocationApi from '../../../Api/RolebasedAuth/Chairman/ParkingAllocation';
import ViewParking from '../../../Pages/Staff/ViewParking';
import { jwtDecode } from 'jwt-decode';

export default function ViewAllocateParkingHook() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const cid = jwtDecode(token).cid;
  const fetchParkingdetails = async () => {
    try {
      setLoading(true);
      const data = await ParkingAllocationApi.viewAllocateParking(cid);
      setResult(data.message);
      console.log("data = ",data);
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
