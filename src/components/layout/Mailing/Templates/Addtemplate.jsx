import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import templateimg from '../../../../assets/template.svg'
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtemp } from "../../../../redux/actions/GroupAction";

function AddTemplate(){

const [temp , setTemp] = useState();
const [tempName , setTempName] = useState();
const [check , setCheck] = useState(0);
const [loading , setLoading] = useState(false);

const fd = new FormData();
const dispatch = useDispatch();
const navigate = useNavigate();

function handleTemp(e){
setTemp(e.target.value);
}
function handleTempName(e){
    setTempName(e.target.value);
    }
function handleSubmit(e){
    e.preventDefault();
    fd.append("name" , tempName);
    fd.append("template" , temp);
    dispatch(addtemp(fd , navigate , setCheck , setLoading));
}

return(
    <>
    <Navbar />
   <div id='marginer'>
    <h1 id='formhead'>Add A Template</h1>
    <form id='formflexer' onSubmit={handleSubmit}>
        <label htmlFor='name' id='formlabel'>Template Name</label>
        <input type='text' placeholder='Enter Template Name' id='forminput3' value={tempName} onChange={handleTempName}></input>
        <img src={templateimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Template code</label>
        <p>Enter your template html code here..</p>
        <textarea rows={5} cols={6} required id='textarea2' value={temp} onChange={handleTemp}></textarea>
        <div>
        <button type='submit' id='formbtn10'>Next</button>
        </div>
    </form>
</div>
    </>
)
}
export default AddTemplate;