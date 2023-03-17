// import './Group.css';
import Navbar from "../../Navbar/Navbar";
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
import uploading from '../../../../assets/uploading.svg';
import background from '../../../../assets/background.jpg'

function FileUpload(){
    const [file , setFile] = useState([]);
    const [file2 , setFile2] = useState([]);
    const [name , setName] = useState();
    const [loading , setLoading] = useState(false);
    const [check , setCheck] = useState(0);

    var campaign = localStorage.getItem("campaign");

    const fd= new FormData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleFiles(e){
        console.log(e.target.files);
        setFile(e.target.files[0]);
        setName(e.target.files[0].name);
        setFile2(URL.createObjectURL(e.target.files[0]));
    }
    function handleSubmit(e){
    e.preventDefault();
    setCheck(0);
    fd.append("file" , file);
    fd.append("mail" , campaign);
    dispatch(fileuploadimg(fd , navigate , setCheck))
    }
    return(<>
        <img src={background} id='background'></img>
    <Navbar />
    <div id="managerC">
    <img src={uploading} id='create7'></img>
    <div>
    <h1 id='pagehead2'>Upload a File</h1>   
    <p id='intropara3A'>Select a file to be attached with your email</p>

    {(file.length!=0)?<form><img src={file2} id='previewImg' alt={name}></img><p id='buttonpara'><button id='formbtn32' type='submit' onClick={handleSubmit}>Upload</button><Link to='/mailingpage'><button id='plike'>Skip</button></Link><button id='plike' type='submit'>Cancel</button></p></form>:<><label htmlFor="file-input">
       <div id='imgdiv'>
        <img src={uploads} id='upimg'></img>
        <p id='upload'>Upload file here</p>
       </div>
    </label>
    <Link to='/mailingpage'><button id='plike2'>Skip</button></Link></>}
    <input type="file" name='file' id='file-input' onChange={handleFiles}/>
    <ToastContainer />
    </div>
    <img src={uploading} id='create11'></img>
    </div>
    </>)
}
export default FileUpload;