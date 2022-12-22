import { useState , useEffect } from "react";
import "./auth.css";
import otpicon from "../../assets/otpicon.svg";
import circle from "../../assets/circle.svg";
import otpimg from '../../assets/otp.svg';
import { useDispatch } from "react-redux";
import { signupotp } from "../../redux/actions/auth";

function Signupotp() {
const [otp , setOtp]= useState('');

const [correctOtp , setCorrectOtp]= useState(false);

const rightOtp = /^[0-9]/;

const dispatch= useDispatch();

var email = localStorage.getItem("signupMail");

function handleOtp(e){
setOtp(e.target.value);
}

function handleSubmit(e){
    e.preventDefault();
    const signupOtp={
      email:email , 
      otp:otp
    }
    dispatch(signupotp(signupOtp))
}
useEffect(()=>{
if(rightOtp.test(otp)){
    document.getElementById("emailerr3").style.display="none";
    setCorrectOtp(true);
}
else if(otp){
    document.getElementById("emailerr3").style.display="block";  
    setCorrectOtp(false);
}
} , [otp])
  return (
    <>
    <div id='flex'>
      <div className="bluediv">
        <img src={otpimg} className="bluedivimg" />
      </div>
      <div id='forms2'>
       <h1 className="form-heading">OTP Verification</h1>
       <p id='endtxt'>We have sent an OTP to your Email</p>
       <form onSubmit={handleSubmit}>
        <div id='formflex'>
       <label htmlFor="otp" id='formlabel'>OTP</label> 
       <input type='text' id='forminput' value={otp} placeholder='Enter Your OTP' onChange={handleOtp} maxLength={4}></input>
       <img src={otpicon} id='mailimg'></img>
       <p id='emailerr3'>Numbers Only</p>
       </div>
       <button type='submit' id='formbtn2'>Verify</button>
       </form>
      </div>
      <div>
      </div>
        <img src={circle} className="bluecircleimg"></img>
        <div className="bluecircleimg2"></div>
      </div>
    </>
  );
}
export default Signupotp;
