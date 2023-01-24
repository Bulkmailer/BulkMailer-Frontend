import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import contacts from '../../../../assets/contacts.svg';
import { Link } from 'react-router-dom';

function Contacts(){
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id="manager">
    <h1 id='pagehead'><img src={contacts}></img>Contacts</h1>   
    <p id='intropara2'>You can add contacts manually or upload them through csv , txt , xls file....</p>
    <div id='marginer'>
    <div id='boxflex2'>
    <Link to='/uploads'><div id='box'>Import Contacts</div></Link>
    <Link to='/addcontacts'><div id='box'>Add Contacts Manually</div></Link>
</div>
</div> 
    </div>
    </div>
    </>)
}
export default Contacts;