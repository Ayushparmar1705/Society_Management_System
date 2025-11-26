import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
export default function MainAdminLogin() {
  const [username , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  const handleMainAdminLogin = ()=>{
    if(username === "admin" && password === "admin@1234")
    {
      localStorage.setItem("token","Admin");
      navigate("/mainadmin/add-society");
    }
    else if(username === "" && password === "")
    {
      toast.error("Invalid email or password");
    }
    else
    {
      toast.error("Invalid email or password");
    }
  }
  return (
    <div className='p-[10px] bg-gray-800 h-[100vh] flex justify-center items-center'>
      <div className='bg-gray-500 w-[400px] h-[400px] rounded-[10px] text-center '>

        <div className="mt-[40px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white m-[auto]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>




          <p className="text-white text-[30px] font-bold">Super Admin Login</p>
          <p className="text-white text-[15px] font-bold">Login with your username and password</p>



          <div className="space-y-6">

            <input onChange={(e)=>{setUserName(e.target.value)}} className="focus:scale-110 focus:transition-all focus:ease-in-out mt-6 w-[300px] bg-gray-500 border-2 border-gray-400 text-gray-50 p-[5px] rounded-[5px] focus:outline-none " type="text" placeholder="Enter username"></input>



            <input onChange={(e)=>{setPassword(e.target.value)}} className="focus:scale-110 focus:transition-all focus:ease-in-out mt-6 w-[300px] bg-gray-500 border-2 border-gray-400 text-gray-50 p-[5px] rounded-[5px] focus:outline-none " type="text" placeholder="Enter password"></input>

          </div>
        </div>
        <button type="submit" className="hover:bg-orange-600 text-white shadow  bg-orange-500 p-[6px] w-[300px] mt-[10px] rounded-[5px]" onClick={handleMainAdminLogin}>Login</button>
      </div>

    </div>
  )
}