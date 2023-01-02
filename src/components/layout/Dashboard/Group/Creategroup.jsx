import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import group from '../../../../assets/group.svg';
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { creategroupdata } from '../../../../redux/actions/GroupAction';
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateGroup(){
    const [name, setName] = useState("");

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(0);

  const dispatch = useDispatch();
  const fd = new FormData();
  const navigate = useNavigate();

  function handleName(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setCheck(0);
    fd.append("name" , name);
    dispatch(creategroupdata(fd, setLoading , navigate , setCheck));
  }

    return(
    <>
    {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div>
    <h1 id='grouphead'>Create A Mailing Group</h1>
    {/* <div id='flexform'> */}
        <form id='flexform' onSubmit={handleSubmit}>
        <label htmlFor='title' id='formlabel'>Group title</label>
        <input type='text' id='forminput' placeholder='Enter Group Title' value={name} onChange={handleName} required></input>
        <img src={group} id="mailimg"></img>
        <p id='buttonpara'><button id='formbtn3' type='submit'>Create</button>Cancel</p>
        </form>
    {/* </div> */}
    </div>
    </div>
    </>)
}
export default CreateGroup;