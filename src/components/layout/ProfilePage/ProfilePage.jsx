import Navbar from "../Navbar/Navbar";
import profileimg from '../../../assets/profileimg.svg'
import './ProfilePage.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profilegetdata } from "../../../redux/actions/ProfileActions";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as ReactBootStrap from "react-bootstrap";


function ProfilePage(){

const [check , setCheck] = useState(0);
const [arr , setarr]= useState([]);
const arr1= useSelector((state)=>state.profilereducer);
const [loading , setLoading] = useState(true);
 
useEffect(()=>{
if(check==1){
   setarr(arr1.response)
   setLoading(false);
}
} , [check])
 
const app = arr.AppPassword;
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(profilegetdata(setCheck));
    },[])

return(<>
{loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
<Navbar />
<div id='profilediv'>
    <div id='flexdiv'>
<img src={profileimg} id='profileimage'></img>
<h1 id='prohead'>User Profile</h1>
</div>
<div id='profilecomp'>
<div id='profiledetails'>
    <pre><p>Name             :  {arr.name}</p></pre>    
    <pre><p>Email             :  {arr.email}</p></pre>    
    <pre><p>Phone No.    :  {arr.mobile}</p></pre>    
    <pre><p>Gender          :  {arr.gender}</p></pre>    
    <pre><p>Username     :  {arr.user_name}</p></pre>    
    </div>
</div>
<Link to='/editprofile'><button id='formbtn8'>Edit Profile</button></Link>
{{app}?<Link to='/updatepassword'><button id='formbtn8'>Update App Password</button></Link>:<Link to='/addpassword'><button id='formbtn8'>Add App Password</button></Link>}
<Link to='/addmails'><button id='formbtn8'>Add Emails</button></Link>
</div>
</>)
}
export default ProfilePage;