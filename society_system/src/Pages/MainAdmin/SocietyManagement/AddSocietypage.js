import { useEffect } from "react"
import { toast } from "react-toastify";


export default function AddSocietypage({ handleOnChange, handleOnClick }) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })
    return (
        <>

        <div className="p-[10px] rounded-5 m-[auto] shadow h-[700px] w-[600px] items-center mt-4 max-md:mt-16 max-md:w-full max-md:overflow-none max-md:m-[auto]">
            
            <div className="bg-blue-600 text-white">
                <p className=" text-center m-[auto]  p-[10px]">Add new Society</p>
                <p className="text-center m-[auto] p-[10px]">Register the new society with fill the below details</p>
            </div>


            <div className="flex">
                <div className="p-[10px] relative w-[100%]">
                    <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " onChange={handleOnChange} name="name" placeholder=""></input>
                    <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Society Name</label>
                </div>
                <div className="p-[10px] relative w-[100%]">
                    <input type="email" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="email" onChange={handleOnChange} placeholder=""></input>
                    <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Office email</label>
                </div>
            </div>

            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="phone" onChange={handleOnChange} placeholder=""></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Office phone</label>
            </div>


            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="state" onChange={handleOnChange} placeholder=""></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">State</label>
            </div>
            <div className="p-[10px] relative w-[100%]">
                <textarea className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " placeholder="" name="address" onChange={handleOnChange}></textarea>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Address</label>
            </div>
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="total_flats" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Total flats</label>
            </div>
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="total_blocks" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Total blocks</label>
            </div>
            <div>
                <button onClick={handleOnClick} className="p-[10px] bg-blue-500 w-[200px] rounded-[10px] text-center text-white block m-[auto]">Add society</button>
            </div>

        </div></>
    )
}