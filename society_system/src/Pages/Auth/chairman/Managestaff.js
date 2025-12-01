import React from 'react';
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';

export default function MemberManagement({ result = [], loading = false, inActivestaff, Activestaff, getOnestaff }) {
    return (
        <div className='flex items-start'>
            {/* Chairman header */}
            <Loginchairmanheader />

            {loading ? (
                <div className='w-full flex justify-center items-center h-[300px]'>
                    <img className='h-[100px] w-[100px] m-auto' src='/Assets/loading.gif' alt='Loading' />
                </div>
            ) : (
                <div className='w-full lg:mt-[0px] font-bold font-2xl md:mt-[0px] sm:mt-[70px] max-[639px]:mt-[70px]'>
                    <p className='w-full text-center text-2xl'>Security Management</p>

                    <div className='flex gap-4 p-5 flex-wrap font-semibold lg:flex md:flex md:flex-row md:justify-center sm:flex sm:flex-row sm:justify-center max-[639px]:flex max-[639px]:justify-center sm:w-[100%]'>
                        {result.map((data, index) => (
                            <div key={index} className='p-5 rounded bg-gray-50 shadow w-[300px]'>
                                <p className='mt-1 p-1 w-[250px]'>Name: {data.fullname}</p>
                                <p className='mt-1 p-1 w-[250px]'>Email: {data.email}</p>
                                <p className='mt-1 p-1 w-[250px]'>Phone: {data.phone}</p>
                                <p className='mt-1 p-1 w-[250px]'>Role: {data.role}</p>

                                {data.is_active === 0 ? (
                                    <button
                                        onClick={() => Activestaff(data.sid)}
                                        className='bg-blue-500 hover:bg-blue-400 text-white p-2 w-full rounded'
                                    >
                                        Activate
                                    </button>
                                ) : (
                                    <div className='p-5 flex justify-between w-full'>
                                        <img
                                            onClick={() => getOnestaff(data.sid)}
                                            className='h-[20px] w-[20px] cursor-pointer'
                                            src='../Assets/edit.png'
                                            alt='Edit'
                                        />
                                        <img
                                            onClick={() => inActivestaff(data.sid)}
                                            className='h-[20px] w-[20px] cursor-pointer'
                                            src='../Assets/delete.png'
                                            alt='Delete'
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
