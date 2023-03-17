import {useNavigate} from 'react-router-dom';
import './MyGroup.css';
import deleteitem from "../../../assets/delete.svg";
import { useDispatch } from 'react-redux';
import { deletegroupdata } from '../../../redux/actions/GroupAction';
import FormData from 'form-data';
import { showgroup } from '../../../redux/actions/GroupAction';
import { useState } from 'react';
import { faEye } from '@fortawesome/fontawesome-free-solid';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import editImg from '../../../assets/editContact.svg';

function Groupname(props){
    const dispatch = useDispatch();
    const fd = new FormData();
    var navigate = useNavigate();

    const [check , setCheck] = useState(0);

    function groupclick(e){
        console.log(e.target.id);
        console.log(e.target.className);
        localStorage.setItem("groupid" , e.currentTarget.id);
        localStorage.setItem("groupnameA" , e.currentTarget.className);
        navigate("/groupinfo");
    }
function handleBack(){
    document.getElementById('askmenudiv2').style.display='none';
}
function handleConfirm(){
    var id = localStorage.getItem("deletegroup");
    fd.append("id" , id);
    dispatch(deletegroupdata(fd , setCheck , navigate));
    document.getElementById('askmenudiv2').style.display='none';
    document.getElementById(id).style.display='none';
}
    function handleDelete(e){
    document.getElementById('askmenudiv2').style.display='block';
    setCheck(0);
    localStorage.setItem('deletegroup' ,e.currentTarget.id);
    }

    function handleEdit(e){
        localStorage.setItem("groupID" , e.currentTarget.id);
        console.log(e.currentTarget.id);
        navigate("/editgroup");
    }

return(
    <>
            <div id='askmenudiv2'>
        <div id='logoutdiv'>
            <p >Do you really want to delete this group?</p>
            <button id='formbtn12' onClick={handleConfirm}>Yes</button>
            <p id='nobtn' onClick={handleBack}>No</p>
        </div>
    </div> 
   <div className="groupnamediv2"  id={props.id}>
    <p className='groupnames' id={props.id}> {props.groupname}</p>
   <img src={deleteitem} className='deleteimg' id={props.id} onClick={handleDelete}></img>
   <img src={editImg} className='deleteimg' id={props.groupname} onClick={handleEdit}></img>
   <FontAwesomeIcon icon={faEye} 
   id={props.id}
    className="eyeimg" onClick={groupclick} />
   </div>
    </>
);
}
export default Groupname;