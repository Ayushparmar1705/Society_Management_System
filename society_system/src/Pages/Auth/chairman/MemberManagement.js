import React from 'react';
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';


export default function MemberManagement({ member, loading, MemberRequest }) {
    return (
        <div className='flex flex-1 items-start '>

            <Loginchairmanheader></Loginchairmanheader>


            {member.length === 0 ? (
                <p className='text-center text-xl w-full font-bold'>No member found</p>
            ) : (

                loading ? (
                    <div className='w-full flex justify-center items-center h-[300px]'>
                        <img className='h-[100px] w-[100px] m-auto' src='/Assets/loading.gif' alt='Loading' />
                    </div>
                ) : (
                    <div className='w-full font-bold font-2xl'>
                        <p className='text-black text-center text-2xl m-[auto]'>Member Management</p>
                        <div className='flex  gap-4 p-5 flex-wrap justify-between font-semibold'>
                            {member.map((data, index) => (
                                <div key={index} className='p-5 rounded bg-gray-50 shadow w-[300px]'>
                                    <p className='mt-1 p-1  w-[250px]'>Name : {data.username}</p>
                                    <p className='mt-1 p-1  w-[250px]'>Email : {data.email}</p>
                                    <p className='mt-1 p-1  w-[250px]'>Phone : {data.phone}</p>
                                    <p className='mt-1 p-1  w-[250px]'>flat_code : {data.flat_code}</p>
                                    <p className='mt-1 p-1  w-[250px]'>floor_number : {data.floor_number}</p>
                                    <p className='mt-1 p-1  w-[250px]'>role : {data.role}</p>
                                    <div className='flex flex-col gap-2 mt-4'>
                                        {data.is_approve === 0 ? (
                                            <button onClick={() => {
                                                MemberRequest(data.uid)
                                            }} className='p-2 bg-blue-500 text-white rounded w-full'>
                                                Approve
                                            </button>

                                        ) : (
                                            <>
                                                <p className='text-green-500'>Approved</p>

                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )

            )}
        </div >
    );
}
