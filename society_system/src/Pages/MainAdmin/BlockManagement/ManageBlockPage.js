import { Building2, Key, Layout, Mail, Phone, PhoneCall } from 'lucide-react';
import React from 'react'
import { BiCube } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

export default function ManageBlockPage({ isLoading, blockList }) {

    return (
    <div className='mt-[10px]'>
      {isLoading ? (
        <div className='w-full'>
          <img className='h-[100px] w-[100px] m-auto' src='/Assets/loading.gif' alt='Loading' />
        </div>
      ) : (
        <div>
          <p className='text-[20px] text-center font-semibold'>Manage Blocks</p>

          {/* Cards */}
          <div className='flex flex-wrap w-full mt-[10px] gap-10 justify-center'>
            {blockList.map((data, index) => (
              <div key={index}>
                <div className='hover:scale-[1.04] hover:border-2 hover:border-gray-200 transition-transform duration-200 border-2 border-gray-100 p-4 rounded w-[350px] h-[400px]'>

                  {/* Header */}
                  <div className={`text-white p-[10px] font-bold rounded ${data.is_active === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-black' : 'bg-gradient-to-r from-gray-500 to-gray-600'}`}>
                    <div className='flex justify-between items-center'>
                      <div className='flex justify-between w-full'>
                        <p>{data.society_name}</p>
                        <Building2></Building2>
                      </div>
                    </div>
                    <p>{data.is_active === 1 ? 'Active' : 'Not Active'}</p>
                  </div>

                  {/* Info */}
                  <div className='flex w-full flex-col p-5 gap-2'>
                    {/* Block Name */}
                    <div className='flex items-center'>
                      <BiCube className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Block Name</p>
                        <p className="text-sm">{data.block_name}</p>
                      </div>
                    </div>

                    {/* State */}
                    <div className='flex items-center'>
                      <Layout className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">State</p>
                        <p className="text-sm">{data.state}</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className='flex items-center'>
                      <MdEmail className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Email</p>
                        <p className="text-sm">{data.email}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className='flex items-center'>
                      <PhoneCall className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Phone</p>
                        <p className="text-sm">{data.phone}</p>
                      </div>
                    </div>
                   
                    {/* Action Buttons */}
                    {data.is_active === 1 ? (
                      <div className='flex justify-between border-t pt-2 mt-2 border-gray-200'>
                        <img
                          src='/Assets/delete.png'
                          alt='Delete'
                          className='cursor-pointer h-5 w-5'
                        />
                        <img
                          onClick={() => {
                            // Edit logic here
                          }}
                          src='/Assets/edit.png'
                          alt='Edit'
                          className='cursor-pointer h-5 w-5'
                        />
                      </div>
                    ) : (
                      <button
                        className='bg-blue-500 hover:bg-blue-600 p-2 w-full rounded text-white mt-2 transition-all duration-200'
                      >
                        Activate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    )
}