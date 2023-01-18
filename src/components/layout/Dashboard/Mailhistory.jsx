// import './Group.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Mailhistory(){
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id='pagediv'>
        <h1 id='divhead'>Mail History</h1> 
        <button id='formbtn7'>All</button>
        <button id='formbtn7'>Sent</button>
        <input type='text' placeholder='Search' id='searchinp'></input>
        <hr></hr>
        <div id='historydiv'></div>
        <div id='historydiv'></div>
        <div id='historydiv'></div>
    </div>
    </div>
    </>)
}
export default Mailhistory;