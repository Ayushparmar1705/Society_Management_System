import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';

export default function Updatestaff({handleOnChange , handleOnClick , formData }) {
    

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Loginchairmanheader />

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center py-8 px-4">
                <div className="bg-white shadow-lg rounded-xl w-full sm:w-[90%] md:w-[70%] lg:w-[50%] p-6 md:p-10">
                    {/* Header */}
                    <div className="bg-blue-500 text-white rounded-lg p-4 text-center mb-6">
                        <p className="text-xl font-semibold">Add Staff</p>
                        <p className="text-sm opacity-90">
                            Fill in the details below to add new staff
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-5">
                        {/* Name Field */}
                        <div className="relative">
                            <input
                                onChange={handleOnChange}
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-400 focus:outline-none peer"
                                placeholder=" "
                            />
                           
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <input
                                onChange={handleOnChange}
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-400 focus:outline-none peer"
                                placeholder=" "
                            />
                           
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                            <input
                                onChange={handleOnChange}
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-400 focus:outline-none peer"
                                placeholder=" "
                            />
                         
                        </div>

                        {/* Role Select */}
                        <div>
                            <select
                                onChange={handleOnChange}
                                name="role"
                                value={formData.role}
                                className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-blue-400 focus:outline-none"
                            >
                                <option value="" disabled selected>
                                    Select role
                                </option>
                                <option value="security">Security</option>
                                <option value="vehicle_cleaner">Vehicle Cleaner</option>
                                <option value="garbage_collector">Garbage Collector</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={()=>{
                                    handleOnClick(formData.sid)
                                }}
                                className="w-full sm:w-2/3 md:w-1/2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 rounded-md transition duration-200"
                            >
                                Update Staff
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
