import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import uploads from '../../../../assets/uploads.svg';

function Uploads(){
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id="manager">
    <h1 id='pagehead2'>Upload a File</h1>   
    <p id='intropara3'>Select a .csv or an excel file...</p>
    <div id='copyform'>
    <label for="file-input">
       <div id='imgdiv'>
        <img src={uploads}></img>
        <p id='upload'>Upload file here</p>
       </div>
    </label>
    <input type="file" accept=".csv" id='file-input'/>
    </div>
    </div>
    </div>
    </>)
}
export default Uploads;