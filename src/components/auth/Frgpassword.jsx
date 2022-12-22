import { useState , useEffect } from "react";
import "./auth.css";
import forgot from "../../assets/forgot.svg";
import circle from "../../assets/circle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
import { frgdata } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from 'react-bootstrap';

function FrgPass() {
    const [email, setEmail] = useState("");

    const [correctMail, setCorrectMail] = useState(false);

    const [loading , setLoading] = useState(false);

    const dispatch = useDispatch();

    function handleMail(e) {
        setEmail(e.target.value);
      }
     
      const rightmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    useEffect(() => {
      if (rightmail.test(email)) {
        document.getElementById("emailerr2").style.display = "none";
        setCorrectMail(true);
      } else if (email) {
        document.getElementById("emailerr2").style.display = "block";
        setCorrectMail(false);
      }
    }, [email]);

    function handleSubmit(e) {
      e.preventDefault();
      localStorage.setItem("forgotMail" , email);
      if(correctMail){
        setLoading(true);
      const frgData={
        email:email
      }
    dispatch(frgdata(frgData , setLoading));
    }
  }
     
  return (
    <>
     {loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
    <div id='flex'>
      <div className="bluediv">
        <img src={forgot} className="bluedivimg" />
      </div>
      <div id='forms2'>
       <h1 className="form-heading">Email Verification</h1> 
       <form onSubmit={handleSubmit}>
        <div id='formflex'>
       <label htmlFor="email" id='formlabel'>Email Address</label> 
       <input type='text' id='forminput' value={email} placeholder='Enter Your Email Address' onChange={handleMail}></input>
       <FontAwesomeIcon icon={faEnvelope} id='mailicon2' ></FontAwesomeIcon>
       <p id='emailerr2'>Invalid Email Address</p>
       </div>
       <button type='submit' id='formbtn2'>Send OTP</button>
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
export default FrgPass;
