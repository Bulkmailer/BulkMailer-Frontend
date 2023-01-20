import Navbar from "../Navbar/Navbar";
import lock from '../../../assets/lock.svg';
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apppassdata } from "../../../redux/actions/ProfileActions";
import mailimg from '../../../assets/mail.svg';
import addmails from '../../../assets/addmails.svg';

function AddEmails(){
    const [password, setPassword] = useState("");
    const [email , setEmail] = useState("");

    const [correctMail , setCorrectMail]= useState(false);
    const [correctPass , setCorrectPass]= useState(false);
    const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const rightPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    useEffect(() => {
        if (rightmail.test(email)) {
          document.getElementById("error1").style.display = "none";
          setCorrectMail(true);
        } else if (email) {
          document.getElementById("error1").style.display = "block";
          setCorrectMail(false);
        }
      }, [email]);
    
      useEffect(()=>{
        if(rightPass.test(password)){
        document.getElementById("error2").style.display = "none";
        setCorrectPass(true);
        }
        else if(password){
          document.getElementById("error2").style.display = "block";
          setCorrectPass(false); 
        }
        },[password])

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(0);

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  const response= useSelector((state)=>state.profilereducer);

  useEffect(()=>{
    if(response.status2==201){
     navigate("/profilepage")
    }
    if(response.status2){
      setLoading(false);
       }
       if(response.status2==400){
        toast.error("Mail already added", {
            position: toast.POSITION.TOP_RIGHT
        });
       }
    } , [response.status2])

  function handlePass(e){
    setPassword(e.target.value);
  }
  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(correctMail && correctPass){
    setLoading(true);
    setCheck(0);
    fd.append("app_password" , password);
    fd.append("email" , email);
    dispatch(apppassdata(fd, setCheck))
    }
  }
    return(
    <>
    {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='sidebarflex'>
    <div id='managerD'>
    <h1 id='grouphead2'>Add Mails</h1>
        <form id='addmailform' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formslabel'>Email Address</label>
        <input type='text' id='forminput3' placeholder='Enter Email Address' value={email} onChange={handleEmail} required></input>
        <img src={mailimg} id="mailimg"></img>
        <p id='error1'>Invalid Mail</p>
        <label htmlFor='title' id='formslabel'>App Password</label>
        <input type='text' id='forminput3' placeholder='Enter Password' value={password} onChange={handlePass} required></input>
        <img src={lock} id="mailimg"></img>
        <p id='buttonpara'><button id='formbtn3' type='submit'>Submit</button>
        <Link to='/profilepage'><button id='plike'>Cancel</button></Link></p>
        <p id='error2'>Password must contain at least 8 characters, a special symbol, an uppercase, a lowecase, a numeric value and no space.</p>
        </form>
        <ToastContainer />
    </div>
    <img src={addmails} id='sideimg'></img>
    </div>
    </>)
}
export default AddEmails;