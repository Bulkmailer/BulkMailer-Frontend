import { useState, useEffect } from "react";
import "./auth.css";
import forgot from "../../assets/forgot.svg";
import circle from "../../assets/circle.svg";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { frgdata } from "../../redux/actions/AuthAction";
import EnvelopeIcon from "../../assets/Envelope";
import { Input } from "antd";
import PageLayout from "./commonPageLayout/authPageLayout";
import mailimg from "../../assets/mail.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FrgPass() {
  const [email, setEmail] = useState("");

  const [correctMail, setCorrectMail] = useState(false);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  const [check, setCheck] = useState(0);
  const mssg = useSelector((state) => state.authreducer);

  useEffect(() => {
    console.log(check);
    if (check == 1) {
      toast.error(mssg.response1[0], {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [check]);

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
    localStorage.setItem("forgotMail", email);
    if (correctMail) {
      setLoading(true);
      setCheck(0);
      fd.append("email", email);
      dispatch(frgdata(fd, setLoading, navigate, setCheck));
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
          <h1 className="form-heading">Forgot Password</h1>
          <p className="form-info">
            Enter your E-mail ID, which will receive the 4 digit OTP.
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
              <p id="emailerr2">Invalid Email Address</p>
            </div>
            <button type="submit" id="formbtn">
              Send OTP
            </button>
            <p id="endtxt">
              Return to{" "}
              <span id="endlink">
                <Link to="/">Login</Link>
              </span>
            </p>
            <ToastContainer />
          </form>
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
export default FrgPass;
