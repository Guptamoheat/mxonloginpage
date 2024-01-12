import React, { useRef, useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom"; 


import "./styles.css"

const correctOTP = "123456" // fetched from your server

function OtpInputWithValidation({ numberOfDigits }) {
  
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const [showError, setShowError] = useState(false)
  const otpBoxReference = useRef([]);
  const navigate = useNavigate();
  
  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function verifyOTP() {
    if(otpError) {
        setShowError(true)
    } else {
        navigate('/signup')
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  useEffect(() => { 
    if(otp.join("") !== "" && otp.join("") !== correctOTP){
      setOtpError("❌ Wrong OTP Please Check Again")
    }else{
      setOtpError(null)
    } 
   }, [otp]);

  return (
    <div className='container'>
      
      <p className="heading">Enter your OTP</p>
     
     <div className='flex items-center gap-4'>
      {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className={``}
        />
      ))}

     </div>
        

        <button onClick={() => verifyOTP()} className='otp-button'>Verify OTP</button>
        {showError && <p>{otpError}</p>}

    </div>
  );
}

export default OtpInputWithValidation;