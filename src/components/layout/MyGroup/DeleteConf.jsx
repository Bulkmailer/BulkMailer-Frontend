import { useNavigate } from "react-router-dom";
import { deletegroupdata } from "../../../redux/actions/GroupAction";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { useState } from "react";

function DeleteConf(){
const navigate = useNavigate();
const dispatch = useDispatch();
const fd= new FormData();
const [check , setCheck] = useState(0);
var id = localStorage.getItem("deletegroup");

    function dltfunc(){
    fd.append("id" , id);
    dispatch(deletegroupdata(fd , setCheck , navigate));
    navigate("/mygrp");
    }
    function backfunc(){
        navigate("/mygrp");
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
export default DeleteConf;