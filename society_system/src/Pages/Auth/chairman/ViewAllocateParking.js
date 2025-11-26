import React from 'react'
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader'

export default function ViewAllocateParking({ result, loading }) {
    console.log(result);
    return (
        <div className='flex items-start'>
            {/* Chairman header */}
            <Loginchairmanheader />

            {loading ? (
                <img className='m-[auto]' src='/Assets/loading.gif' alt='Loading...' />
            ) : (
                <div className='w-full lg:mt-[0px] font-bold font-2xl md:mt-[0px] sm:mt-[70px] max-[639px]:mt-[70px]'>
                    <p className='w-full text-center text-2xl'>Allocate Parking</p>

                    <div className='flex gap-4 p-5 flex-wrap font-semibold lg:flex md:flex md:flex-row md:justify-center sm:flex sm:flex-row sm:justify-center max-[639px]:flex max-[639px]:justify-center sm:w-[100%]'>
                        {result.length === 0 ? (
                            <p>No Parking allocate</p>
                        ):(
                        result.map((data, index) => (
                            <div key={index} className='p-5 rounded bg-gray-50 shadow w-[300px]'>
                                <p className='mt-1 p-1 w-[250px]'>Parking Number: {data.parking_no}</p>
                                <p className='mt-1 p-1 w-[250px]'>Vehical Type: {data.vehical_type}</p>
                                <p className='mt-1 p-1 w-[250px]'>Parking Location: {data.parking_location}</p>


                                {data.is_active === 0 ? (
                                    <button

                                        className='bg-blue-500 hover:bg-blue-400 text-white p-2 w-full rounded'
                                    >
                                        UnAllocate
                                    </button>
                                ) : (
                                    <div className='p-5 flex justify-between w-full'>
                                        <img

                                            className='h-[20px] w-[20px] cursor-pointer'
                                            src='../Assets/edit.png'
                                            alt='Edit'
                                        />
                                        <img

                                            className='h-[20px] w-[20px] cursor-pointer'
                                            src='../Assets/delete.png'
                                            alt='Delete'
                                        />
                                    </div>
                                )}
                            </div>
                        ))
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
