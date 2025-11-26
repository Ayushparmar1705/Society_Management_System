import React, { useEffect, useState } from 'react'
import ParkingAllocation from '../../../Pages/Auth/chairman/ParkingAllocation'
import ParkingAllocationApi from '../../../Api/RolebasedAuth/Chairman/ParkingAllocation';
import { jwtDecode } from "jwt-decode"
import { toast } from 'react-toastify';
export default function ParkingAllocationHook() {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token).id;


    const societyToken = localStorage.getItem("society_id");
    const societydecodedToken = jwtDecode(societyToken).sid;


    const [flatCode, setFlatCode] = useState([]);
    const [formData, setFormData] = useState({
        flat_id: '',
        parking_no: '',
        vehical_type: '',
        parking_location: '',
        cid: decodedToken
    });

    const getFlatCodeFunc = async () => {
        const result = await ParkingAllocationApi.getFlats(societydecodedToken);
        console.log(result);
        setFlatCode(result.message);
    }

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });


    }
    const handleOnClick = async () => {
        if (formData.flat_id === "") {
            toast.error("Invalid flat code");
        }
        else if (formData.parking_no === "") {
            toast.error("Invalid parking number");
        }
        else if (formData.vehical_type === "") {
            toast.error("Invalid vehical type");
        }
        else if (formData.parking_location === "") {
            toast.error("Invalid parking location");
        }
        else {
            const result = await ParkingAllocationApi.AllocateParking(formData);
            if (result.code === 200) {
                toast.success("Parking Allocate succesfully");
            }
            else {
                toast.error("Error to allocate parking");
            }
        }
    }





    useEffect(() => {
        getFlatCodeFunc();
    }, []);
    return <ParkingAllocation flatCode={flatCode} handleOnChange={handleOnChange} handleOnClick={handleOnClick}></ParkingAllocation>
}
