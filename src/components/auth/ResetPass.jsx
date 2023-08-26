import "./auth.css";
import reset from "../../assets/reset.svg";
import circle from "../../assets/circle.svg";
import lock from "../../assets/lock.svg";
import { Input } from "antd";
import PasswordIcon from "../../assets/passwordIcon";
import PageLayout from "./commonPageLayout/authPageLayout";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import { useEffect } from "react";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { resetpass } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPass() {
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [correctPass, setCorrectPass] = useState(false);
  const [correctRepass, setCorrectRepass] = useState(false);

  const [loading, setLoading] = useState(false);

  const rightPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  var email = localStorage.getItem("forgotMail");

  const [check, setCheck] = useState(0);

  const mssg = useSelector((state) => state.authreducer);

  useEffect(() => {
    console.log(check);
    if (check == 1) {
      toast.error(mssg.response6[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [check]);

  useEffect(() => {
    if (rightPass.test(password)) {
      document.getElementById("passwrderr").style.display = "none";
      setCorrectPass(true);
    } else if (password) {
      document.getElementById("passwrderr").style.display = "block";
      setCorrectPass(false);
    }
  }, [password]);

  useEffect(() => {
    if (password == repass) {
      document.getElementById("passwrderr2").style.display = "none";
      setCorrectRepass(true);
    } else if (repass) {
      document.getElementById("passwrderr2").style.display = "block";
      setCorrectRepass(false);
    }
  }, [repass]);

  function showHide1() {
    setShow1(!show1);
  }

  function showHide2() {
    setShow2(!show2);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleRepass(e) {
    setRepass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (correctPass && correctRepass) {
      setLoading(true);
      setCheck(0);
      fd.append("email", email);
      fd.append("password", password);
      dispatch(resetpass(fd, setLoading, navigate, setCheck));
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
        <div id="forms2">
          <form onSubmit={handleSubmit} id="formtop">
            <div id="formflex">
              <h1 className="form-heading">Reset Password</h1>
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
                placeholder="Enter Your Password"
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
                placeholder="Enter Your Password"
                type={show2 ? "text" : "password"}
                className="passwordInput"
              />
              <p id="passwrderr2">Didn't Match</p>
              <button type="submit" id="formbtn">
                Continue
              </button>
              <ToastContainer />
            </div>
          </form>
          <p id="passwrderr">
            Password must contain at least 8 characters, a special symbol, an
            uppercase, a lowecase,a numeric value and no space
          </p>
          <p className="footer-terms-content">
            ©2023 Bulk Mailer - All Rights Reserved
          </p>
        </div>
        <div />
        <img src={circle} className="bluecircleimg" />
        <div className="bluecircleimg2" />
      </div>
    </>
  );
}
export default ResetPass;
