// import './Group.css';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { mailhistory } from '../../../redux/actions/GroupAction';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HistoryComp from './MailHistoryComp';
import nomails from '../../../assets/nomails.svg'

function Mailhistory(){
    const[list1 , setList1] = useState();
const [check , setCheck] = useState(0);

const list =useSelector((s)=>s.groupreducer);

    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(mailhistory(setCheck));
    },[])
    useEffect(()=>{
        if(check==1){
        setList1(list.mailList);
        }
        },[check])
        function getMail(list1) {
            return (
              <HistoryComp
                id={list1.id}
                subject={list1._subject}
                body={list1._body}
                company={list1._company}
              />
            );
            }
    
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    {/* <Sidebar /> */}
    <div id='pagediv'>
        <h1 id='divhead'>Mail History</h1> 
        {/* <button id='formbtn7'>All</button>
        <button id='formbtn7'>Sent</button>
        <input type='text' placeholder='Search' id='searchinp'></input> */}
        <hr></hr>
        <div className="namesdiv2">
{(list1)?(list1.map((rest)=>getMail(rest))):<div id='nothing'><img src={nomails} id='nothingimg'></img><p>No contacts</p></div>}
</div>
    </div>
    </div>
    </>)
}
export default Mailhistory;