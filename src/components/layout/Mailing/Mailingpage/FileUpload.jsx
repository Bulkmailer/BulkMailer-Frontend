// import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import uploads from '../../../../assets/uploads.svg';
import { useEffect, useState } from 'react';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fileuploadimg, uploaddata } from '../../../../redux/actions/GroupAction';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function FileUpload(){
    const [file , setFile] = useState([]);
    const [loading , setLoading] = useState(false);
    const [check , setCheck] = useState(0);

    var campaign = localStorage.getItem("campaign");

    const fd= new FormData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleFiles(e){
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    function handleSubmit(e){
    e.preventDefault();
    setCheck(0);
    fd.append("file" , file);
    fd.append("mail" , campaign);
    dispatch(fileuploadimg(fd , navigate , setCheck))
    }
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <div id="manager2">
    <h1 id='pagehead2'>Upload a File</h1>   
    <p id='intropara3'>Select a file to be attached with your email</p>
    <div id='copyform'>
    <form onSubmit={handleSubmit}>
    <label htmlFor="file-input">
       <div id='imgdiv'>
        <img src={uploads}></img>
        <p id='upload'>Upload file here</p>
       </div>
    </label>
    <input type="file" name='file' id='file-input' onChange={handleFiles}/>
    {/* <button id='formbtn5' type='submit'>Upload</button> */}
    <div id='sider'>
    <p id='buttonpara'><button id='formbtn3' type='submit'>Upload</button><Link to='/mailingpage'><button id='plike'>Skip</button></Link></p>
    </div>
    </form>
    <ToastContainer />
    </div>
    </div>
    </div>
    </>)
}
export default FileUpload;