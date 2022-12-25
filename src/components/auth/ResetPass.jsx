import "./auth.css";
import reset from "../../assets/reset.svg";
import circle from "../../assets/circle.svg";
import lock from '../../assets/lock.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import { useEffect } from "react";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { resetpass } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';

function ResetPass() {

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

  var email = localStorage.getItem("forgotMail");

  useEffect(()=>{
  if(rightPass.test(password)){
  document.getElementById("passwrderr").style.display = "none";
  setCorrectPass(true);
  }
  else if(password){
    document.getElementById("passwrderr").style.display = "block";
    setCorrectPass(false); 
  }
  },[password])

  useEffect(()=>{
    if(password==repass){
    document.getElementById("passwrderr2").style.display = "none";
    setCorrectRepass(true);
    }
    else if(repass){
      document.getElementById("passwrderr2").style.display = "block";
      setCorrectRepass(false); 
    }
    },[repass])

    function showHide1() {
      setShow1(!show1);
    }

    function showHide2() {
      setShow2(!show2);
    }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  function handleRepass(e){
    setRepass(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (correctPass && correctRepass) {
      setLoading(true);
      fd.append("email" , email);
      fd.append("password" , password);
      dispatch(resetpass(fd, setLoading , navigate));
    }
  }

  return (
    <>
     {loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
    <div id='flex'>
      <div className="bluediv">
        <img src={reset} className="bluedivimg" />
      </div>
      <div id='forms'>
       <form onSubmit={handleSubmit} id='formtop'>
        <div id='formflex'>
        <h1 className="form-heading">Reset Password</h1> 
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
       <label htmlFor="text" id='formlabel2'>Password</label> 
       <input 
        type={show1 ? "text" : "password"}
        id='forminput' placeholder='Enter Your Password'
       value={password} onChange={handlePassword} required></input>
       <img src={lock} id='mailimg'></img>
       {show2 ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg2"
                  onClick={showHide2}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg2"
                  onClick={showHide2}
                />
              )}
       <label htmlFor="password" id='formlabel2'>Confirm Password</label> 
       <input 
        type={show2 ? "text" : "password"}
        id='forminput' placeholder='Re-enter Password'
       value={repass} onChange={handleRepass} required></input>
       <img src={lock} id='lockimg'></img>
       <p id='passwrderr2'>Didn't Match</p>
       <button type='submit' id='formbtn'>Continue</button>
       </div>
       </form>
       <p id='passwrderr'>Password must contain at least 8 characters, a special symbol, an uppercase, a lowecase,a numeric value and no space</p>
      </div>
      <div>
      </div>
        <img src={circle} className="bluecircleimg"></img>
        <div className="bluecircleimg2"></div>
      </div>
    </>
  );
}
export default ResetPass;
