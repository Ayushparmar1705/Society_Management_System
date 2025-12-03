
import React from 'react'

export default function ViewMembers({ result, loading, makeChairman }) {
  return (
    <div className='p-2'>
      <div className='p-50'>
        <div className='flex p-5 bg-gray-100'>
          {result.map((data) => (
            <div className='bg-gray-50 rounded-xl shadow'>
              <p>Name: {data.username}</p>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Role: {data.residence}</p>
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
