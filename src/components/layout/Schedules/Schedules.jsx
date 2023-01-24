import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import FormData from 'form-data';
import { useDispatch } from "react-redux";
import { schedulemaildata, sendmaildata } from "../../../redux/actions/GroupAction";
import './Schedule.css';
import schedule from '../../../assets/schedule.svg';
import { useNavigate } from "react-router-dom";

function Schedule(){
    const [year , setYear] = useState();
    const [month , setMonth] = useState();
    const [date , setDate] = useState();
    const [hour , setHour] = useState();
    const [minute , setMinute] = useState();
    const [check, setCheck] = useState(0);

    const fd= new FormData();
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const scheduleMail = "true";

        var from = localStorage.getItem("_from");
        var group = localStorage.getItem("_group");
        var subject = localStorage.getItem("_subject");
        var template = localStorage.getItem("_template");
        var body = localStorage.getItem("_body");
        var company = localStorage.getItem("_company");
        var campaign = localStorage.getItem("campaign");
    
function handleYear(e){
setYear(e.target.value);
} 
function handleMonth(e){
    setMonth(e.target.value);
    } 
    function handleDate(e){
        setDate(e.target.value);
        } 
        function handleMinute(e){
            setMinute(e.target.value);
            } 
            function handleHour(e){
                setHour(e.target.value);
                } 

var a=1 , b=1 , c=1 , e=1 , f=1;
var d = new Date();
    var currentYear = d.getFullYear ();
    var yroptions = "Year";
    function show2(){
    for (var i = currentYear-1; i < currentYear + 5; i++) {
        if(i==currentYear-1){
            yroptions="<option value= '0'>Year</option>";
            }
            else{
    yroptions += "<option value='"+i+"'>"+i+"</option>"
            }
    }
        if(a==1){
    document.getElementById('yearselect').innerHTML= yroptions;
        }
    return a=0;
    }

    var dateoptions = "Date";
    function show1(){
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    for (var i = 0; i <= 31; i++) {
        if(i==0){
        dateoptions="<option value= '0'>Date</option>";
        }
        else{
        dateoptions += "<option value='"+i+"'>"+i+"</option>"
        }
        }
    }
    else if(month==2&&year%4!=0){
        for (var i = 0; i <= 28; i++) {
            if(i==0){
                dateoptions="<option value= '0'>Date</option>";
                }
                else{
                dateoptions += "<option value='"+i+"'>"+i+"</option>"
                }
                } 
    }
    else if(month==2&&year%4==0){
        for (var i = 0; i <= 29; i++) {
            if(i==0){
                dateoptions="<option value= '0'>Date</option>";
                }
                else{
                dateoptions += "<option value='"+i+"'>"+i+"</option>"
                }
                } 
    }
    else{
        for (var i = 0; i <= 30; i++) {
        if(i==0){
            dateoptions="<option value= '0'>Date</option>";
            }
            else{
            dateoptions += "<option value='"+i+"'>"+i+"</option>"
            }
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
        monthoptions += "<option value='"+i+"'>"+i+"</option>"
        }
        }
            if(c==1){
        document.getElementById('monthselect').innerHTML= monthoptions;
            }
        return c=0;
        }

        var houroptions = "Hour";
        function show4(){
        for (var i = -1; i <= 23; i++) {
            if(i==-1){
            houroptions="<option value= '-1'>Hour</option>";
            }
            else{
            houroptions += "<option value='"+i+"'>"+i+"</option>"
            }
            }
                if(e==1){
            document.getElementById('hourselect').innerHTML= houroptions;
                }
            return e=0;
            }

            var minoptions = "Min";
            function show5(){
            for (var i = -1; i <= 60; i++) {
                if(i==-1){
                minoptions="<option value= '-1'>Min</option>";
                }
                else{
                minoptions += "<option value='"+i+"'>"+i+"</option>"
                }
                }
                    if(f==1){
                document.getElementById('minselect').innerHTML= minoptions;
                    }
                return f=0;
                }
function handlesubmit(e){
    e.preventDefault();
    console.log(year , hour , month , minute , date );
    console.log(scheduleMail)
    fd.append("_date" , date);
        fd.append("_hour" , hour);
        fd.append("_year" , year);
        fd.append("_month" , month);
        fd.append("_minute" , minute);
        fd.append("_from" ,from);
        fd.append("_company" , company);
        fd.append("_subject" , subject);
        fd.append("_body" , body);
        fd.append("_template" ,template);
        fd.append("_group" , group);
        fd.append("scheduleMail" , scheduleMail);
        fd.append("id" , campaign);
       dispatch(sendmaildata(setCheck ,fd , navigate));
}  
return(<>
<Navbar/>
<h1 id='headd'>Schedule Your Mail</h1>
 <div id='sidebarflex'>
<div>
<form onSubmit={handlesubmit} id='scheduleform'>
<label htmlFor='date' id='formlabel'>Date</label>  
<div id='flexkro'>
<select onChange={handleMonth} onClick={show3} id='monthselect' className="forminput5" required>
   <option>{monthoptions}</option>
</select>
<select onChange={handleYear} onClick={show2} id='yearselect' className="forminput5" required>
   <option>{yroptions}</option>
</select>
<select onChange={handleDate} onClick={show1} id='dateselect' className="forminput5" required>
   <option>{dateoptions}</option>
</select>
</div>
<label htmlFor='time' id='formlabel'>Time</label>  
<div id='flexkro'>
<select onChange={handleHour} onClick={show4} id='hourselect' className="forminput5" required>
   <option>{houroptions}</option>
</select>
<select onChange={handleMinute} onClick={show5} id='minselect' className="forminput5" required>
   <option>{minoptions}</option>
</select>
</div>
<button type='submit' id='formbtn11'>Schedule</button>
</form>
</div>
<div id='sideimgdiv'>
 <img src={schedule} id='sideimg'></img>
</div>
</div>
</>
)
}
export default Schedule;