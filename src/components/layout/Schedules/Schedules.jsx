import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './Schedule.css'
import schedule from '../../../assets/schedule.svg'
import FormData from "form-data";
import { schedulemaildata } from "../../../redux/actions/GroupAction";
import { useDispatch } from "react-redux";

function Schedule(){
    var from = localStorage.getItem("_from");
    var group = localStorage.getItem("_group");
    var subject = localStorage.getItem("_subject");
    var template = localStorage.getItem("_template");
    var body = localStorage.getItem("_body");
    var company = localStorage.getItem("_company");
    var file = localStorage.getItem("_file");

    const [date , setDate] = useState("");
    const [month , setMonth] = useState("");
    const [hour , setHour] = useState("");
    const [minute , setMinute] = useState("");
    const [year , setYear] = useState("");

    const [check , setCheck] = useState(0);

    function handleDate(){
        setDate(e.target.value);
    }
    function handleMonth(){
        setMonth(e.target.value);
    }
    function handleYear(){
        setHour(e.target.value);
    }
    function handleHour(){
        setMinute(e.target.value); 
    }
    function handleMinute(){
        setYear(e.target.value);
    }

    const fd= new FormData();
    const dispatch = useDispatch();

    var a=1 , b=1 , c=1 ;
    var e=1 , f=1;
    var d = new Date();
    var currentYear = d.getFullYear ();
    var yroptions = "Year";
    function show2(){
    for (var i = currentYear-1; i < currentYear + 5; i++) {
        if(i==currentYear-1){
            yroptions="<option value= '0'>Year</option>";
            }
            else{
    yroptions += "<option value="+i+">"+i+"</option>"
            }
    }
        if(a==1){
    document.getElementById('yearselect').innerHTML= yroptions;
        }
    return a=0;
    }
    var dateoptions = "Date";
    function show1(){
    for (var i = 0; i <= 31; i++) {
        if(i==0){
        dateoptions="<option value= '0'>Date</option>";
        }
        else{
        dateoptions += "<option value="+i+">"+i+"</option>"
        }
        }
            if(b==1){
        document.getElementById('dateselect').innerHTML= dateoptions;
            }
        return b=0;
        }
        var monthoptions = "Month";
    function show3(){
    for (var i = 0; i <= 12; i++) {
        if(i==0){
        monthoptions="<option value= '0'>Month</option>";
        }
        else{
        monthoptions += "<option value="+i+">"+i+"</option>"
        }
        }
            if(c==1){
        document.getElementById('monthselect').innerHTML= monthoptions;
            }
        return c=0;
        }

        var houroptions = "Hour";
        function show4(){
        for (var i = 0; i <= 24; i++) {
            if(i==0){
            houroptions="<option value= '0'>Hour</option>";
            }
            else{
            houroptions += "<option value="+i+">"+i+"</option>"
            }
            }
                if(e==1){
            document.getElementById('hourselect').innerHTML= houroptions;
                }
            return e=0;
            }

            var minoptions = "Min";
            function show5(){
            for (var i = 0; i <= 60; i++) {
                if(i==0){
                minoptions="<option value= '0'>Min</option>";
                }
                else{
                minoptions += "<option value="+i+">"+i+"</option>"
                }
                }
                    if(f==1){
                document.getElementById('minselect').innerHTML= minoptions;
                    }
                return f=0;
                }
      
    function handleSubmit(e){
    e.preventDefault();
    console.log(date , hour , year , month , minute , from , company , subject , body , template , group);
    fd.append("_date" , date);
    fd.append("_hour" , hour);
    fd.append("_year" , year);
    fd.append("_month" , month);
    fd.append("_minute" , minute);
    fd.append("_from" ,from);
    fd.append("_company" , company);
    fd.append("_subject" , subject);
    fd.append("_body" , body);
    fd.append("_template" ,template );
    fd.append("_group" , group);
   dispatch(schedulemaildata(setCheck ,fd));
}            
       
return (<>
<Navbar />
<h1 id='headd'>Schedule Your Mail</h1>
<div id='sidebarflex'>
<div>
<form id='scheduleform' onSubmit={handleSubmit}>
<label htmlFor='date' id='formlabel'>Date</label>  
<div id='flexkro'>
<select className='forminput5' id='dateselect' onClick={show1} required onChange={handleDate}>
<option>{dateoptions}</option>
</select>
<select className='forminput5' id='monthselect' onClick={show3} required onChange={handleMonth}>
<option>{monthoptions}</option>
</select>
<select id='yearselect' className="forminput5" onClick={show2} required onChange={handleYear}>
<option>{yroptions}</option>
</select>
</div>
<label html='time' id='formlabel'>Time</label> 
<div id='flexkro'>
<select id='hourselect' className="forminput5" onClick={show4} required onChange={handleHour}> 
<option>{houroptions}</option>
</select>
<select id='minselect' className="forminput5" onClick={show5} required onChange={handleMinute}>
<option>{minoptions}</option>
</select>
    </div> 
    <button id='formbtn11' type='submit'>Schedule</button>
</form>
</div>
<div id='sideimgdiv'>
<img src={schedule} id='sideimg'></img>
</div>
</div>

</>)
}
export default Schedule;