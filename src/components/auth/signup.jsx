import { useState, useEffect } from "react";
import "./auth.css";
import emailimg from "../../assets/email.svg";
import circle from "../../assets/circle.svg";
import EnvelopeIcon from "../../assets/Envelope";
import PageLayout from "./commonPageLayout/authPageLayout";
import FormData from "form-data";
import { Input } from "antd";
import mailimg from "../../assets/mail.svg";
import { useDispatch, useSelector } from "react-redux";
import { signupdata } from "../../redux/actions/AuthAction";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../../utils/validateEmail";

export default function FrgPass() {
	const mssg = useSelector((state) => state.authreducer);
	const [email, setEmail] = useState({
		value: "",
		error: "",
	});
	const [loading, setLoading] = useState(false);
	const [check, setCheck] = useState(0);
	const dispatch = useDispatch();
	const fd = new FormData();
	const navigate = useNavigate();

	function handleMail(e) {
		setEmail((curr) => ({
			...curr,
			value: e.target.value,
			error: validateEmail(e.target.value) ? "" : "Invalid Email Address",
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem("signupMail", email.value);
		if (!email.error) {
			setLoading(true);
			setCheck(0);
			fd.append("email", email.value);
			dispatch(signupdata(fd, setLoading, navigate, setCheck));
		}
	}

	useEffect(() => {
		if (check === 1) {
			toast.error(mssg.response3[0], {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}, [check]);

	return (
		<>
			{loading ? (
				<div id="loader">
					<ReactBootStrap.Spinner animation="border" id="spinner" />
				</div>
			) : null}
			<div id="flex">
				<PageLayout />
				<div id="forms">
					<h1 className="form-heading2">Sign up for Bulk Mailer</h1>
					<p className="form-info">Please Enter Your Email</p>
					<form onSubmit={handleSubmit} id="formtop">
						<div id="formflex" className="signup-email-wrapper">
							<Input
								prefix={<EnvelopeIcon />}
								onChange={handleMail}
								maxLength={320}
								value={email.value}
								type="text"
								placeholder="Enter Your Email"
								required
							/>
							<p className="signup-input-error">{email.error}</p>
						</div>
						<button type="submit" id="formbtn">
							Send OTP
						</button>
						<ToastContainer />
					</form>
					<p id="endtxt">
						Already A Customer?{" "}
						<span id="endlink">
							<Link to="/">Login</Link>
						</span>
					</p>
					<p className="footer-terms-content">©2023 Bulk Mailer - All Rights Reserved</p>
				</div>
				<div />
				<img src={circle} className="bluecircleimg" alt="circle" />
				<div className="bluecircleimg2" />
			</div>
		</>
	);
}
