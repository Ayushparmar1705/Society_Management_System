import React from 'react';
import SecurityHeader from '../../Component/Usercomponent/SecurityHeader';

export default function ViewVisitor({ result, loading }) {
  if (loading) {
    return <div className="text-center text-gray-500 text-lg mt-10">Loading...</div>;
  }

  return (
    <div className='flex flex-1 items-start '>
      <SecurityHeader />
      <div className='w-full'>
        <p className='w-full  text-center font-bold text-[20px]'>Visitor details</p>
        <div className='flex'>
          {result.map((visitor) => (
            <div
              key={visitor.sid}
              className="p-5 ml-10 bg-blue-400  border border-blue-200 rounded-2xl shadow-lg p-6 w-72 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                Visitor: {visitor.visitor_name}
              </h3>
              <p className="font-semibold text-white">
                ID: <span className="font-normal">{visitor.visitor_id}</span>
              </p>
              <p className="font-semibold text-white">
                Phone: <span className="font-normal">{visitor.visitor_phone}</span>
              </p>
              <p className="font-semibold text-white">
                Flat Code: <span className="font-normal">{visitor.flat_code}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
