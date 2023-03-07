import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import contacts from '../../../../assets/contacts.svg';
import { Link } from 'react-router-dom';
import newcontact from '../../../../assets/newcontact.svg';

function Contacts(){
    return(<>
    <Navbar />
    <div id="managerC">
        <img src={newcontact} id='create3'></img>
        <div>
    <h1 id='pagehead'><img src={contacts}></img>Contacts</h1>   
    <p id='intropara2'>You can add contacts manually or upload them through csv , txt , xls file....</p>
    <div id='marginer'>
    <div id='boxflex2'>
    <Link to='/uploads'><div id='box2'>Import Contacts</div></Link>
    <Link to='/addcontacts'><div id='box2'>Add Contacts Manually</div></Link>
</div>
</div> 
</div>
<img src={newcontact} id='create4'></img>
    </div>
   
    </>)
}
export default Contacts;