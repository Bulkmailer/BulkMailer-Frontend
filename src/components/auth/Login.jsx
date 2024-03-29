import "./auth.css";
import login from "../../assets/login.svg";
import bulkmailerlogo from "../../assets/bulkmailerlogo.png";
import circle from "../../assets/circle.svg";
import mailimg from "../../assets/mail.svg";
import lockimg from "../../assets/lock.svg";
import EnvelopeIcon from "../../assets/Envelope";
import PasswordIcon from "../../assets/passwordIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logindata } from "../../redux/actions/AuthAction";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import CustomLoader from "./loader/customLoader";
import PageLayout from "./commonPageLayout/authPageLayout";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [correctMail, setCorrectMail] = useState(false);

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  const [check, setCheck] = useState(0);

  const mssg = useSelector((state) => state.authreducer);
  console.log(mssg);

  useEffect(() => {
    console.log(check);
    if (check == 1) {
      toast.error(mssg.response[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [check]);

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
    localStorage.setItem("loginMail", email);
    if (correctMail) {
      setLoading(true);
      setCheck(0);
      fd.append("email", email);
      fd.append("password", password);
      console.log(fd);
      dispatch(logindata(fd, setLoading, navigate, setCheck));
    }
  }
  return (
    <>
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : // <div>
      //   <CustomLoader />
      // </div>
      null}
      <div id="flex">
        <PageLayout />
        <div id="forms">
          <h1 className="form-heading">Login</h1>
          <p className="form-info">
            Please enter your Bulk Mailer login credentials.
          </p>
          <form onSubmit={handleSubmit} id="formtop">
            <div id="formflex">
              <Input
                prefix={<EnvelopeIcon />}
                onChange={handleMail}
                maxLength={30}
                value={email}
                type="text"
                placeholder="Enter Your Email"
                required
              />
              <p id="emailerr">Invalid Email Address</p>

              <Input
                prefix={<PasswordIcon />}
                suffix={
                  show ? (
                    <EyeFilled onClick={() => showHide()} />
                  ) : (
                    <EyeInvisibleFilled onClick={() => showHide()} />
                  )
                }
                onChange={handlePass}
                placeholder="Input Password"
                type={show ? "text" : "password"}
                className="passwordInput"
              />

              <p id="forgotlink">
                <Link to="/forgot">Forgot Password?</Link>
              </p>
            </div>
            <button type="submit" id="formbtn">
              LOGIN
            </button>
            <ToastContainer />
          </form>
          <p id="endtxt">
            New To Bulk Mailer?
            <span id="endlink">
              <Link to="/signup"> Signup</Link>
            </span>
          </p>
          <p className="footer-terms-content">
            ©2023 Bulk Mailer - All Rights Reserved
          </p>
        </div>
      </div>
      <img src={circle} className="bluecircleimg" />
      <div className="bluecircleimg2" />
    </>
  );
}
export default Login;
