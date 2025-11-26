import React from 'react';
import ResidenceHeader from '../../../Component/Usercomponent/ResidenceHeader';


export default function Managevisitor({ visitor, loading, approve }) {
  if (loading) {
    return <div className="text-center text-gray-500 text-lg mt-10">Loading...</div>;
  }

  return (
    <div className='flex flex-1 items-start '>
      <ResidenceHeader></ResidenceHeader>
      <div className='w-full'>
        <p className='w-full  text-center font-bold text-[20px]'>Visitor details</p>
        <div className='flex'>
          {visitor.map((visitor) => (
            <div
              key={visitor.sid}
              className="p-5 ml-10 bg-gray-200 border border-gray-500 rounded-2xl shadow-lg p-6 w-72 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-black">
                Visitor: {visitor.visitor_name}
              </h3>

              <p className="font-semibold text-black">
                Phone: <span className="font-normal">{visitor.visitor_phone}</span>
              </p>
              <p className="font-semibold text-black">
                Flat Code: <span className="font-normal">{visitor.flat_code}</span>
              </p>
              {visitor.is_approve == 1 ? (
                <p className='p-2 text-green-500'>Approval accept</p>
              ):(
                <button onClick={() => {
                approve(visitor.visitor_id);
              }} className='p-2 text-black bg-green-200'>
                Approve
              </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
