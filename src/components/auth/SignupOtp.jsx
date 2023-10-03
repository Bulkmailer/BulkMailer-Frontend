import { useState, useEffect } from "react";
import "./auth.css";
import key from "../../assets/key.svg";
import circle from "../../assets/circle.svg";
import otpimg from "../../assets/otp.svg";
import FormData from "form-data";
import { Input } from "antd";
import PageLayout from "./commonPageLayout/authPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { signupotp } from "../../redux/actions/AuthAction";
import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signupdata } from "../../redux/actions/AuthAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signupotp() {
  const [otp, setOtp] = useState("");

  const [correctOtp, setCorrectOtp] = useState(false);

  const [loading, setLoading] = useState(false);

  const [check, setCheck] = useState(0);

  const rightOtp = /^[0-9]/;

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  var email = localStorage.getItem("signupMail");

  const [counter, setCounter] = useState(29);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const mssg = useSelector((state) => state.authreducer);

  useEffect(() => {
    console.log(check);
    if (check == 1) {
      toast.error(mssg.response4[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [check]);

  useEffect(() => {
    if (counter != 0) {
      document.getElementById("resendlink").style.color = "#3150FF50";
    } else {
      document.getElementById("resendlink").style.color = "#3150FF";
    }
  }, [counter]);
  function resendOtpfunc() {
    setCounter(29);
    setLoading(true);
    setCheck(0);
    fd.append("email", email);
    dispatch(signupdata(fd, setLoading, navigate));
  }

  function handleOtp(e) {
    setOtp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (correctOtp) {
      setLoading(true);
      setCheck(0);
      console.log(otp);
      console.log(email);
      fd.append("otp", otp);
      fd.append("email", email);
      dispatch(signupotp(fd, setLoading, navigate, setCheck));
    }
  }
  useEffect(() => {
    if (rightOtp.test(otp)) {
      document.getElementById("emailerr3").style.display = "none";
      setCorrectOtp(true);
    } else if (otp) {
      document.getElementById("emailerr3").style.display = "block";
      setCorrectOtp(false);
    }
  }, [otp]);
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
          <h1 className="form-heading">OTP Verification</h1>
          <p id="endtxt">4 Digit OTP has been sent on your E-mail ID.</p>
          <form onSubmit={handleSubmit} id="formtop">
            <div id="formflex">
              <Input
                onChange={handleOtp}
                maxLength={4}
                value={otp}
                type="text"
                placeholder="Enter Your OTP"
                className="otp-input"
                required
              />
              <p id="emailerr3">Numbers Only</p>
            </div>
            <button type="submit" id="formbtn">
              Verify
            </button>
          </form>
          <p id="endtxt">
            Didn't get OTP ?
            <button
              disabled={counter !== 0 ? true : false}
              onClick={resendOtpfunc}
              id="resendlink"
            >
              Resend OTP
            </button>{" "}
            in {counter} sec
          </p>
          <ToastContainer />
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
export default Signupotp;
