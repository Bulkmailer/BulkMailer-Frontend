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
import mailimg from '../../../../assets/mailimg.svg'
import background from '../../../../assets/background.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [fromName , setFromName] = useState();
    const [subject , setSubject] = useState("");
    const [company , setCompany] = useState("");
    const [body , setBody] = useState("");
    const [template , setTemplate] = useState("");
    const [file , setFile] = useState([]);
    const scheduleMail = "false";

    const dispatch = useDispatch();
    const fd= new FormData();
    const navigate = useNavigate();

    const[correctSubject , setCorrectSubject]= useState(false);
    const[correctCompanyName , setCorrectCompanyName]= useState(false);

    const rightSubject=/^[^\s]+(\s+[^\s]+)*$/;

    useEffect(() => {
        if (rightSubject.test(subject)) {
          document.getElementById("error5D").style.display = "none";
          setCorrectSubject(true);
        } else if (subject) {
          document.getElementById("error5D").style.display = "block";
          setCorrectSubject(false);
        }
      }, [subject]);

      useEffect(() => {
        if (rightSubject.test(company)) {
          document.getElementById("error5E").style.display = "none";
          setCorrectCompanyName(true);
        } else if (company) {
          document.getElementById("error5E").style.display = "block";
          setCorrectCompanyName(false);
        }
      }, [company]);

    useEffect(()=>{
    dispatch(showgroup(setCheck))
    dispatch(seeappPassword(setCheck2))
    },[])
    
    const groupArr1= useSelector((state)=>state.mygroupreducer)
    const emailArr1= useSelector((state)=>state.profilereducer)

    useEffect(()=>{
        console.log(check);
    if(check==1){
     setGroupArr(groupArr1.initial)
    }
    },[check])
    useEffect(()=>{
        console.log(check2)
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
        <p id={emailArr.id} className={emailArr.email}
        onClick={addid2}
        >{emailArr.email}</p>
        );
        }

    function showdiv(){
        // if(groupArr.length!=0){
   document.getElementById("groupsdiv").style.display="block";
        // } 
        if(groupArr.length==0){
    toast.error("Please add a group first", {
        position: toast.POSITION.TOP_RIGHT
    });
   }
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
        setFromName(e.target.className);
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
        if(from && group && company && subject){
        if(correctSubject && correctCompanyName){
        console.log("hey")
        setCheck(0);
        console.log(company , subject ,body , from, group , campaign , scheduleMail);
        // fd.append("_from" , 2);
        fd.append("_from" , from);
        fd.append("_company" , company);
        fd.append("_subject" , subject);
        fd.append("_body" , body);
        fd.append("_group" , group);
        fd.append("id" , campaign);
        fd.append("_template" , templatesid);
        fd.append("scheduleMail" , scheduleMail);
        dispatch(sendmaildata( setCheck , fd , navigate));
        }
    }
    else{
        toast.error("Please Fill in all the fields first", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    }
    function setValue(){
        // localStorage.setItem("_from" , 2);
        localStorage.setItem("_from" , from);
        localStorage.setItem("_company" , company);
        localStorage.setItem("_subject" , subject);
        localStorage.setItem("_body" , body);
        localStorage.setItem("_template" , templatesid);
        localStorage.setItem("_group" , group);
        if(group && company && subject){
        navigate("/schedule");
        }
        else{
            toast.error("Please Fill in all the fields first", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
    return(
        <>
            <img src={background} id='background'></img>
<Navbar />
<div id='groupsdiv'>{groupArr.map((rest)=>getGroup(rest))}</div>
<div id='groupsdiv2'>{emailArr.map((rest)=>getEmail(rest))}</div>
<div id='flexkro'>
<div id='marginer'>
    <h1 id='formhead'>Form A Mail</h1>
    <form id='formflexer'>
        <label htmlFor="from" id='formlabel'>To(Choose A Group)</label>
        <input type='text' placeholder='--select--' id='forminput3A' onClick={showdiv} autoComplete="off" value={groupname} required></input>
        <img src={toimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>From</label>
        <input type='text' placeholder='--select--' id='forminput3A' 
        onClick={showdiv2} 
         autoComplete="off" value={fromName} required></input> 
        <img src={fromimg} id='mailimg2A'></img>
        <label htmlFor="from" id='formlabel'>Subject</label>
        <input type='text' placeholder='Enter Subject' id='forminput3A' value={subject} onChange={handleSubject} required maxLength={300}></input>
        <img src={subjectimg} id='mailimg'></img>
        <p id='error5D'>Invalid Subject</p>
        {(templatesid==null)?<><label htmlFor="from" id='formlabel'>Body</label>
        <textarea rows={5} cols={6} value={body} onChange={handleBody} required id='textarea2'></textarea>
        <img src={bodyimg} id='failimg'></img></>:null}    
        <label htmlFor="from" id='formlabel'>Company Name</label>
        <input type='text' placeholder='Enter Company Name' id='forminput3A' value={company} onChange={handleCompany} required maxLength={10}></input>
        <img src={companyimg} id='mailimg'></img>
        <p id='error5E'>Invalid Company Name</p>
        <div>
        <button onClick={handleSubmit} id='formbtn10'>Send now</button>
        <button id='formbtn10' onClick={setValue}>Schedule</button>
        </div>
    </form>
    {/* <div id='buttoner'>
   
    </div> */}
</div>
<img src={mailimg} id='mailbox'></img>
</div>
<ToastContainer />
</>
    )

}
export default Mails