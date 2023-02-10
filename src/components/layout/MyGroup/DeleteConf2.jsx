import { useNavigate } from "react-router-dom";
import { deletecontact } from "../../../redux/actions/GroupAction";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { useState } from "react";

function DeleteConf2(){
const navigate = useNavigate();
const dispatch = useDispatch();
const fd= new FormData();
const [check , setCheck] = useState(0);
var id = localStorage.getItem("contactid");

    function dltfunc(){
        fd.append("id" , id);
        dispatch(deletecontact(fd , setCheck , navigate));
        navigate("/groupinfo");
    }
    function backfunc(){
        navigate("/groupinfo");
    }
    
    return(
        <>
        <div id='askmenudiv2'>
        <div id='logoutdiv'>
            <p>Do you really want to delete this group?</p>
            <button id='formbtn12' onClick={dltfunc}>Yes</button>
            <p onClick={backfunc}>No</p>
        </div>
    </div> 
        </>
    )
}
export default DeleteConf2;