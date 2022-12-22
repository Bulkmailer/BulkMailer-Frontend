import "./auth.css";
import reset from "../../assets/reset.svg";
import circle from "../../assets/circle.svg";
import lock from '../../assets/lock.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function ResetPass() {

  const [password , setPassword] = useState('');
  const [repass , setRepass] = useState('');

  const[show1 , setShow1]=useState(false);
  const[show2 , setShow2]=useState(false);

  const [correctPass , setCorrectPass] = useState(false);
  const [correctRepass , setCorrectRepass] = useState(false);

  const rightPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
  }

  return (
    <>
    <div id='flex'>
      <div className="bluediv">
        <img src={reset} className="bluedivimg" />
      </div>
      <div id='forms'>
       <h1 className="form-heading">Reset Password</h1> 
       <form onSubmit={handleSubmit}>
        <div id='formflex'>
       <label htmlFor="text" id='formlabel'>Password</label> 
       <input 
        type={show1 ? "text" : "password"}
        id='forminput' placeholder='Enter Your Password'
       value={password} onChange={handlePassword}></input>
       <img src={lock} id='mailimg'></img>
       {show1 ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg"
                  onClick={showHide1}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg"
                  onClick={showHide1}
                />
              )}
       </div>
       <div id='formflex'>
       <label htmlFor="password" id='formlabel'>Confirm Password</label> 
       <input 
        type={show2 ? "text" : "password"}
        id='forminput' placeholder='Re-enter Password'
       value={repass} onChange={handleRepass}></input>
       <img src={lock} id='lockimg'></img>
       {show2 ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg"
                  onClick={showHide2}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg"
                  onClick={showHide2}
                />
              )}
       <p id='passwrderr2'>Didn't Match</p>
       </div>
       <div id='formflex'>
       </div>
       <button type='submit' id='formbtn'>Continue</button>
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
