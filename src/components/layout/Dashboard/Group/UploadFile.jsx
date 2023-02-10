import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import uploads from '../../../../assets/uploads.svg';
import { useEffect, useState } from 'react';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uploaddata } from '../../../../redux/actions/GroupAction';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CSVReader} from 'react-papaparse';

function Uploads(){
    // const [file , setFile] = useState([]);
    const [loading , setLoading] = useState(false);
    // const [check , setCheck] = useState(0);

    // var group = localStorage.getItem("groupid");

    // const mssg = useSelector((s)=>s.groupreducer);
    // useEffect(()=>{
    //   if(check==1){
    //     console.log(mssg.status3)
    //     if(mssg.status3==400 || mssg.status3==500){
    //     toast.error("Select a valid .csv file containing emails , names and gender of contacts to be added ", {
    //       position: toast.POSITION.TOP_RIGHT}
    //   );
    //     }
    //   }
    // },[check]);
   
    // const fd= new FormData();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // function handleFiles(e){
    //     console.log(e.target.files);
    //     setFile(e.target.files[0]);
    // }
    // function handleSubmit(e){
    // e.preventDefault();
    // console.log(group);
    // setLoading(true);
    // setCheck(0);
    // fd.append("file" , file);
    // fd.append("group" , group);
    // dispatch(uploaddata(fd, setLoading , navigate , setCheck));
    // }
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
    {/* <div id='copyform'>
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
    <ToastContainer />
    </div> */}
    </div>
    </div>
    </>)
}
export default Uploads;