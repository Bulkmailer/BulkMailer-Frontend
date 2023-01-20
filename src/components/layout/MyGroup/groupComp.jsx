import {useNavigate} from 'react-router-dom';
import './MyGroup.css';
import deleteitem from "../../../assets/delete.svg";
import { useDispatch } from 'react-redux';
import { deletegroupdata } from '../../../redux/actions/GroupAction';
import FormData from 'form-data';
import { showgroup } from '../../../redux/actions/GroupAction';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Groupname(props){
    const dispatch = useDispatch();
    const fd = new FormData();
    var Navigate = useNavigate();
    
    const [check , setCheck] = useState(0);

    function groupclick(e){
        console.log(e.target.id);
        localStorage.setItem("groupid" , e.currentTarget.id);
        Navigate("/groupinfo");
    }
    function handleDelete(e){
    setCheck(0);
    fd.append("id" , e.currentTarget.id)
    dispatch(deletegroupdata(fd , setCheck));
    }

return(
    <>
    <div id='flexkro' className='blur'>
   <div className="groupnamediv"  id={props.id} onClick={groupclick}>
    <p className='groupnames' id={props.id}>{props.id}. {props.groupname}</p>
    </div>
    <div id='greydiv'>
   <img src={deleteitem} className='deleteimg' id={props.id} onClick={handleDelete}></img>
   </div>
   </div>
    </>
);
}
export default Groupname;