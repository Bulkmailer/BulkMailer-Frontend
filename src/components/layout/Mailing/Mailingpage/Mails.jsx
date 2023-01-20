import Navbar from "../../Navbar/Navbar"
import './Mails.css';
import fromimg from '../../../../assets/from.svg'
import toimg from '../../../../assets/to.svg'
import bodyimg from '../../../../assets/body.svg'
import subjectimg from '../../../../assets/subject.svg'
import templateimg from '../../../../assets/template.svg'
import companyimg from '../../../../assets/company.svg'

function Mails(){
   const my =[1 , 2 ,3, 4]
    return(
        <>
<Navbar />
<div id='marginer'>
    <h1 id='formhead'>Form A Mail</h1>
    <form id='formflexer'>
        <label htmlFor="from" id='formlabel'>From</label>
        <input type='text' placeholder='Enter Sender details' id='forminput3'></input>
        <img src={fromimg} id='mailimg2'></img>
        <label htmlFor="from" id='formlabel'>To</label>
        <input type='text' placeholder='Enter Sender details' id='forminput3'></input>
        <img src={toimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Subject</label>
        <input type='text' placeholder='Enter Subject' id='forminput3'></input>
        <img src={subjectimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Body</label>
        <input type='text' placeholder='Enter Content' id='forminput3'></input>
        <img src={bodyimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Template</label>
        <input type='text' placeholder='Enter Template' id='forminput3'></input>
        <img src={templateimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>Company Name</label>
        <input type='text' placeholder='Enter Company Name' id='forminput3'></input>
        <img src={companyimg} id='mailimg'></img>
        <label htmlFor="from" id='formlabel'>From</label>
        <input type='text' placeholder='Enter Recipient' id='forminput3'></input>
        
    </form>
</div>
</>
    )

}
export default Mails