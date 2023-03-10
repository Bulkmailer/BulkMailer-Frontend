import Navbar from "../Navbar/Navbar";
import profileimg from '../../../assets/profileimg2.svg'
import './ProfilePage.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profilegetdata } from "../../../redux/actions/ProfileActions";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as ReactBootStrap from "react-bootstrap";
import background from '../../../assets/background.jpg'


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
console.log(app);
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(profilegetdata(setCheck));
    },[])

return(<>
      <img src={background} id='background'></img>
{loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
<Navbar />
<div id='flexkro'>
<img src={profileimg} id='create7'></img>
<div id='profilediv'>
<h1 id='prohead'>User Profile</h1>
<div id='profilecomp'>
<div id='profiledetails'>
    {/* <pre> */}
      <p><span className="groupnames">Name             :</span>  {arr.name}</p>
      {/* </pre>     */}
    {/* <pre> */}
      <p><span className="groupnames">Email             :</span>  {arr.email}</p>
      {/* </pre>     */}
    {/* <pre> */}
      <p><span className="groupnames">Phone No.    :</span>  {arr.mobile}</p>
      {/* </pre>/   */}
    {/* <pre> */}
      <p><span className="groupnames">Gender          :</span>  {arr.gender}</p>
      {/* </pre>     */}
    {/* <pre> */}
      <p><span className="groupnames">Username     :</span>  {arr.user_name}</p>
      {/* </pre>     */}
    </div>
</div>
<div id='flexer'>
<Link to='/editprofile'><button id='formbtn8'>Edit Profile</button></Link>
{(app==true)?<Link to='/updatepassword'><button id='formbtn8'>Update App Password</button></Link>:<Link to='/addpassword'><button id='formbtn8'>Add App Password</button></Link>}
<Link to='/addmails'><button id='formbtn8'>Add Emails</button></Link>
</div>
</div>
<img src={profileimg} id='create8A'></img>
</div>
</>)
}
export default ProfilePage;