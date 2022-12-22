import "./auth.css";
import otpicon from "../../assets/otpicon.svg";
import circle from "../../assets/circle.svg";
import otpimg from '../../assets/otp.svg';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginotp } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from 'react-bootstrap';

function Loginotp() {
const [otp , setOtp]= useState('');

const [correctOtp , setCorrectOtp]= useState(false);

const [loading , setLoading] = useState(false);

const rightOtp = /^[0-9]*$/;

const dispatch=useDispatch();

var email = localStorage.getItem("forgotMail");

function handleOtp(e){
setOtp(e.target.value);
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

function handleSubmit(e){
  e.preventDefault();
  if(correctOtp){
    setLoading(true);
  const loginOtp={
    email:email , 
    otp:otp
  }
  dispatch(loginotp(loginOtp , setLoading));
 }
}

  return (
    <>
    {loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
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
       <input type='text' value={otp} id='forminput' placeholder='Enter Your OTP' onChange={handleOtp} maxLength={4} required></input>
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
export default Loginotp;
