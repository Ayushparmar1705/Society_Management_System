import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ManageSociety from '../../../Api/MainAdmin/ManageSociety'
import AddSocietypage from '../../../Pages/MainAdmin/SocietyManagement/AddSocietypage'


export default function Addsocietyhook() {
    const [formData , setFormData] = useState({
        name : "",
        email : "",
        phone : "",
        state : "",
        address : "",
        total_flats : "",
        total_blocks : "",
    })
    const handleOnChnage = (e)=>{
        console.log(e.target.name,e.target.value);
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData);
    }
    const handleOnSubmit = async()=>{
        console.log(formData);
        if(formData.name === "" || !isNaN(formData.name))
        {
            toast.error("Invalid society name");
        }
        else if(formData.email === "")
        {
            toast.error("Invalid email");
        }
        else if(formData.phone === "" || !formData.phone.length === 10)
        {
            toast.error("Invalid phone number");
        }
        
        else if(formData.state === "")
        {
            toast.error("Invalid state");
        }
        else if(formData.address === "")
        {
            toast.error("Invalid address");
        }
        else if(formData.total_flats === "")
        {
            toast.error("Invalid total flats");
        }
        else if(formData.total_blocks === "")
        {
            toast.error("Invalid total blocks");
        }
        else
        {
            const result = await ManageSociety.addSociety(formData);
            if(result.code === 200)
            {
                toast.success("Society added succesfully");
            }
            else if(result.code === 409)
            {
                toast.error(result.message);
            }
            else
            {
                toast.error(result.message);
            }
        }
    }
    return <AddSocietypage handleOnChange={handleOnChnage} handleOnClick={handleOnSubmit}></AddSocietypage>
}
