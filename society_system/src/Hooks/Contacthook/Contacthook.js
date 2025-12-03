import React from 'react'
import Contact from '../../Pages/Contact/Contact'
import { useState } from 'react'
import { toast } from 'react-toastify';

export default function Contacthook() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        societyName: "",
        address: "",

    })
    const [fileTitle, setFileTitle] = useState("");
    const [loading, setLoading] = useState(true);


    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSelectFile = (e) => {
        setFileTitle(e.target.files[0]);
    }
    const formDataFile = new FormData();
    const handleQuery = async() => {
        setLoading(true);
        try {
            const file = e.target.files[0];
            if (!fileTitle.trim()) {
                toast.error("Invalid file");
            } else {
                formDataFile.append("file", file);
                Object.keys(formData).forEach((key) => {
                    formDataFile.append(key, formData[key]);
                })

                const result = await ContactModel(formData);
                if (result) {
                    toast.success(result.message);
                } else {
                    toast.error(result.message);
                }
            }
        } catch (err) {
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    return <Contact formData={formData} fileTitle={fileTitle} handleSelectFile={handleSelectFile} handleOnChange={handleOnChange} handleQuery={handleQuery} loading={loading}></Contact>
}
