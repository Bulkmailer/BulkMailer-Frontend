import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import emailimg from "../../../../assets/mail.svg"
import names from '../../../../assets/names.svg'
import genderimg from '../../../../assets/gender.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import FormData from 'form-data';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addcontactsdata } from '../../../../redux/actions/GroupAction';
import * as ReactBootStrap from "react-bootstrap";

function AddContacts(){
    const [email , setEmail] = useState();
    const [name , setName] = useState();
    const [gender , setGender] = useState();

    const [correctMail, setCorrectMail] = useState(false);

   var group = localStorage.getItem("groupid");

   const [loading, setLoading] = useState(false);
   const [check, setCheck] = useState(0);

   const dispatch = useDispatch();
   const navigate= useNavigate();
   const fd = new FormData();

   const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    useEffect(() => {
      if (rightmail.test(email)) {
        document.getElementById("mailerr").style.display = "none";
        setCorrectMail(true);
      } else if (email) {
        document.getElementById("mailerr").style.display = "block";
        setCorrectMail(false);
      }
    }, [email]);

    function handleMail(e){
    setEmail(e.target.value);
    }

    function handleName(e){
      setName(e.target.value);
      }

      function handleGender(e){
        setGender(e.target.value);
        }
     function handleSubmit(e){
      if(correctMail){
      e.preventDefault();
      setLoading(true);
      setCheck(0);
      fd.append("email" , email);
      fd.append("name" , name);
      fd.append("group" , group);
      fd.append("gender" , gender);
      dispatch(addcontactsdata(fd, setLoading , navigate , setCheck));
      }
     }   
    return(<>
     {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id='managing'>
        <h1 id='pagehead'>Add Contacts</h1>
        <form id='flexform2' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formlabel'>Email Address</label>
        <input type='text' id='forminput2' placeholder='Enter Email Address' required value={email} onChange={handleMail}></input>
        <p id='mailerr'>Invalid Email Address</p>
        <img src={emailimg} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Full Name</label>
        <input type='text' id='forminput2' placeholder='Enter Fullname' required value={name} onChange={handleName}></input>
        <img src={names} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Gender</label>
        <select name="foodcategory" id='forminput2' onChange={handleGender}>
              <option value="Select">--select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {/* <option value="Binary">Binary</option>
              <option value="Prefer not to say">Prefer not to say</option> */}
             </select>
        <img src={genderimg} id="mailimg"></img>
        <div id='buttondiv'>
      <button id='formbtn3' type='submit'>Save & Add next</button>
      <Link to='/mails'><button id='formbtn4'>Close</button></Link>
      </div>
        </form>
    </div>
    </div>
    </>)
}
export default AddContacts;