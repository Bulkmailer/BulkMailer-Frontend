import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { groupinfo } from "../../../redux/actions/GroupAction";
import FormData from 'form-data';
import Navbar from "../Navbar/Navbar";
import nocontacts from '../../../assets/nocontacts.svg'
import { Link } from "react-router-dom";

function Groupinfo(){
var group_id = localStorage.getItem("groupid");
const list =0;

const dispatch=useDispatch();
const fd= new FormData();


useEffect(()=>{
fd.append("group_id" , group_id);
dispatch(groupinfo(fd));
},[])
return(<>
<Navbar/>
<div className="namesdiv">
{(list)?<p>yes</p>:<div id='nothing'><img src={nocontacts} id='nothingimg'></img><p>No contacts</p></div>}
</div>
</>)
}
export default Groupinfo;