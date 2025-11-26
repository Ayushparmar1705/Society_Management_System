import React from 'react';
import SecurityHeader from '../../Component/Usercomponent/SecurityHeader';

export default function AddVisitor({ handleOnClick, handleOnChange, flatcode }) {
    return (
        <div className='flex flex-col md:flex-row min-h-screen bg-gray-100'>
            <SecurityHeader></SecurityHeader>
            <div className="flex-1 flex justify-center items-center py-8 px-4">
            <div className="bg-white shadow-lg rounded-xl w-full sm:w-[90%] md:w-[70%] lg:w-[50%] p-6 md:p-10">

                {/* Header */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-semibold text-blue-600">Add Visitor</h2>
                    <p className="text-gray-500 text-sm mt-1">Fill in the details below to add a new visitor</p>
                </div>

                {/* Visitor Name */}
                <div className="mb-4">
                    <input
                        onChange={handleOnChange}
                        name="visitor_name"
                        placeholder="Enter visitor name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                </div>

                {/* Visitor Phone */}
                <div className="mb-4">
                    <input
                        onChange={handleOnChange}
                        name="visitor_phone"
                        placeholder="Enter visitor phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                </div>

                {/* Flat Number Select */}
                <div className="mb-6">
                    <select
                        onChange={handleOnChange}
                        name="flat_code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    >
                        <option>Select flat number</option>
                        {flatcode.map((data, index) => (
                            <option key={index} value={data.fid}>
                                {data.flat_code}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Add Visitor Button */}
                <button
                    onClick={handleOnClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                    Add Visitor
                </button>
            </div>
            </div>
        </div>
    );
}
