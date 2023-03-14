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
import background from '../../../assets/background.jpg';

function AddEmails(){
    const [password, setPassword] = useState("");
    const [email , setEmail] = useState("");

    const [correctMail , setCorrectMail]= useState(false);
    const [correctPass , setCorrectPass]= useState(false);
    const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    useEffect(() => {
        if (rightmail.test(email)) {
          document.getElementById("error1").style.display = "none";
          setCorrectMail(true);
        } else if (email) {
          document.getElementById("error1").style.display = "block";
          setCorrectMail(false);
        }
      }, [email]);

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(0);

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  const response= useSelector((state)=>state.profilereducer);

  useEffect(()=>{
    if(response.status2==201 && check==1){
     navigate("/profilepage")
    }
    if(response.status2 && check==1){
      setLoading(false);
       }
       if(response.status2==400 && check==1){
        setLoading(false);
        toast.error("Mail already added", {
            position: toast.POSITION.TOP_RIGHT
        });
       }
    } , [response.status2 , check])

  function handlePass(e){
    setPassword(e.target.value);
  }
  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(correctMail){
    setLoading(true);
    setCheck(0);
    fd.append("app_password" , password);
    fd.append("email" , email);
    dispatch(apppassdata(fd, setCheck , setLoading))
    }
  }
    return(
    <>
     <img src={background} id='background'></img>
    {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='managerA'>
    <img src={addmails} id='create9'></img>
      <div>
    <h1 id='groupheadB'>Add Mails</h1>
        <form id='flexformA' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formslabel'>Email Address</label>
        <input type='text' id='forminput2A' placeholder='Enter Email Address' value={email} onChange={handleEmail} required></input>
        <img src={mailimg} id="mailimg"></img>
        <p id='error1'>Invalid Mail</p>
        <label htmlFor='title' id='formslabel'>App Password</label>
        <input type='text' id='forminput2A' placeholder='Enter Password' value={password} onChange={handlePass} required></input>
        <img src={lock} id="mailimg"></img>
        <p id='buttonpara'><button id='formbtn3A' type='submit'>Submit</button>
        <Link to='/profilepage'><button id='plike'>Cancel</button></Link></p>
        </form>
        <ToastContainer />
    </div>
    <img src={addmails} id='create10'></img>
    </div>
    </>)
}
export default AddEmails;