import React from 'react'
import Contact from '../../Pages/Contact/Contact'
import { useState } from 'react'
import { toast } from 'react-toastify'
import contactApi from '../../Api/Contact/ContactApi'

export default function Contacthook() {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        societyName: "",
        address: "",
        purpose: "",
        message: "",
    })

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async () => {
        const sendingToast = toast.info("Sending message .....", {
            autoClose: false,
        });
        try {
            const result = await contactApi.contactToAdmin(formData);
            toast.dismiss(sendingToast);
            if (result.code === 200) {
                toast.success(result.message);
            }
            else {
                toast.error(result.message);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    return <Contact handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}></Contact>

}
