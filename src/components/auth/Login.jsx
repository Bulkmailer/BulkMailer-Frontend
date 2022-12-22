import "./auth.css";
import login from "../../assets/login.svg";
import circle from "../../assets/circle.svg";
import lock from "../../assets/lock.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash  , faEnvelope} from "@fortawesome/fontawesome-free-solid";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {logindata} from '../../redux/actions/auth.jsx';
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [correctMail, setCorrectMail] = useState(false);

  const [show, setShow] = useState(false);

  const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const dispatch = useDispatch();  

  useEffect(() => {
    if (rightmail.test(email)) {
      document.getElementById("emailerr").style.display = "none";
      setCorrectMail(true);
    } else if (email) {
      document.getElementById("emailerr").style.display = "block";
      setCorrectMail(false);
    }
  }, [email]);

  function showHide() {
    setShow(!show);
  }

  function handleMail(e) {
    setEmail(e.target.value);
  }
  function handlePass(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(correctMail){
    const loginData={
      email:email,
      password:password
    }
    dispatch(logindata(loginData))
  }
}
  
  return (
    <>
<div id="flex">
        <div className="bluediv">
          <img src={login} className="bluedivimg" />
        </div>
        <div id="forms">
          <h1 className="form-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            <div id="formflex">
              <label htmlFor="email" id="formlabel">
                Email Address
              </label>
              <input
                type="text"
                id="forminput"
                value={email}
                placeholder="Enter Your Email Address"
                onChange={handleMail}
                required
              ></input>
              <FontAwesomeIcon icon={faEnvelope} id='mailicon' ></FontAwesomeIcon>
              <p id="emailerr">Invalid Email Address</p>
            </div>
            <div id="formflex">
              <label htmlFor="password" id="formlabel">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                id="forminput"
                value={password}
                placeholder="Enter Your Password"
                onChange={handlePass}
                required
              ></input>
              <img src={lock} id="lockimg"></img>
              {show ? (
                <FontAwesomeIcon
                  icon={faEye}
                  id="eyecloseimg"
                  onClick={showHide}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyecloseimg"
                  onClick={showHide}
                />
              )}
            </div>
            <div id="formflex">
              <p id="forgotlink"><Link to='/forgot'>Forgot Password?</Link></p>
            </div>
            <button type="submit" id="formbtn">
              LOGIN
            </button>
          </form>
          <p id="endtxt">
            New To Bulk Mailer? <span id="endlink"><Link to='/signup'>Signup</Link></span>
          </p>
        </div>
        <div></div>
        <img src={circle} className="bluecircleimg"></img>
        <div className="bluecircleimg2"></div>
      </div>
    </>
  );
}
export default Login;
