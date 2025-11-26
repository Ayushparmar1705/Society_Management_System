import { useEffect } from "react"
import { toast } from "react-toastify";

export default function Addblockpage({ handleOnChange, handleOnClick , societyName}) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })
    return (
        <div className="p-[10px]  sd:bg-black rounded-5 m-[auto] shadow h-[400px] w-[600px] items-center mt-4 max-md:w-full max-md:mt-20">
            <div className="bg-blue-600 text-white">
                <p className=" text-center m-[auto]  p-[10px]">Add new block</p>
                <p className="text-center m-[auto] p-[10px]">Register the new block with fill the below details</p>
            </div>


            <div className="flex">
                <div className="p-[10px] sd:p-[0px]  relative w-[100%]">
                    <select className="p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%]" name="society_id" onChange={handleOnChange}>
                        <option value="" selected disabled>Select Society name</option>
                        {
                            societyName.map((data,index)=>(
                                <option key={index} value={data.sid}>{data.society_name}</option>
                            ))
                        }
                    </select>
                </div>
               
            </div>

          


  
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="block_name" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Blocks name</label>
            </div>
            <div>
                <button onClick={handleOnClick} className="p-[10px] bg-blue-500 w-[200px] rounded-[10px] text-center text-white block m-[auto]">Add society</button>
            </div>

        </div>
    )
}