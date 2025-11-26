import React from 'react';
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';

export default function Addstaff({ handleOnChange, handleOnClick }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Loginchairmanheader />

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center py-8 px-4">
        <div className="bg-white shadow-lg rounded-xl w-full sm:w-[90%] md:w-[70%] lg:w-[50%] p-6 md:p-10">
          
          {/* Header */}
          <div className="bg-blue-500 text-white rounded-lg p-4 text-center mb-8">
            <p className="text-xl font-semibold">Add Staff</p>
            <p className="text-sm opacity-90">Fill in the details below to add new staff</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm mb-2">Full Name</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter staff name"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email Address</label>
              <input
                onChange={handleOnChange}
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm mb-2">Phone Number</label>
              <input
                onChange={handleOnChange}
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-gray-700 text-sm mb-2">Select Role</label>
              <select
                onChange={handleOnChange}
                name="role"
                id="role"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option value="Security">Security</option>
                <option value="Vehicle Cleaner">Vehicle Cleaner</option>
                <option value="Garbage Collector">Garbage Collector</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                onClick={handleOnClick}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition"
              >
                Add Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
