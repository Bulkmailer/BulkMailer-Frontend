import Navbar from "../Navbar/Navbar";
import emailimg from "../../../assets/mail.svg";
import names from "../../../assets/names.svg";
import genderimg from "../../../assets/gender.svg";
import { useState } from "react";
import FormData from "form-data";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from "react-redux";
import { editprofiledata } from "../../../redux/actions/ProfileActions";
import { useEffect } from "react";
import { profilegetdata } from "../../../redux/actions/ProfileActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import edit from "../../../assets/edit.svg";
import background from "../../../assets/background.jpg";

function EditProfile() {
  const [arr, setarr] = useState([]);
  const arr1 = useSelector((state) => state.profilereducer);
  const response = useSelector((state) => state.profilereducer);
  const [check, setCheck] = useState(0);
  const [check2, setCheck2] = useState(0);

  useEffect(() => {
    if (check == 1) {
      setarr(arr1.response);
      setUsername(arr1.response.user_name);
      setName(arr1.response.name);
      setGender(arr1.response.gender);
      setMobile(arr1.response.mobile);
    }
  }, [check]);
  useEffect(() => {
    if (response.status1 == 200) {
      navigate("/profilepage");
    }
    if (response.status1) {
      setLoading(false);
    }
    if (response.status1 == 400) {
      toast.error("Username already taken", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [response.status1]);
  useEffect(() => {
    dispatch(profilegetdata(setCheck));
  }, []);
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [mobile, setMobile] = useState();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fd = new FormData();

  const [correctNo, setIsCorrectNo] = useState(false);
  const [correctName, setIsCorrectName] = useState(false);
  const [correctUsername, setIsCorrectUsername] = useState(false);

  const rightno = /(^[6-9][0-9]{9}$)/;
  const rightName = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  const rightUsername = /^\w[a-zA-Z@#0-9.]*$/;

  useEffect(() => {
    if (rightno.test(mobile)) {
      document.getElementById("error5").style.display = "none";
      setIsCorrectNo(true);
    } else if (mobile) {
      document.getElementById("error5").style.display = "block";
      setIsCorrectNo(false);
    }
  }, [mobile]);

  useEffect(() => {
    if (rightName.test(name)) {
      document.getElementById("error5A").style.display = "none";
      setIsCorrectName(true);
    } else if (name) {
      document.getElementById("error5A").style.display = "block";
      setIsCorrectName(false);
    }
  }, [name]);

  useEffect(() => {
    if (rightUsername.test(username)) {
      document.getElementById("error5B").style.display = "none";
      setIsCorrectUsername(true);
    } else if (username) {
      document.getElementById("error5B").style.display = "block";
      setIsCorrectUsername(false);
    }
  }, [username]);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handleMobile(e) {
    setMobile(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (correctNo && correctName && correctUsername) {
      if (!gender) {
        toast.error("Select a Gender", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setCheck2(0);
        setLoading(true);
        fd.append("user_name", username);
        fd.append("name", name);
        fd.append("mobile", mobile);
        fd.append("gender", gender);
        dispatch(editprofiledata(fd, setCheck2));
      }
    }
  }
  return (
    <>
      <img src={background} id="background" />
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
      <Navbar />
      <div id="managerC">
        <img src={edit} id="create" />
        <div>
          <h1 id="pagehead21">Edit Profile</h1>
          <div>
            <form id="flexform2" onSubmit={handleSubmit}>
              <label htmlFor="title" id="formlabel">
                Username
              </label>
              <input
                type="text"
                id="forminput20"
                required
                value={username}
                onChange={handleUsername}
                maxLength={20}
               />
              <img src={emailimg} id="mailimg" />
              <p id="error5B">Invalid UserName</p>
              <label htmlFor="title" id="formlabel">
                Full Name
              </label>
              <input
                type="text"
                id="forminput20"
                placeholder={arr.name}
                required
                value={name}
                onChange={handleName}
                maxLength={30}
               />
              <img src={names} id="mailimg" />
              <p id="error5A">Invalid Name</p>
              <label htmlFor="title" id="formlabel">
                Mobile Number
              </label>
              <input
                type="text"
                id="forminput20"
                placeholder={arr.mobile}
                required
                value={mobile}
                onChange={handleMobile}
               />
              <img src={names} id="mailimg" />
              <p id="error5">Invalid Phone No.</p>
              <label htmlFor="title" id="formlabel">
                Gender
              </label>
              <select
                name="foodcategory"
                id="forminput20"
                onChange={handleGender}
              >
                <option
                  value=""
                  selected={arr1.response.gender == "" ? true : false}
                >
                  --select--
                </option>
                <option
                  value="Male"
                  selected={arr1.response.gender == "Male" ? true : false}
                >
                  Male
                </option>
                <option
                  value="Female"
                  selected={arr1.response.gender == "Female" ? true : false}
                >
                  Female
                </option>
              </select>
              <img src={genderimg} id="mailimg" />
              <div id="buttondiv">
                <p id="buttonpara">
                  <button id="formbtn3" type="submit">
                    Save
                  </button>{" "}
                  <Link to="/profilepage">
                    <button id="plike">Cancel</button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
        <img src={edit} id="create6" />
      </div>
    </>
  );
}
export default EditProfile;
