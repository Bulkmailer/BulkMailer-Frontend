import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { groupinfo } from "../../../redux/actions/GroupAction";
import FormData from 'form-data';
import Navbar from "../Navbar/Navbar";
import nocontacts from '../../../assets/nocontacts.svg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Contactname from "./contactComp";
import background from '../../../assets/background.jpg'
import * as ReactBootStrap from 'react-bootstrap';

function Groupinfo(){
const[list1 , setList1] = useState();
const [check , setCheck] = useState(0);
const[loading , setLoading] = useState(true);

const list =useSelector((s)=>s.groupreducer);

var name = localStorage.getItem("groupnameA");

const dispatch=useDispatch();

useEffect(()=>{
dispatch(groupinfo(setCheck , setLoading));
},[])
useEffect(()=>{
    if(check==1){
    setList1(list.contactList);
    }
    },[check])


    useEffect(()=>{
    console.log(loading);
    },[loading])

    function getContact(list1){
        return (
          <Contactname
            id={list1.id}
            name={list1.name}
            email={list1.email}
            gender={list1.gender}
          />
        );
        }
return(<>
 {loading?<div id='loader'><ReactBootStrap.Spinner animation="border" id="spinner"/></div>:null}
<img src={background} id='background'></img>
<Navbar/>
{(list1)?<h1 id='listhead'>Group Contacts</h1>:null}
{/* {(list1)?<p className='groupnames2'>Total No. Of Contacts : {list1.length}</p>:null} */}
<div className="namesdiv">
{(list1)?(list1.map((rest)=>getContact(rest))):<div id='nothing'><img src={nocontacts} id='nothingimg'></img><div id='btndiv'>
<Link to='/contacts'><button id='formbtn10'>Add Contacts</button></Link>
</div></div>}
</div>
{(list1)?
<Link to='/contacts'><button id='formbtn11A'>Add Contacts</button></Link>
:null}
</>)
}
export default Groupinfo;