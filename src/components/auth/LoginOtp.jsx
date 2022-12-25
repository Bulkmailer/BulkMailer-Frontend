import "./auth.css";
import key from "../../assets/key.svg";
import circle from "../../assets/circle.svg";
import otpimg from '../../assets/otp.svg';
import { useState } from "react";
import { useEffect } from "react";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { loginotp } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Loginotp() {
const [otp , setOtp]= useState('');

const [correctOtp , setCorrectOtp]= useState(false);

const [loading , setLoading] = useState(false);

const rightOtp = /^[0-9]*$/;

const dispatch=useDispatch();
const fd= new FormData();
const navigate = useNavigate();

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
    fd.append("email" , email);
    fd.append("otp" , otp);
  dispatch(loginotp(fd , setLoading , navigate));
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
       <form onSubmit={handleSubmit} id='formtop'>
        <div id='formflex'>
       <label htmlFor="otp" id='formlabel'>OTP</label> 
       <input type='text' value={otp} id='forminput' placeholder='Enter Your OTP' onChange={handleOtp} maxLength={4} required></input>
       <img src={key} id='mailimg'></img>
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
