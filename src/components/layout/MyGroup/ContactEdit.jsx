import Navbar from "../Navbar/Navbar"
import emailimg from "../../../assets/mail.svg"
import names from '../../../assets/names.svg'
import genderimg from '../../../assets/gender.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import FormData from 'form-data';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { addcontactsdata } from '../../../../redux/actions/GroupAction';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addcontacts from '../../../assets/addcontacts.svg'
import background from '../../../assets/background.jpg'
import { editContactdata } from "../../../redux/actions/GroupAction";

function EditContacts(){
    const list =useSelector((s)=>s.groupreducer.contactList);
    console.log(list);
    var selected = localStorage.getItem("contactmail");
    const object = list.find(obj => obj.email === selected);
    console.log(object);


    const [email , setEmail] = useState(object.email);
    const [name , setName] = useState(object.name);
    const [gender , setGender] = useState(object.gender);
    const id = object.id;

    const [correctMail, setCorrectMail] = useState(false);
    const [correctName, setCorrectName] = useState(false);

   var group = localStorage.getItem("groupid");

   const [loading, setLoading] = useState(false);
   const [check, setCheck] = useState(0);
   const [check2, setCheck2] = useState(0);

  //  const mssg = useSelector((state)=>state.groupreducer);

   useEffect(()=>{
    if(check==1){
      setLoading(false);
    }
   },[check])

   useEffect(()=>{
    if(check2==1){
      toast.error("Email Already Exist in this Group", {
        position: toast.POSITION.TOP_RIGHT
    });
    }
   },[check2])

   const dispatch = useDispatch();
   const navigate= useNavigate();
   const fd = new FormData();

   const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const rightName = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;

    useEffect(() => {
      if (rightmail.test(email)) {
        document.getElementById("mailerr").style.display = "none";
        setCorrectMail(true);
      } else if (email) {
        document.getElementById("mailerr").style.display = "block";
        setCorrectMail(false);
      }
    }, [email]);

    useEffect(() => {
      if ((rightName).test(name)){
        document.getElementById("mailerrA").style.display = "none";
        setCorrectName(true);
      } else if (name){
        document.getElementById("mailerrA").style.display = "block";
        setCorrectName(false);
      }
    }, [name]);

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
      e.preventDefault();
      if(correctMail && correctName){
        if(!gender){
          toast.error("Select a Gender", {
            position: toast.POSITION.TOP_RIGHT}
        );
        }
        else{
      setLoading(true);
      setCheck(0);
      if(email!=object.email){
      fd.append("email" , email);
      fd.append("name" , name);
      fd.append("id" , id);
      fd.append("gender" , gender);
      }
      else{
        fd.append("name" , name);
        fd.append("id" , id);
        fd.append("gender" , gender);
      }
      dispatch(editContactdata(fd,  setCheck , navigate , setCheck2));
      }
    }
     }   

    return (<>
   <img src={background} id='background'></img>
     {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='managerC'>
      <img src={addcontacts} id='create'></img>
      <div>
        <h1 id='pagehead20'>Edit Contacts</h1>
        <form id='flexform2' onSubmit={handleSubmit} name='contactform'>
        <label htmlFor='title' id='formlabel'>Email Address</label>
        <input type='text' id='forminput20' placeholder='Enter Email Address' required value={email} onChange={handleMail}></input>
        <p id='mailerr'>Invalid Email Address</p>
        <img src={emailimg} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Full Name</label>
        <input type='text' id='forminput20' placeholder='Enter Fullname' required value={name} onChange={handleName} maxLength={20}></input>
        <p id='mailerrA'>Invalid Name</p>
        <img src={names} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Gender</label>
        <select name="gender" className='gender' id='forminput20A' onChange={handleGender}>
              <option value='' selected={(object.gender=="")?true:false}>--select--</option>
              <option value="Male" selected={(object.gender=="Male")?true:false}>Male</option>
              <option value="Female" selected={(object.gender=="Female")?true:false}>Female</option>
              {/* <option value="Binary">Binary</option>
              <option value="Prefer not to say">Prefer not to say</option> */}
             </select>
        <img src={genderimg} id="mailimg"></img>
        <div id='buttondiv'>
     <p id='buttonpara'><button id='formbtn31' type='submit'>Save</button><Link to='/groupinfo'><button id='plike'>Cancel</button></Link></p>
      {/* <Link to='/mails'><button id='formbtn31'>Cancel</button></Link> */}
      </div>
        </form>
        <ToastContainer />
        </div>
        <img src={addcontacts} id='create6'></img>
    </div>
    </>)
}
export default EditContacts