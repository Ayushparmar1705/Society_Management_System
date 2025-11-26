import React, { useEffect, useState } from 'react'
import ManageBlock from '../../../Api/MainAdmin/ManageBlock';
import { toast } from 'react-toastify';
import Addflatspage from '../../../Pages/MainAdmin/FlatsManagement/Addflatspage';
import Manageflats from '../../../Api/MainAdmin/ManageFlats';
export default function Addflathook() {
    const [societyName , setSocietyName] = useState([]);
    const [blockName , setBlockName] = useState([]);
    const [formData, setFormData] = useState({ sid : "", bid : "" , flat_number : "", flat_type : "" , flat_price : "" , flat_area : "" , balcony_area : "" , flat_code : ""});

    // create the function for all input change
    const handleOnChange = async(e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
        

    }
    // get block by flats on where user can select the society name
    const getBlockByFlatName = async(e)=>{
        try {
            const result = await Manageflats.getBlockByFlatsName(e.target.value);
            if(result.code === 200){
                setBlockName(result.message);
            }


        }
        catch (error) {
            console.log(error);
        }

    }
    // get All society name 
    const getSocietyName = async () => {
        try {
            const result = await Manageflats.getSocietyName();
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

    // handle the onclick when user click on button

    const handleOnClick = async () => {
        if (formData["sid"] === "") {
            toast.error("Invalid society name");
        }
        else if(formData["bid"] === "")
        {
            toast.error("Invalid block name");
        }
        else if(formData["flat_number"] === ""){
            toast.error("Invalid flat number");
        }
        else if(formData["floor_number"] === ""){
            toast.error("Invalid floor number");
        }
        else if(formData["flat_type"] === ""){
            toast.error("Invalid flat type");
        }
        else if(formData["flat_price"] === ""){
            toast.error("Invalid flat price");
        }
        else if(formData["flat_area"] === ""){
            toast.error("Invalid flat area");
        }
        else {
            try {
                const result = await Manageflats.addFlat(formData);

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



    return <Addflatspage getBlockByFlatName={getBlockByFlatName} handleOnChange={handleOnChange} handleOnClick={handleOnClick} societyName={societyName} blockName={blockName}></Addflatspage>
}