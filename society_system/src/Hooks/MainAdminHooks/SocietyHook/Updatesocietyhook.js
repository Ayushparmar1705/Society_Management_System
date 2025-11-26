import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Updatesocietypage from '../../../Pages/MainAdmin/SocietyManagement/Updatesocietypage';
import ManageSociety from '../../../Api/MainAdmin/ManageSociety';
import { data, useLocation, useNavigate } from 'react-router-dom';

export default function Updatesocietyhook() {
    const location = useLocation();
    const id = location.state?.id;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        society_name: "",
        email: "",
        phone: "",
        state: "",
        address: "",
        total_flats: "",
        total_blocks: "",
    });

    const getPerticularData = async () => {
        if (!id) return;
        try {
            const result = await ManageSociety.getSocietyById(id);
            const data = await result.message;

            setFormData({
                society_name: data[0].society_name || "",
                email: data[0].email || "",
                phone: data[0].phone || "",
                state: data[0].state || "",
                address: data[0].address || "",
                total_flats: data[0].total_flats || "",
                total_blocks: data[0].total_blocks || "",
            });
        } catch (error) {
            console.error("Error fetching society:", error);
        }
    };

    useEffect(() => {
        getPerticularData();
    }, [id]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleOnSubmit = async () => {
        if (formData.name === "" || !isNaN(formData.name)) {
            toast.error("Invalid society name");
        } else if (formData.email === "") {
            toast.error("Invalid email");
        } else if (formData.phone === "" || formData.phone.length !== 10) {
            toast.error("Invalid phone number");
        } else if (formData.state === "") {
            toast.error("Invalid state");
        } else if (formData.address === "") {
            toast.error("Invalid address");
        } else if (formData.total_flats === "") {
            toast.error("Invalid total flats");
        } else if (formData.total_blocks === "") {
            toast.error("Invalid total blocks");
        } else {
            setLoading(true);
            const toastId = toast.loading("Waiting to update society details")
            try {
                const result = await ManageSociety.updateSociety(id, formData);

                if (result.code === 200) {
                    toast.update(toastId, {
                        render: result.message,
                        type: "success",
                        isLoading: false,
                        autoClose: 3000
                    })
                    navigate("/mainadmin/manage-society");

                } else {
                    toast.update(toastId, {
                        render: result.message,
                        type: "error",
                        isLoading: false,
                        autoClose: 3000
                    })
                }
            } catch (error) {
                toast.update(toastId, {
                    render: "error",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000
                })
            }
            finally {
                setLoading(false);

            }
        }
    };

    return (
        <Updatesocietypage
            formData={formData}
            handleOnChange={handleOnChange}
            handleOnClick={handleOnSubmit}
        />
    );
}
