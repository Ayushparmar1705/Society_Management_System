import React, { useEffect, useState } from 'react'
import Manageflats from '../../../Api/MainAdmin/ManageFlats';
import ManageflatsPage from '../../../Pages/MainAdmin/FlatsManagement/ManageflatsPage';
import { useNavigate } from "react-router-dom";
export default function Manageflathook() {
    const [flatsData, setFlatsData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(1);
    const [oneflats,setOneFlats] = useState({});
    const navigate = useNavigate();
    const fetchFlatsList = async () => {
        try {
            const data = await Manageflats.getFlats(page, 5);
            const result = await data.message;
            setFlatsData(result);

        } catch (error) {
            console.log(error);
        }
    }


    const getFlatsById = async(id)=>{
        try{
            const data = await Manageflats.getFlatsById(id);
            const result = await data.message;
            setOneFlats(result);
            navigate("/update-flats",{state:{oneflats}})

        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchFlatsList();
        console.log(flatsData);
    },[])
    
    return <ManageflatsPage getFlatsById={getFlatsById} page={page} totalPage={totalPage} setTotalPage={setTotalPage} flatsData={flatsData}></ManageflatsPage>
}
