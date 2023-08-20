import "./auth.css";
import signup from "../../assets/signup.svg";
import circle from "../../assets/circle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/fontawesome-free-solid";
import { useState, useEffect } from "react";
import FormData from "form-data";
import { Input } from "antd";
import PageLayout from "./commonPageLayout/authPageLayout";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import EnvelopeIcon from "../../assets/Envelope";
import PasswordIcon from "../../assets/passwordIcon";
import { useDispatch } from "react-redux";
import names from "../../assets/names.svg";
import lock from "../../assets/lock.svg";
import { signupdetails } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupDetails() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [correctPass, setCorrectPass] = useState(false);
  const [correctRepass, setCorrectRepass] = useState(false);
  const [correctName, setCorrectName] = useState(false);
  const [correctUserName, setCorrectUserName] = useState(false);

  const [loading, setLoading] = useState(false);

  const rightPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const rightName = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  const rightUsername = /^\w[a-zA-Z@#0-9.]*$/;

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  var email = localStorage.getItem("signupMail");

  useEffect(() => {
    if (rightPass.test(password)) {
      document.getElementById("passwrderr3").style.display = "none";
      setCorrectPass(true);
    } else if (password) {
      document.getElementById("passwrderr3").style.display = "block";
      setCorrectPass(false);
    }
  }, [password]);

  useEffect(() => {
    if (password == repass) {
      document.getElementById("passerr3").style.display = "none";
      setCorrectRepass(true);
    } else if (repass) {
      document.getElementById("passerr3").style.display = "block";
      setCorrectRepass(false);
    }
  }, [repass]);

  useEffect(() => {
    if (rightName.test(fullname)) {
      document.getElementById("passerr3A").style.display = "none";
      setCorrectName(true);
    } else if (fullname) {
      document.getElementById("passerr3A").style.display = "block";
      setCorrectName(false);
    }
  }, [fullname]);

  useEffect(() => {
    if (rightUsername.test(username)) {
      document.getElementById("passerr3B").style.display = "none";
      setCorrectUserName(true);
    } else if (username) {
      document.getElementById("passerr3B").style.display = "block";
      setCorrectUserName(false);
    }
  }, [username]);

  function showHide1() {
    setShow1(!show1);
  }

  function showHide2() {
    setShow2(!show2);
  }

  function handleFullname(e) {
    setFullname(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleRepass(e) {
    setRepass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (correctPass && correctRepass && correctName && correctUserName) {
      setLoading(true);
      fd.append("email", email);
      fd.append("user_name", username);
      fd.append("password", password);
      fd.append("name", fullname);
      dispatch(signupdetails(fd, setLoading, navigate));
    }
  }

  return (
    <>
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
      <div id="flex">
        <PageLayout />
        <div id="forms3">
          <h1 className="form-heading4">User Details</h1>
          <form onSubmit={handleSubmit}>
            <div id="formflex-signup">
              <Input
                prefix={<EnvelopeIcon />}
                onChange={handleFullname}
                maxLength={30}
                value={fullname}
                type="text"
                placeholder="Enter Your Name"
                required
                className="sign-up-name"
              />
              <p id="passerr3A">Invalid Full Name</p>
              <Input
                prefix={<EnvelopeIcon />}
                onChange={handleUsername}
                maxLength={30}
                value={username}
                type="text"
                placeholder="Enter Your Username"
                required
                className="sign-up-username"
              />
              <p id="passerr3B">Invalid UserName</p>
              <Input
                prefix={<PasswordIcon />}
                suffix={
                  show1 ? (
                    <EyeFilled onClick={() => showHide1()} />
                  ) : (
                    <EyeInvisibleFilled onClick={() => showHide1()} />
                  )
                }
                onChange={handlePassword}
                value={password}
                placeholder="Input Password"
                type={show1 ? "text" : "password"}
                className="passwordInput"
              />
              <Input
                prefix={<PasswordIcon />}
                suffix={
                  show2 ? (
                    <EyeFilled onClick={() => showHide2()} />
                  ) : (
                    <EyeInvisibleFilled onClick={() => showHide2()} />
                  )
                }
                onChange={handleRepass}
                value={repass}
                placeholder="Re-enter Password"
                type={show2 ? "text" : "password"}
                className="passwordInput"
              />
              <p id="passerr3">Didn't Match</p>
            </div>
            <button type="submit" id="formbtn2">
              Continue
            </button>
          </form>
          <p id="passwrderr3">
            Password must contain at least 8 characters, a special symbol, an
            uppercase, a lowecase, a numeric value and no space.
          </p>
          <p className="footer-terms-content">
            ©2023 Bulk Mailer - All Rights Reserved
          </p>
        </div>
        <img src={circle} className="bluecircleimg"></img>
        <div className="bluecircleimg2"></div>
      </div>
    </>
  );
}
export default SignupDetails;
