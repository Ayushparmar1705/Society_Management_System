import React, { useEffect, useState } from 'react'
import Manageflats from '../../../Api/MainAdmin/ManageFlats';
import ManageflatsPage from '../../../Pages/MainAdmin/FlatsManagement/ManageflatsPage';


export default function Manageflathook() {
    const [flatsData, setFlatsData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(1);
    const fetchFlatsList = async () => {
        try {
            const data = await Manageflats.getFlats(page, 5);
            const result = await data.message;
            setFlatsData(result);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchFlatsList();
        console.log(flatsData);
    },[])
    
    return <ManageflatsPage page={page} totalPage={totalPage} setTotalPage={setTotalPage} flatsData={flatsData}></ManageflatsPage>
}
