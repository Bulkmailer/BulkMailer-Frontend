import "./auth.css";
import signup from "../../assets/signup.svg";
import circle from "../../assets/circle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock , faEye , faEyeSlash} from "@fortawesome/fontawesome-free-solid";
import { useState , useEffect} from "react";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import names from '../../assets/names.svg';
import lock from '../../assets/lock.svg';
import { signupdetails } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SignupDetails() {
const [fullname , setFullname] = useState(''); 
const [username , setUsername] = useState(''); 
const [password , setPassword] = useState(''); 
const [repass , setRepass] = useState('');

const[show1 , setShow1]=useState(false);
const[show2 , setShow2]=useState(false);

const [correctPass , setCorrectPass] = useState(false);
const [correctRepass , setCorrectRepass] = useState(false);

const [loading , setLoading] = useState(false);

const rightPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const dispatch = useDispatch();
const fd = new FormData();
const navigate = useNavigate();

var email = localStorage.getItem("signupMail");

  useEffect(()=>{
  if(rightPass.test(password)){
  document.getElementById("passwrderr3").style.display = "none";
  setCorrectPass(true);
  }
  else if(password){
    document.getElementById("passwrderr3").style.display = "block";
    setCorrectPass(false); 
  }
  },[password])

  useEffect(()=>{
    if(password==repass){
    document.getElementById("passerr3").style.display = "none";
    setCorrectRepass(true);
    }
    else if(repass){
      document.getElementById("passerr3").style.display = "block";
      setCorrectRepass(false); 
    }
    },[repass])

function showHide1() {
    setShow1(!show1);
  }

function showHide2() {
    setShow2(!show2);
  }

function handleFullname(e){
    setFullname(e.target.value);
}
function handleUsername(e){
    setUsername(e.target.value);
}
function handlePassword(e){
    setPassword(e.target.value);
}
function handleRepass(e){
    setRepass(e.target.value);
}

function handleSubmit(e){
    e.preventDefault();
    if(correctPass && correctRepass){
    setLoading(true);
    fd.append("email" , email);
    fd.append("user_name" , username);
    fd.append("password" , password);
    fd.append("name" , fullname);
    dispatch(signupdetails(fd , setLoading , navigate))
 }
}

  return (
    <>
    {loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
    <div id='flex'>
      <div className="bluediv">
        <img src={signup} className="bluedivimg" />
      </div>
      <div id='forms3'>
      <h1 className="form-heading">User Details</h1> 
       <form onSubmit={handleSubmit}>
       <div id='formflex'>
       <label htmlFor="fullname" id='formlabel'>Full Name</label> 
       <input type='text' id='forminput' placeholder='Enter Your Name' value={fullname} onChange={handleFullname} required></input>
       <img src={names} id='mailimg'></img>
       <label htmlFor="username" id='formlabel3'>Username</label> 
       <input type='text' id='forminput' placeholder='Enter Your Username' value={username} onChange={handleUsername} required></input>
       <img src={names} id='mailimg'></img>
       {show1 ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg3"
                  onClick={showHide1}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg3"
                  onClick={showHide1}
                />
              )}
       <label htmlFor="text" id='formlabel4'>Password</label> 
       <input 
        type= {show1?'text':'password'}
       id='forminput' placeholder='Enter Your Password' value={password} onChange={handlePassword} required></input>
        <img src={lock} id='mailimg'></img>
        {show2 ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg3"
                  onClick={showHide2}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg3"
                  onClick={showHide2}
                />
              )}
       <label htmlFor="password" id='formlabel4'>Confirm Password</label> 
       <input 
       type= {show2?'text':'password'}
        id='forminput' placeholder='Re-enter Password' value={repass} onChange={handleRepass} required></input>
       <img src={lock} id='mailimg'></img>
       <p id='passerr3'>Didn't Match</p>
       </div>
       {/* <div id='formflex'>
       </div> */}
       <button type='submit' id='formbtn2'>Continue</button>
       </form>
       <p id='passwrderr3'>Password must contain at least 8 characters, a special symbol, an uppercase, a lowecase, a numeric value and no space.</p>
      </div>
        <img src={circle} className="bluecircleimg"></img>
        <div className="bluecircleimg2"></div>
      </div>
    </>
  );
}
export default SignupDetails;
