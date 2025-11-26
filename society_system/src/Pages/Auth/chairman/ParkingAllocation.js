import React from 'react';
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';

export default function ParkingAllocation({ handleOnChange, handleOnClick, flatCode }) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Loginchairmanheader />

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center py-8 px-4">
                <div className="shadow-lg rounded-xl w-full sm:w-[90%] md:w-[70%] lg:w-[50%] p-6 md:p-10 bg-white">
                    {/* Header */}
                    <div className="bg-blue-500 text-white rounded-lg p-4 text-center mb-8">
                        <p className="text-xl font-semibold">Allocate Parking</p>
                        <p className="text-sm opacity-90">
                            Fill in the details below to allocate parking
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Flat Selection */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Select Flat</label>
                            <select
                                onChange={handleOnChange}
                                name="flat_id"
                                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            >
                                <option value="">Select Flat</option>
                                {flatCode.map((data) => (
                                    <option key={data.fid} value={data.fid}>
                                        {data.flat_code}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Parking Number */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Parking Number</label>
                            <input
                                onChange={handleOnChange}
                                type="text"
                                name="parking_no"
                                placeholder="Enter parking number"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            />
                        </div>

                        {/* Vehicle Type */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Vehicle Type</label>
                            <select
                                onChange={handleOnChange}
                                name="vehical_type"
                                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            >
                                <option value="">Select Vehicle Type</option>
                                <option value="two_wheel">Two Wheeler</option>
                                <option value="four_wheel">Four Wheeler</option>
                                <option value="cycle">Cycle</option>
                            </select>
                        </div>

                        {/* Parking Location */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Parking Location</label>
                            <input
                                onChange={handleOnChange}
                                type="text"
                                name="parking_location"
                                placeholder="Enter parking location"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            />
                        </div>

                        {/* Button */}
                        <div className="pt-2">
                            <button
                                onClick={handleOnClick}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition"
                            >
                                Allocate Parking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
