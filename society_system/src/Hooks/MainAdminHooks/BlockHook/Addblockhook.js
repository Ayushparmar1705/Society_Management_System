import React, { useEffect, useState } from 'react'
import ManageBlock from '../../../Api/MainAdmin/ManageBlock';
import { toast } from 'react-toastify';
import Addblockpage from '../../../Pages/MainAdmin/BlockManagement/Addblockpage';

export default function Addblockhook() {
    const [societyName, setSocietyName] = useState([]);
    const [formData, setFormData] = useState({ society_id: "", block_name: "" });


    const handleOnChange = (e) => {
        console.log(formData);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const getSocietyName = async () => {
        try {
            const result = await ManageBlock.getSocietyName();
            console.log(result);
            setSocietyName(result);

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSocietyName();
    }, [])
    const handleOnClick = async () => {
        if (formData["society_id"] === "") {
            toast.error("Invalid society name");
        }
        else if (formData["block_name"] === "") {
            toast.error("Invalid block name")
        }
        else {
            try {
                const result = await ManageBlock.addBlock(formData);

                if (result.code === 200) {
                    toast.success(result.message);
                    
                } else {
                    toast.error(result);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }


    return <Addblockpage handleOnChange={handleOnChange} handleOnClick={handleOnClick} societyName={societyName}></Addblockpage>
}