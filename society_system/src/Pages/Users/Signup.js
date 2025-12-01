import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Userheader from '../../Component/Usercomponent/Userheader';

export default function Signup({ 
  societyData, 
  flatCode, 
  handleOnChange, 
  getFlatCodeBySocietyName, 
  handleOnSubmit 
}) {

  // Transform data for react-select
  const societyOptions = societyData.map(society => ({
    value: society.sid,
    label: society.society_name
  }));

  const flatOptions = flatCode.map(flat => ({
    value: flat.fid,
    label: flat.flat_code
  }));

  return (
    <>
      <Userheader />
      <div className="bg-gray-200 min-h-screen flex items-center justify-center shadow-lg">
        <div className="bg-white w-96 p-6 text-center rounded shadow-lg">
          
          <div className="bg-blue-500 p-5 text-white rounded-tr-xl rounded-bl-xl shadow-xl mb-4">
            <p className="font-bold text-2xl">Signup to UrbanHome</p>
          </div>

          <form onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <input
                onChange={handleOnChange}
                className="p-2 border-2 rounded w-full border-gray-200 focus:outline-none focus:border-blue-400 focus:transition focus:duration-100"
                type="text"
                placeholder="Enter your username"
                name="username"
                required
              />
            </div>

            <div className="mb-4">
              <input
                onChange={handleOnChange}
                className="p-2 border-2 rounded w-full border-gray-200 focus:outline-none focus:border-blue-400 focus:transition focus:duration-100"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                onChange={handleOnChange}
                className="p-2 border-2 rounded w-full border-gray-200 focus:outline-none focus:border-blue-400 focus:transition focus:duration-100"
                type="text"
                placeholder="Enter your phone"
                name="phone"
                required
              />
            </div>

            <div className="mb-4">
              <Select
                options={societyOptions}
                placeholder="Select your society"
                onChange={(selectedOption) => {
                  handleOnChange({ target: { name: 'society_id', value: selectedOption.value } });
                  getFlatCodeBySocietyName(selectedOption.value);
                }}
              />
            </div>

            <div className="mb-4">
              <Select
                options={flatOptions}
                placeholder="Select your flat"
                onChange={(selectedOption) => {
                  handleOnChange({ target: { name: 'flat_id', value: selectedOption.value } });
                }}
                isDisabled={flatOptions.length === 0}
              />
            </div>

            <button
              type="submit"
              className="text-white p-2 w-3/5 rounded-xl bg-blue-500 hover:bg-blue-400"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4">
            <span>
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </span>
          </div>

        </div>
      </div>
    </>
  );
}
