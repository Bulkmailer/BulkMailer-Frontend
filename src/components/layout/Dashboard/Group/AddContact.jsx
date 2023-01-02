import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import email from "../../../../assets/mail.svg"
import names from '../../../../assets/names.svg'
import gender from '../../../../assets/gender.svg';

function AddContacts(){
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id='managing'>
        <h1 id='pagehead'>Add Contacts</h1>
        <form id='flexform2'>
        <label htmlFor='title' id='formlabel'>Email Address</label>
        <input type='text' id='forminput' placeholder='Enter Email Address' required></input>
        <img src={email} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Full Name</label>
        <input type='text' id='forminput' placeholder='Enter Fullname' required></input>
        <img src={names} id="mailimg"></img>
        <label htmlFor='title' id='formlabel'>Gender</label>
        {/* <input type='text' id='forminput' placeholder='Enter Email Address' required></input> */}
        <select name="foodcategory" id='forminput' >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="binary">Binary</option>
              <option value="prefer not to say">Prefer not to say</option>
             </select>
        <img src={gender} id="mailimg"></img>
        <button id='formbtn3' type='submit'>Save & Close</button><button id='formbtn3' type='submit'>Save & Add next</button>
        </form>
    </div>
    </div>
    </>)
}
export default AddContacts;