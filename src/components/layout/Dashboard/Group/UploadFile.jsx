import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import uploads from '../../../../assets/uploads.svg';
import { useState } from 'react';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uploaddata } from '../../../../redux/actions/GroupAction';
import * as ReactBootStrap from "react-bootstrap";

function Uploads(){
    const [file , setFile] = useState([]);
    const [loading , setLoading] = useState(false);
    const [check , setCheck] = useState(0);

    var group = localStorage.getItem("grpId");

    const fd= new FormData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleFiles(e){
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setCheck(0);
    fd.append("file" , file);
    fd.append("group" , group);
    dispatch(uploaddata(fd, setLoading , navigate , setCheck));
    }
    return(<>
    {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id="manager2">
    <h1 id='pagehead2'>Upload a File</h1>   
    <p id='intropara3'>Select a .csv or an excel file...</p>
    <div id='copyform'>
    <form onSubmit={handleSubmit}>
    <label htmlFor="file-input">
       <div id='imgdiv'>
        <img src={uploads}></img>
        <p id='upload'>Upload file here</p>
       </div>
    </label>
    <input type="file" name='file' accept=".csv" id='file-input' onChange={handleFiles}/>
    <button id='formbtn5' type='submit'>Upload</button>
    </form>
    </div>
    </div>
    </div>
    </>)
}
export default Uploads;