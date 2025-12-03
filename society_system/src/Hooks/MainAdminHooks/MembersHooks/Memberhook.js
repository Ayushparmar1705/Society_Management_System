import React, { useEffect, useState } from 'react'
import ViewMembers from '../../../Pages/MainAdmin/mebersManagement/ViewMembers'
import MembersManagement from '../../../Api/Viewmember/Member';
import { toast } from 'react-toastify';

export default function Memberhook() {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);




    const getMembers = async() => {
        setLoading(true);
        try {
            const myresult = await MembersManagement.viewMembers();
            setResult(myresult.message);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }
    const makeChairman = async (id) => {
        setLoading(true);
        const toastContainer = toast.info("Waiting to convert chairman", {
            autoClose: 5000,
            isLoading: true,
        })
        try {
            const myresult = await MembersManagement.makeChairman(id);
            setResult(myresult.message);
            toast.update(toastContainer, {
                render: "Convert to chairman",
                type: "success",
                isLoading: false,
                autoClose: 5000,
            })
        } catch (err) {
            toast.update(toastContainer, {
                render: err,
                type: "error",
                isLoading: false,
                autoClose: 5000,
            })
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getMembers();
    }, []);
    return <ViewMembers result={result} loading={loading} makeChairman={makeChairman}></ViewMembers>
}
