import "./auth.css";
import key from "../../assets/key.svg";
import circle from "../../assets/circle.svg";
import otpimg from '../../assets/otp.svg';
import { useState } from "react";
import { useEffect } from "react";
import FormData from 'form-data';
import { useDispatch , useSelector} from "react-redux";
import { loginotp } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from 'react-bootstrap';
import { Link , useNavigate } from "react-router-dom";
import { frgdata } from "../../redux/actions/AuthAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Loginotp() {
const [otp , setOtp]= useState('');

const [correctOtp , setCorrectOtp]= useState(false);

const [loading , setLoading] = useState(false);

const rightOtp = /^[0-9]*$/;

const dispatch=useDispatch();
const fd= new FormData();
const navigate = useNavigate();

var email = localStorage.getItem("forgotMail");

const [check , setCheck]= useState(0);

const mssg =useSelector((state)=>state.authreducer);

useEffect(()=>{
    console.log(check);
    if(check==1){
    toast.error(mssg.response5[0], {
        position: toast.POSITION.TOP_RIGHT
    });
  }
} ,[check]);

const[counter,setCounter]=useState(29)
  useEffect(()=>{
      const timer =
      counter > 0 &&
       setInterval(() => setCounter(counter-1),1000);
      return()=>clearInterval(timer);
  },[counter]);
useEffect(()=>{
if(counter!=0){
document.getElementById('resendlink').style.color ="#3150FF50";
}
else{
document.getElementById('resendlink').style.color ="#3150FF";
}
},[counter])
function resendOtpfunc(){
setCounter(29);
setLoading(true);
setCheck(0);
fd.append("email" , email);
dispatch(frgdata(fd , setLoading , navigate , setCheck));
}

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
    setCheck(0);
    fd.append("email" , email);
    fd.append("otp" , otp);
  dispatch(loginotp(fd , setLoading , navigate ,  setCheck));
 }
}

  return (
    <>
    {loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
    <div id='flex'>
      <div className="bluediv">
        <img src={otpimg} className="bluedivimg" />
      </div>
      <div id='forms3'>
       <h1 className="form-heading2">OTP Verification</h1> 
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
       <p id="endtxt">
            Didn't get OTP ?
            <button disabled={(counter!==0) ? true : false} 
      onClick={resendOtpfunc} id='resendlink'>
        Resend OTP
      </button> in {counter} sec</p>
      <ToastContainer/>
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
