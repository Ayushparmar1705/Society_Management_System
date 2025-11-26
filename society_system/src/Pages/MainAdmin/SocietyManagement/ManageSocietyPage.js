import { Building2, Key, Layout, Mail, Map, MapPin, Phone, Play } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';
export default function ManageSocietyPage({ page, setPage, totalPage, loading, societyList, handleSearch, handleDelete, ActivateSociety }) {
  const navigate = useNavigate();
  return (
    <div className='mt-[10px]'>
      {loading ? (
        <div className='w-full'>
          <img className='h-[100px] w-[100px] m-auto' src='/Assets/loading.gif' alt='Loading' />
        </div>
      ) : (
        <div>
          <p className='text-[20px] text-center font-semibold'>Manage Society</p>
          
          {/* Search Input */}
          <input
            type='search'
            placeholder='Search society by name'
            onChange={handleSearch}
            className='outline-none rounded-[10px] border-2 border-gray-200 focus:border-blue-300 p-[10px] w-[400px] mx-auto block transition-all duration-300 ease-in-out'
          />

          {/* Cards */}
          <div className='flex flex-wrap w-full mt-10 gap-10 justify-center'>
            {societyList.map((data, index) => (
              <div key={index}>
                <div className='hover:scale-[1.04] hover:border-2 hover:border-gray-200 transition-transform duration-200 border-2 border-gray-100 p-4 rounded w-[350px] h-500 '>
                  
                  {/* Header */}
                  <div className={`text-white p-[10px] font-bold rounded ${data.is_active === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-black' : 'bg-gradient-to-r from-gray-500 to-gray-600'}`}>
                    <div className='flex justify-between items-center'>
                      <p>{data.society_name}</p>
                      <Building2 className="h-8 w-8 text-white opacity-90" />
                    </div>
                    <p>{data.is_active === 1 ? 'Active' : 'Not Active'}</p>
                  </div>

                  {/* Info */}
                  <div className='flex w-full flex-col p-5 gap-2'>
                    
                    <div className='flex items-center'>
                      <Mail className="h-4 w-4 text-blue-500 mr-3" />
                      <div>
                        <span className='text-sm text-gray-400'>Mail</span>
                      <p>{data.email}</p>
                      </div>
                    </div>
                    <div className='flex items-center'>

                      <Phone className="h-4 w-4 text-green-500 mr-3" />
                      
                      <div>
                        <span className='text-sm text-gray-400'>Phone</span>
                                              <p>{data.phone}</p>

                        </div>                    
                      </div>
                    <div className='flex items-center'>
                      <MapPin className='text-blue-500 h-5 w-5 mr-3' />
                      <div>
                        <span className='text-sm text-gray-400'>Address</span>
                        <p>{data.address}</p>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <Map className="h-4 w-4 text-purple-500 mr-3" />
                      <div>
                        <span className='text-sm text-gray-400'>State</span>
                        <p>{data.state}</p>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <Layout className="h-5 w-5 text-blue-500 mr-2" />
                        <span className='text-5 text-gray-400'>Blocks {data.total_blocks}</span>
                      </div>
                      <div className='flex items-center'>
                        <Building2 className="h-5 w-5 text-green-500 mr-2" />
                        <span className='text-5 text-gray-400'>Flats {data.total_flats}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {data.is_active === 1 ? (
                      <div className='flex justify-between border-t pt-2 mt-2 border-gray-200'>
                        <img
                          onClick={() => handleDelete(data.sid)}
                          src='/Assets/delete.png'
                          alt='Delete'
                          className='cursor-pointer h-5 w-5'
                        />
                        <img
                          onClick={() => {
                              navigate(`/mainadmin/update-page/`,{state : {id : data.sid}})
                          }}
                          src='/Assets/edit.png'
                          alt='Edit'
                          className='cursor-pointer h-5 w-5'
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() => ActivateSociety(data.sid)}
                        className='bg-blue-500 hover:bg-blue-600 p-2 w-full rounded text-white mt-2 transition-all duration-200'
                      >
                        Activate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className='flex items-center justify-center gap-4 mt-6'>
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
          </div>
        </div>
      )}
    </div>
  );
}
