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
import { showgroup, viewtemp } from "../../../../redux/actions/GroupAction";
import { sendmaildata } from "../../../../redux/actions/GroupAction";
import FormData from 'form-data';
import { Link, useNavigate } from "react-router-dom";
import { seeappPassword } from "../../../../redux/actions/ProfileActions";

function Mails(){
    var a=1;
    var campaign = localStorage.getItem("campaign");
    var templatesid = localStorage.getItem("templateid");
    const [check , setCheck] = useState(0);
    const [check2 , setCheck2] = useState(0);
    const [groupArr , setGroupArr] = useState([])
    const [emailArr , setemailArr] = useState([])
    const [group , setGroup] = useState();
    const [groupname , setGroupName] = useState();
    const [from , setFrom] = useState();
    const [subject , setSubject] = useState("");
    const [company , setCompany] = useState("");
    const [body , setBody] = useState("");
    const [template , setTemplate] = useState("");
    const [file , setFile] = useState([]);
    const scheduleMail = "false";

    const dispatch = useDispatch();
    const fd= new FormData();
    const navigate = useNavigate();

    useEffect(()=>{
    dispatch(showgroup(setCheck))
    dispatch(seeappPassword(setCheck2))
    },[])
    
    const groupArr1= useSelector((state)=>state.mygroupreducer)
    const emailArr1= useSelector((state)=>state.profilereducer)

    useEffect(()=>{
    if(check==1){
     setGroupArr(groupArr1.initial)
    }
    },[check])
    useEffect(()=>{
        if(check2==1){
         setemailArr(emailArr1.response2);
        }
        },[check2])

    function getGroup(grouparr) {
        return (
        <p id={grouparr.id} onClick={addid} className={grouparr.name}>{grouparr.name}</p>
        );
        }

    function getEmail(emailArr){
        return (
        <p id={emailArr.id} 
        onClick={addid2}
        >{emailArr.email}</p>
        );
        }

    function showdiv(){
   document.getElementById("groupsdiv").style.display="block";
    }
    function showdiv2(){
        document.getElementById("groupsdiv2").style.display="block";
         }
    function addid(e){
        setGroup(e.target.id);
        setGroupName(e.target.className);
        document.getElementById("groupsdiv").style.display="none";
    }
    function addid2(e){
        setFrom(e.target.id);
        document.getElementById("groupsdiv2").style.display="none";
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
        console.log(company , subject ,body , from, group , campaign , scheduleMail);
        fd.append("_from" , 2);
        fd.append("_company" , company);
        fd.append("_subject" , subject);
        fd.append("_body" , body);
        fd.append("_group" , group);
        fd.append("id" , campaign);
        fd.append("_template" , templatesid);
        fd.append("scheduleMail" , scheduleMail);
        dispatch(sendmaildata( setCheck , fd , navigate));
    }
    function setValue(){
        localStorage.setItem("_from" , 2);
        localStorage.setItem("_company" , company);
        localStorage.setItem("_subject" , subject);
        localStorage.setItem("_body" , body);
        localStorage.setItem("_template" , templatesid);
        localStorage.setItem("_group" , group);
        navigate("/schedule");
    }
    return(
        <>
<Navbar />
<div id='groupsdiv'>{groupArr.map((rest)=>getGroup(rest))}</div>
<div id='groupsdiv2'>{emailArr.map((rest)=>getEmail(rest))}</div>
<div id='marginer'>
    <h1 id='formhead'>Form A Mail</h1>
    <form id='formflexer' onSubmit={handleSubmit}>
        <label htmlFor="from" id='formlabel'>To(Choose A Group)</label>
        <input type='text' placeholder='--select--' id='forminput3' onClick={showdiv} autoComplete="off" value={groupname} required></input>
        <img src={toimg} id='mailimg'></img>
        {/* <label htmlFor="from" id='formlabel'>From</label> */}
        {/* <input type='text' placeholder='--select--' id='forminput3'  */}
        {/* // onClick={showdiv2}  */}
        {/* autoComplete="off" value={from} required></input> */}
        <img src={toimg} id='failimg'></img>
        <label htmlFor="from" id='formlabel'>Subject</label>
        <input type='text' placeholder='Enter Subject' id='forminput3' value={subject} onChange={handleSubject} required></input>
        <img src={subjectimg} id='mailimg'></img>
        {(templatesid==null)?<><label htmlFor="from" id='formlabel'>Body</label>
        <textarea rows={5} cols={6} value={body} onChange={handleBody} required id='textarea2'></textarea>
        <img src={bodyimg} id='failimg'></img></>:null}    
        <label htmlFor="from" id='formlabel'>Company Name</label>
        <input type='text' placeholder='Enter Company Name' id='forminput3' value={company} onChange={handleCompany} required></input>
        <img src={companyimg} id='mailimg'></img>
        <div>
        <button type='submit' id='formbtn10'>Send now</button>
        <button id='formbtn10' onClick={setValue}>Schedule</button>
        </div>
    </form>
</div>
</>
    )

}
export default Mails