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

function AddPassword(){
    const [password, setPassword] = useState("");
    
    var email=localStorage.getItem("loginMail");

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(0);

    const [correctPass , setCorrectPass] =useState(false);

    const rightPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    useEffect(()=>{
        if(rightPass.test(password)){
        document.getElementById("error4").style.display = "none";
        setCorrectPass(true);
        }
        else if(password){
          document.getElementById("error4").style.display = "block";
          setCorrectPass(false); 
        }
        },[password])

        const response= useSelector((state)=>state.profilereducer);

  useEffect(()=>{
    if(response.status2==201){
     navigate("/profilepage")
    }
    if(response.status2){
        setLoading(false);
    }
    } , [response.status2])

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
    <div id='managerC'>
    <h1 id='grouphead'>Add App Password</h1>
        <form id='flexform' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formslabel'>App Password</label>
        <input type='text' id='forminput2' placeholder='Enter Password' value={password} onChange={handlePass} required></input>
        <img src={lock} id="mailimg"></img>
        <p id='buttonpara'><button id='formbtn3' type='submit'>Submit</button> <Link to='/profilepage'><button id='plike'>Cancel</button></Link></p>
        <p id='error4'>Password must contain at least 8 characters, a special symbol, an uppercase, a lowecase, a numeric value and no space.</p>
        </form>
    </div>
    </div>
    </>)
}
export default AddPassword;