
import React from 'react'

export default function ViewMembers({ result, loading, makeChairman }) {
  return (
    <div className='p-2'>
      <div className='p-50'>
        <div className='flex p-5 bg-white flex-wrap'>
          {result.map((data) => (
            <div className='bg-gray-50 rounded-xl shadow p-10'>
              <p className='p-2'>Name: {data.username}</p>
              <p className='p-2'>Email: {data.email}</p>
              <p className='p-2'>Phone: {data.phone}</p>
              <p className='p-2'>Role: {data.residence}</p>
              <button onCanPlay={() => {
                makeChairman(data.uid)
              }}>Make chairman</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
