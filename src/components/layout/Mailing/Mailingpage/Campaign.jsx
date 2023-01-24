import Navbar from '../../Navbar/Navbar';
import campaignlogo from '../../../../assets/campaignlogo.svg'
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import campaign from '../../../../assets/campaign.svg'
import { campaigndata } from '../../../../redux/actions/GroupAction';
import { profilegetdata } from '../../../../redux/actions/ProfileActions';

function Campaign(){
const [loading , setLoading] = useState(false);
const [campaignName , setCampaignName] = useState();
const [check , setCheck] = useState(0);
const [check2 , setCheck2] = useState(0);

const [arr , setarr]= useState([]);
const arr1= useSelector((state)=>state.profilereducer);

const fd = new FormData();
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(()=>{
dispatch(profilegetdata(setCheck))
},[])

useEffect(()=>{
  if(check==1){
     setarr(arr1.response)
  }
  } , [check])

const app = arr.AppPassword;
console.log(app);


function handleSubmit(e){
e.preventDefault();
if(app==true){
setLoading(true);
fd.append("title" , campaignName);
dispatch(campaigndata(fd , setCheck2 , setLoading , navigate))
}
else{
  toast.error("Add an app password first", {
    position: toast.POSITION.TOP_RIGHT}
);
}
}
function handleCampaign(e){
setCampaignName(e.target.value);
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
    <h1 id='grouphead3'>Add Campaign Name</h1>
        <form id='addmailform' onSubmit={handleSubmit}>
        <label htmlFor='campaignName' id='formslabel'>Campaign Name</label>
        <input type='text' id='forminput3' placeholder='Enter Campaign Name' value={campaignName} onChange={handleCampaign} required></input>
        <img src={campaignlogo} id="mailimg"></img>
        <p id='buttonpara'><button id='formbtn3' type='submit'>Submit</button><Link to='/home'><button id='plike'>Cancel</button></Link></p>
        </form>
        <ToastContainer />
    </div>
    <img src={campaign} id='sideimg'></img>
    </div>   
    </>
)
}
export default Campaign;