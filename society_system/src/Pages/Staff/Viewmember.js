import React, { useState } from 'react';

import SecurityHeader from '../../Component/Usercomponent/SecurityHeader';

export default function ViewMembers({member,loading}) {

    return (
        <div className='flex flex-1 items-start '>

            <SecurityHeader></SecurityHeader>


            {member.length === 0 ? (
                <p className='text-center text-xl w-full font-bold'>No member found</p>
            ) : (

                loading ? (
                    <img className='m-[auto]' src='/Assets/loading.gif' alt='Noimage' ></img>
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
                                </div>
                            ))}
                        </div>
                    </div>
                )

            )}
        </div >
    );
}
