import Navbar from "../../Navbar/Navbar"
import './Mails.css';
import fromimg from '../../../../assets/from.svg'
import toimg from '../../../../assets/to.svg'
import bodyimg from '../../../../assets/body.svg'
import subjectimg from '../../../../assets/subject.svg'
import templateimg from '../../../../assets/template.svg'
import companyimg from '../../../../assets/company.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { sendmailsdata, showgroup } from "../../../../redux/actions/GroupAction";
import FormData from 'form-data';
import { Link } from "react-router-dom";

function Mails(){
    const [check , setCheck] = useState(0);
    const [groupArr , setGroupArr] = useState([])
    const [group , setGroup] = useState();
    const [subject , setSubject] = useState("");
    const [company , setCompany] = useState("");
    const [body , setBody] = useState("");
    const [template , setTemplate] = useState("");
    const [file , setFile] = useState([]);

    const dispatch = useDispatch();
    const fd= new FormData();

    useEffect(()=>{
    dispatch(showgroup(setCheck))
    },[])
    
    const groupArr1= useSelector((state)=>state.mygroupreducer)

    useEffect(()=>{
    if(check==1){
     setGroupArr(groupArr1.initial);
    }
    },[check])

    function getGroup(grouparr) {
        return (
        <p id={grouparr.id} onClick={addid}>{grouparr.name}</p>
        );
        }

    function showdiv(){
   document.getElementById("groupsdiv").style.display="block";
    }
    function addid(e){
        setGroup(e.target.id);
        document.getElementById("groupsdiv").style.display="none";
    }
    function handleSubject(e){
        setSubject(e.target.value);
    }
    function handleCompany(e){
        setCompany(e.target.value);
    }
    function handleBody(e){
        setBody(e.target.value);
    }
    function handleTemplate(e){
        setTemplate(e.target.value);
    }
    function handleFile(e){
        setFile(e.target.files[0]);
    }
    function handleSubmit(e){
        e.preventDefault();
        setCheck(0);
        console.log(company , subject ,body , template , group );
        localStorage.setItem("_from" , 1);
        localStorage.setItem("_company" , company);
        localStorage.setItem("_subject" , subject);
        localStorage.setItem("_body" , body);
        localStorage.setItem("_template" ,template );
        localStorage.setItem("_group" , group);
        localStorage.setItem("_file" , file);
        fd.append("_from" ,1);
        fd.append("_company" , company);
        fd.append("_subject" , subject);
        fd.append("_body" , body);
        // fd.append("_template" ,template );
        fd.append("_group" , group);
        fd.append("_file" , file);
        dispatch(sendmailsdata( setCheck , fd));
    }
    return(
        <>
<Navbar />
<div id='groupsdiv'>{groupArr.map((rest)=>getGroup(rest))}</div>
<div id='marginer'>
    <h1 id='formhead'>Form A Mail</h1>
    <form id='formflexer' onSubmit={handleSubmit}>
        <label htmlFor="from" id='formlabel'>To(Choose A Group)</label>
        <input type='text' placeholder='--select--' id='forminput3' onClick={showdiv} autoComplete="off" value={group} required></input>
        <img src={toimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Subject</label>
        <input type='text' placeholder='Enter Subject' id='forminput3' value={subject} onChange={handleSubject} required></input>
        <img src={subjectimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Body</label>
        <input type='text' placeholder='Enter Body' id='forminput3' value={body} onChange={handleBody} required></input>
        <img src={bodyimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Template</label>
        <select id='forminput3' required onChange={handleTemplate}>
            <option value="1" >--select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <img src={templateimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Company Name</label>
        <input type='text' placeholder='Enter Company Name' id='forminput3' value={company} onChange={handleCompany} required></input>
        <img src={companyimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Add A File</label>
        <input type='file' placeholder='Enter Recipient' accept='image/*' onChange={handleFile}></input>
        <div>
        <button type='submit' id='formbtn10'>Send Now</button>
        <Link to='/schedule'><button id='formbtn10'>Schedule</button></Link>
        </div>
    </form>
</div>
</>
    )

}
export default Mails