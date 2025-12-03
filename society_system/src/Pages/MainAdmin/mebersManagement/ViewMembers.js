// import { Mail, Phone, User } from 'lucide-react'
// import React from 'react'

// export default function ViewMembers({ result, loading, makeChairman }) {
//   return (
//     <div className='mt-[10px]'>

//       {loading ? (
//         <div className='w-full flex justify-center items-center h-[300px]'>
//           <img className='h-[100px] w-[100px] m-auto' src='/Assets/loading.gif' alt='Loading' />
//         </div>
//       ) : (
//         <div>
//           <p className='text-[20px] text-center font-semibold'>Manage Society</p>

//           {/* Search */}
//           <input
//             type='search'
//             placeholder='Search society by name'
//             className='outline-none rounded-[10px] border-2 border-gray-200 
//                        focus:border-blue-300 p-[10px] w-[400px] mx-auto block 
//                        transition-all duration-300 ease-in-out'
//           />

//           {/* Cards */}
//           <div className='flex flex-wrap w-full mt-10 gap-10 justify-center'>
//             {result.map((item, index) => (
//               <div key={index} className='hover:scale-[1.04] transition-transform duration-200'>
//                 <div className='border-2 border-gray-100 hover:border-gray-200 p-4 rounded w-[350px]'>

//                   <div className='flex w-full flex-col p-5 gap-4'>

//                     {/* Username */}
//                     <div className='bg-gray-800 text-white p-[10px] font-bold rounded'>
//                       <div className='flex justify-between items-center'>
//                         <p>{item.username}</p>
//                         <User className="h-4 w-4 text-green-400" />
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div className='flex items-center'>
//                       <Mail className="h-4 w-4 text-blue-500 mr-3" />
//                       <div>
//                         <span className='text-sm text-gray-400'>Email</span>
//                         <p>{item.email}</p>
//                       </div>
//                     </div>

//                     {/* Phone */}
//                     <div className='flex items-center'>
//                       <Phone className="h-4 w-4 text-green-500 mr-3" />
//                       <div>
//                         <span className='text-sm text-gray-400'>Phone</span>
//                         <p>{item.phone}</p>
//                       </div>
//                     </div>

//                     {/* Society */}
//                     <div>
//                       <span className='text-sm text-gray-400'>Society</span>
//                       <p>{item.society_name}</p>
//                     </div>

//                     {/* Flat */}
//                     <div>
//                       <span className='text-sm text-gray-400'>Flat</span>
//                       <p>{item.flat_code}</p>
//                     </div>

//                     {/* Action Button */}
//                     {item.role === "residence" ? (
//                       <button
//                         onClick={() => makeChairman(item.sid)}
//                         className='bg-blue-500 hover:bg-blue-600 p-2 w-full rounded text-white mt-2'
//                       >
//                         Make Chairman
//                       </button>
//                     ) : (
//                       <button
//                         className='bg-blue-500 hover:bg-blue-600 p-2 w-full rounded text-white mt-2'
//                       >
//                         Make Residence
//                       </button>
//                     )}

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       )}
//     </div>
//   )
// }
import React from 'react'

export default function ViewMembers() {
  return (
    <div>ViewMembers</div>
  )
}
