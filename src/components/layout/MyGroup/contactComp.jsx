import {useNavigate} from 'react-router-dom';
import './MyGroup.css';
import { useState } from 'react';
import FormData from 'form-data';
import deleteitem from '../../../assets/delete.svg'
import { deletecontact } from '../../../redux/actions/GroupAction';
import { useDispatch } from 'react-redux';

function Contactname(props){
    const dispatch = useDispatch();
    const [check , setCheck] = useState(0);
    const fd = new FormData();
    const navigate = useNavigate();

    function handleDelete(e){
        setCheck(0);
        localStorage.setItem("contactid" , e.currentTarget.id);
        navigate("/deletepage2");
        }
    
return(
    <>
    <div id='flexkro'>
   <div className="groupnamediv3"  id={props.id}>
    <pre><p id='contactpara'><span className="groupnames">Name    :</span> {props.name}</p></pre>
    <pre><p id='contactpara'><span className="groupnames">Email     :</span>  {props.email}</p></pre>
    <pre><p id='contactpara'><span className="groupnames">Gender  :</span>  {props.gender}</p></pre>
   <img src={deleteitem} className='deleteimg' id={props.id} onClick={handleDelete}></img>
   </div>
   </div>
    </>
);
}
export default Contactname;