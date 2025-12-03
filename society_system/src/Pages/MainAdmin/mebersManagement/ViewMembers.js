
import React from 'react'

export default function ViewMembers({ result, loading, makeChairman, searchMember }) {
  return (
    <div className='p-2'>
      <p className='text-center font-bold text-xl'>Residence Management</p>
      <div className='p-50'>
        <input onChange={(e) => {

          searchMember(e.target.value);
        }} type='search' placeholder='Search residence by name' className='p-2 border-2 border-gray-50 w-2/5 focus:outline-none block m-[auto] mt-2'></input>
        <div className='flex p-5 bg-white flex-wrap gap-2'>
          {result.map((data) => (

            <div className='bg-gray-50 rounded-xl shadow p-10'>
              <p className='p-2 '>Name: {data.username}</p>
              <p className='p-2 '>Email: {data.email}</p>
              <p className='p-2 '>Phone: {data.phone}</p>
              <p className='p-2 '>Role: {data.role}</p>
              <p className='p-2 '>Society Name: {data.society_name}</p>
              <p className='p-2 '>Flat Code: {data.flat_code}</p>
              {data.role === 'residence' ? (
                <button className='p-2 text-white bg-blue-500 rounded' onClick={() => {
                  makeChairman(data.uid)
                }}>Make chairman</button>
              ) : (
                <button className='p-2 text-white bg-pink-500 rounded' onClick={() => {
                  makeChairman(data.uid)
                }}>Make normal user</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
