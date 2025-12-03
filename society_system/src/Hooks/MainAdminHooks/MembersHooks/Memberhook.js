import React, { useEffect, useState } from 'react'
import ViewMembers from '../../../Pages/MainAdmin/mebersManagement/ViewMembers'
import MembersManagement from '../../../Api/Viewmember/Member';
import { toast } from 'react-toastify';

export default function Memberhook() {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dupResult, setDupresult] = useState([]);




    const getMembers = async () => {
        setLoading(true);
        try {
            const myresult = await MembersManagement.viewMembers();
           
            setResult(myresult.message);
            setDupresult(myresult.message);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }
    const makeChairman = async (id) => {
        setLoading(true);
        console.log(id);
        const toastContainer = toast.info("Waiting to convert chairman", {
            autoClose: 5000,
            isLoading: true,
        })
        try {
            const myresult = await MembersManagement.makeChairman(id);
            toast.update(toastContainer, {
                render: myresult.message,
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


    const searchMember = async (name) => {
        if (name !== "") {
            const sresult = await MembersManagement.searchMember(name);
            console.log(sresult);
            if (sresult.code === 200) {
                setResult(sresult.message);

            }
        }
        else {
            setResult(dupResult);
        }
    }
    useEffect(() => {
        getMembers();

    }, []);
    return <ViewMembers result={result} loading={loading} makeChairman={makeChairman} searchMember={searchMember}></ViewMembers>
}
