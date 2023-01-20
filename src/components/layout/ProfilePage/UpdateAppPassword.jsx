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
import { updatepassdata } from "../../../redux/actions/ProfileActions";
import addpass from '../../../assets/addpass.svg';

function UpdatePassword(){
    const [password, setPassword] = useState("");
    const [correctPass , setCorrectPass]=useState(false);

    const response= useSelector((state)=>state.profilereducer);
    
    const rightPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    var email=localStorage.getItem("loginMail");

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(0);

    useEffect(()=>{
        if(rightPass.test(password)){
        document.getElementById("error3").style.display = "none";
        setCorrectPass(true);
        }
        else if(password){
          document.getElementById("error3").style.display = "block";
          setCorrectPass(false); 
        }
        },[password])

        useEffect(()=>{
            if(response.status3==200){
             navigate("/profilepage")
            }
            if(response.status3){
               setLoading(false);
               }
            } , [response.status3])

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  function handlePass(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(correctPass){
    setLoading(true);
    setCheck(0);
    fd.append("app_password" , password);
    fd.append("email" , email);
    dispatch(updatepassdata(fd, setCheck))
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
    <h1 id='grouphead3'>Update App Password</h1>
        <form id='addmailform' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formslabel'>App Password</label>
        <input type='text' id='forminput3' placeholder='Enter Password' value={password} onChange={handlePass} required></input>
        <img src={lock} id="mailimg"></img>
        <p id='buttonpara'><button id='formbtn3' type='submit'>Submit</button><Link to='/profilepage'><button id='plike'>Cancel</button></Link></p>
        <p id='error3'>Password must contain at least 8 characters, a special symbol, an uppercase, a lowecase, a numeric value and no space.</p>
        </form>
    </div>
    <img src={addpass} id='sideimg'></img>
    </div>
    </>)
}
export default UpdatePassword;