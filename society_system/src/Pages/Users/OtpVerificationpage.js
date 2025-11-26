import React from 'react'
import OTPInput from "react-otp-input"
export default function OtpVerificationpage({ otp, setOtp , handleVerifyotp}) {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='rounded-xl text-lg p-2 bg-blue-500 h-3/5 w-3/5 flex flex-col text-white justify-center items-center'>


                <i class="bx bxs-check-shield" style={{ fontSize: "50px" }}></i>

                <p className='p-5 text-2xl'>Enter OTP code</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={{
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        color : "black",
                        width: 50,
                        padding: 5,
                        marginLeft: 10,
                        marginTop: 20,
                    }}
                    renderInput={(props) => <input {...props} />}
                />
                <button onClick={handleVerifyotp} className='p-2 text-black bg-white text-black rounded mt-10 w-2/5'>Verify</button>
            </div>
        </div>
    )
}
