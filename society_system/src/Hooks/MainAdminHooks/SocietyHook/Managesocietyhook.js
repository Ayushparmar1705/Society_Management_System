import React, { useEffect, useState } from 'react'
import ManageSociety from '../../../Api/MainAdmin/ManageSociety'

import { toast } from 'react-toastify';
import ManageSocietyPage from '../../../Pages/MainAdmin/SocietyManagement/ManageSocietyPage';

export default function Managesocietyhook() {
    const [societyList, setSocietyList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [duplicateList, setDuplicateList] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPage , setTotalPage] = useState(1);
    const fetchedSocietyList = async () => {
        // set loading is true when the data is fetching
        setLoading(true);
        // get the society details from the api
        try {
            const getSociety = async () => {
                const result = await ManageSociety.societyDetails(page , 5);
                // set the result into the society list
                console.log(result);
                if (result.code === 200) {
                    setSocietyList(result.message);
                    setDuplicateList(result.message);
                    setTotalPage(result.totalPages);
                }
                else{
                    setTotalPage(1);
                }
                setLoading(false);
            }

            getSociety();
        }
        catch (error) {

            console.log(error);
        }
        finally {
            // set loading to false if data is fetched properly
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchedSocietyList();
    }, [page])


    const handleSearch = async (e) => {
        const name = e.target.value;
        if (name.length > 0) {

            try {
                const result = await ManageSociety.searchSociety(name);
                if (result.code === 200) {
                    setSocietyList(result.message);

                }
                else {
                    setSocietyList([]);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            setSocietyList(duplicateList);
        }
    }
    const handleDelete = async (sid) => {
        try {
            setLoading(true);
            if(loading){
                toast.success("just second to deactivate society");
            }
            else{
                toast.success("Society deleted succesfully");
            }
            await ManageSociety.deleteSociety(sid);

           
        }
        catch (error) {
            setLoading(false);
        }
        finally {
            setLoading(false);
            fetchedSocietyList();
        }

    }
    const ActivateSociety = async (sid) => {
        const result = await ManageSociety.ActivateSociety(sid);
        if (result.code === 200) {
            toast.success(result.message);
        }
        else {
            toast.error("Something went error");
        }
    }
    return <ManageSocietyPage page={page} setPage={setPage} totalPage={totalPage} ActivateSociety={ActivateSociety} loading={loading} societyList={societyList} handleDelete={handleDelete} handleSearch={handleSearch} ></ManageSocietyPage>
}
