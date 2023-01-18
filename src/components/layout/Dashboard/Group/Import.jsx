import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { Link } from 'react-router-dom';

function Import(){
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id="manager">
    <h1 id='pagehead3'>Import Options</h1>   
    <p id='intropara4'>You can select a .csv or an excel file from your device or copy and paste contacts from your .xls file ....</p>
    <div id='marginer'>
    <div id='boxflex2'>
    <Link to='/uploads'><div id='box'>Upload a File</div></Link>
    <Link to='/copy'><div id='box'>Copy/Paste</div></Link>
</div>
</div> 
    </div>
    </div>
    </>)
}
export default Import;