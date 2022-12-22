import "./auth.css";
import signup from "../../assets/signup.svg";
import circle from "../../assets/circle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock , faEye , faEyeSlash} from "@fortawesome/fontawesome-free-solid";
import { useState , useEffect} from "react";
import { useDispatch } from "react-redux";
import { signupdetails } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from 'react-bootstrap';

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
    const signupDetails={
      email:email ,
      user_name:username,
      password:password , 
      name:fullname
    }
    dispatch(signupdetails(signupDetails , setLoading))
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
       <input type='text' id='forminput' placeholder='Enter Your Name' value={fullname} onChange={handleFullname}></input>
       <FontAwesomeIcon icon={faUser} id='mailicon3'></FontAwesomeIcon>
       </div>
       <div id='formflex'>
       <label htmlFor="username" id='formlabel'>Username</label> 
       <input type='text' id='forminput' placeholder='Enter Your Username' value={username} onChange={handleUsername}></input>
       <FontAwesomeIcon icon={faUser} id='mailicon4'></FontAwesomeIcon>
       </div>
        <div id='formflex'>
       <label htmlFor="text" id='formlabel'>Password</label> 
       <input 
        type= {show1?'text':'password'}
       id='forminput' placeholder='Enter Your Password' value={password} onChange={handlePassword}></input>
       <FontAwesomeIcon icon={faLock} id='mailicon5'></FontAwesomeIcon>
       {show1 ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg2"
                  onClick={showHide1}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg2"
                  onClick={showHide1}
                />
              )}
       </div>
       <div id='formflex'>
       <label htmlFor="password" id='formlabel'>Confirm Password</label> 
       <input 
       type= {show2?'text':'password'}
        id='forminput' placeholder='Re-enter Password' xvalue={repass} onChange={handleRepass}></input>
       <FontAwesomeIcon icon={faLock} id='mailicon6'></FontAwesomeIcon>
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
       <p id='passerr3'>Didn't Match</p>
       </div>
       <div id='formflex'>
       </div>
       <button type='submit' id='formbtn2'>Continue</button>
       </form>
       <p id='passwrderr3'>Password must contain at least 8 characters, a special symbol, an uppercase, a lowecase, a numeric value and no space.</p>
      </div>
      <div>
      </div>
        <img src={circle} className="bluecircleimg"></img>
        <div className="bluecircleimg2"></div>
      </div>
    </>
  );
}
export default SignupDetails;
