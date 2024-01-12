import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

export default function Phone() {
    const [phone, setPhone] = useState("");
    const [wrongPhone, setWrongPhone] = useState(false);
    const navigate = useNavigate();
    function sendOTP() {
        if(phone.length !== 10) {
            setWrongPhone(true);
        } else {
            //send otp using API
            //navigating to the next page for entering and verifying otp
            navigate("/phoneVerification/verifyOtp")
        }
    }

    function handleChange(value) {
        setPhone(value)
    }

    return (
        <div className="container">

            <h2 className="heading">Enter Phone number</h2>
            <input value={phone} onChange={(e) => handleChange(e.target.value)}className="phone-input" type="text" />
            <button className="otp-button" onClick={() => sendOTP()}>Send OTP</button>
            {wrongPhone && <p className="wrong-phone-number-message">Incorrect phone number, please enter correct phone number</p>}

        </div>
    )
}