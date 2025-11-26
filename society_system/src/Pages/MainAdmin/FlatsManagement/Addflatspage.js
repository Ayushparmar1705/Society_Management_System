import { useEffect } from "react"
import { toast } from "react-toastify";

export default function Addflatspage({ getBlockByFlatName , handleOnChange, handleOnClick, societyName, blockName }) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })
    return (
        <div className="p-[10px]  sd:bg-black rounded-5 m-[auto] shadow h-[700px] w-[600px] items-center mt-4 max-md:w-full max-md:mt-20">
            <div className="bg-blue-600 text-white">
                <p className=" text-center m-[auto]  p-[10px]">Add new flat</p>
                <p className="text-center m-[auto] p-[10px]">Register the new flat with fill the below details</p>
            </div>


            <div className="flex">
                <div className="p-[10px] sd:p-[0px]  relative w-[100%]">
                    <select  className="p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%]" name="sid"
                    onChange={(e)=>{
                            handleOnChange(e);
                            getBlockByFlatName(e);
                        }}>
                        
                        <option value="" selected disabled>Select Society name</option>
                        {
                            societyName.map((data, index) => (
                                <option key={index} value={data.sid}>{data.society_name}</option>
                            ))
                        }
                    </select>
                </div>

            </div>


            <div className="flex">
                <div className="p-[10px] sd:p-[0px]  relative w-[100%]">
                    <select className="p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%]" name="bid" onChange={(e)=>{
                        handleOnChange(e);
                        
                    }}>
                        <option value="" selected disabled>Select Block Name</option>
                        {
                            blockName.map((data, index) => (
                                <option key={index} value={data.bid}>{data.block_name}</option>
                            ))
                        }
                    </select>
                </div>

            </div>



 <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="flat_number" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Flat Number</label>
            </div>
  <div className="p-[10px] relative w-[100%]">
                <select name="flat_type" onChange={handleOnChange} className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] ">
                    <option disabled selected>Select flat type</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Penthouse">Penthouse</option>
                </select>

            </div>
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="floor_number" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Floor Number</label>
            </div>
          

            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="flat_price" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Flat Price</label>
            </div>
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="flat_area" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Flat Area(squere feet)</label>
            </div>
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="balcony_area" onChange={handleOnChange} placeholder=" "></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Balcony Area(squere feet)</label>
            </div>

            <div>
                <button onClick={handleOnClick} className="p-[10px] bg-blue-500 w-[200px] rounded-[10px] text-center text-white block m-[auto]">Add society</button>
            </div>

        </div>
    )
}