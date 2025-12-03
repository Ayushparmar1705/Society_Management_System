import { Mail, Phone, User } from 'lucide-react'
import React from 'react'

export default function ViewMembers({ result, loading, makeChairman }) {
  return (
    <div className='mt-[10px]'>
      {loading ? (
        <div className='w-full flex justify-center items-center h-[300px]'>
          <img className='h-[100px] w-[100px] m-auto' src='/Assets/loading.gif' alt='Loading' />
        </div>
      ) : (
        <div>
          <p className='text-[20px] text-center font-semibold'>Manage Society</p>

          {/* Search Input */}
          <input
            type='search'
            placeholder='Search society by name'
        
            className='outline-none rounded-[10px] border-2 border-gray-200 focus:border-blue-300 p-[10px] w-[400px] mx-auto block transition-all duration-300 ease-in-out'
          />

          {/* Cards */}
          <div className='flex flex-wrap w-full mt-10 gap-10 justify-center'>
            {result.map((result, index) => (
              <div key={index}>
                <div className='hover:scale-[1.04] hover:border-2 hover:border-gray-200 transition-transform duration-200 border-2 border-gray-100 p-4 rounded w-[350px] h-500 '>

                  {/* Header */}
                  <div className={`text-white p-[10px] font-bold rounded`}>
                    <div className='flex justify-between items-center'>
                      <p>{result.name}</p>
                      <User className="h-4 w-4 text-green-500 mr-3"></User>
                    </div>

                  </div>

                  {/* Info */}
                  <div className='flex w-full flex-col p-5 gap-2'>

                    <div className='flex items-center'>
                      <Mail className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <span className='text-sm text-gray-400'>Email</span>
                        <p>{result.email}</p>
                      </div>
                    </div>
                    <div className='flex items-center'>

                      <Phone className="h-4 w-4 text-green-500 mr-3" />

                      <div>
                        <span className='text-sm text-gray-400'>Phone</span>
                        <p>{result.phone}</p>

                      </div>
                    </div>

                    {/* Action Buttons */}
                    {result.role === "residence" ? (
                      <button
                        onClick={() => makeChairman(result.sid)}
                        className='bg-blue-500 hover:bg-blue-600 p-2 w-full rounded text-white mt-2 transition-all duration-200'
                      >
                        Make chairman
                      </button>
                    ) : (
                      <button

                        className='bg-blue-500 hover:bg-blue-600 p-2 w-full rounded text-white mt-2 transition-all duration-200'
                      >
                        Make Residence
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className='flex items-center justify-center gap-4 mt-6'>
            <button
              className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200'
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
            >
              &laquo;
            </button>

            <span className='text-lg font-medium'>{page} / {totalPage}</span>

            <button
              className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200'
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPage}
            >
              &raquo;
            </button>
          </div> */}
        </div>
      )}
    </div>
  )
}
