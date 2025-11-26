import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import Userheader from '../../Component/Usercomponent/Userheader';

export default function Signup({ societyData, flatCode, handleOnChange, getFlatCodeBySocietyName, handleOnSubmit }) {

  return (
    <>
      <Userheader />
      <div className=' bg-gray-200 h-screen flex items-center justify-center shadow-lg '>
        <div className='p-5 bg-white w-96  p-4 text-center  h-98 rounded' >
          <div className='bg-blue-500 p-5 text-white rounded-tr-xl  rounded-bl-xl shadow-xl mb-4'>
            <p className='font-bold text-2xl'>Signup to urbanhome</p>
          </div>
          <div className='p-4'>
            <input onChange={handleOnChange} className='p-2 border-2 rounded w-full border-gray-200 focus:outline-none  focus:border-blue-400 focus:transition focus:duration-100 rounded-lg' type='text' placeholder='Enter your username' name='username'></input>
          </div>
          <div className='p-4'>
            <input onChange={handleOnChange} className='p-2 border-2 rounded w-full border-gray-200 focus:outline-none  focus:border-blue-400 focus:transition focus:duration-100 rounded-lg' type='text' placeholder='Enter your email' name='email'></input>
          </div>
          <div className='p-4'>
            <input onChange={handleOnChange} className='p-2 border-2 rounded w-full border-gray-200 focus:outline-none  focus:border-blue-400 focus:transition focus:duration-100 rounded-lg' type='text' placeholder='Enter your phone' name='phone'></input>
          </div>
          <div className='p-4'>
            <select onChange={(e) => {
              handleOnChange(e);
              getFlatCodeBySocietyName(e.target.value);
            }} className='p-2 border-2 rounded w-full border-gray-200 focus:outline-none  focus:border-blue-400 focus:transition focus:duration-100 rounded-lg' name='society_id'>
              <option defaultChecked disabled>Select the society</option>
              {societyData.map((data, index) => (
                <option key={index} value={data.sid}>{data.society_name}</option>
              ))}
            </select>

          </div>
          <div className='p-4'>
            <select name='flat_id' onChange={handleOnChange} className='p-2 border-2 rounded w-full border-gray-200 focus:outline-none  focus:border-blue-400 focus:transition focus:duration-100 rounded-lg'>
              {flatCode.length === 0 ? <option defaultChecked disabled>No flats found</option> : flatCode.map((data, index) => (
                console.log("fid = ", data.fid),
                <option value={data.fid} key={index}>{data.flat_code}</option>
              ))}

            </select>
          </div>
          <div className='mt-5'>
            <button onClick={handleOnSubmit} className='text-white p-2 w-3/5 rounded-xl bg-blue-500 hover:bg-blue-400'>Sign up</button>
          </div>
          <div className='mt-2'>
            <span>Alredy have an account ? <Link to='/login' className='text-blue-500'>Login</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}
