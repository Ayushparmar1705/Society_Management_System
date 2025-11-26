import React from 'react'
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader'

export default function Dashboard({ countResidence , countStaff}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Loginchairmanheader />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-center">
          {/* Residence Card */}
          <div className="p-6 bg-blue-500 text-white rounded-xl shadow-md text-center w-full sm:w-[280px] md:w-[320px] hover:shadow-lg transition duration-200">
            <p className="text-lg font-medium">Total Residence</p>
            <p className="text-3xl font-bold mt-2">{countResidence}</p>
          </div>

          {/* Example Additional Cards (optional) */}
          <div className="p-6 bg-green-500 text-white rounded-xl shadow-md text-center w-full sm:w-[280px] md:w-[320px] hover:shadow-lg transition duration-200">
            <p className="text-lg font-medium">Active Staff</p>
            <p className="text-3xl font-bold mt-2">{countStaff}</p>
          </div>

          <div className="p-6 bg-purple-500 text-white rounded-xl shadow-md text-center w-full sm:w-[280px] md:w-[320px] hover:shadow-lg transition duration-200">
            <p className="text-lg font-medium">Parking Slots</p>
            <p className="text-3xl font-bold mt-2">58</p>
          </div>
        </div>
      </div>
    </div>
  )
}
