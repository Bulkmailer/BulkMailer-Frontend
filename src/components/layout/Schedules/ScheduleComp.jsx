import { useState } from 'react';
import FormData from 'form-data';
import deleteitem from '../../../assets/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteschedule } from '../../../redux/actions/GroupAction';


function ScheduleComp(props){
    const dispatch = useDispatch();
    const [check , setCheck] = useState(0);
    const fd = new FormData();

    function handleDelete(e){
        setCheck(0);
        console.log(e.currentTarget.id);
       fd.append("id" , e.currentTarget.id);
        dispatch(deleteschedule(fd , setCheck));
        }
    return(
        <>
          
        <div id='flexkro'>
        <div className="groupnamediv">
    <p><span className='groupnames'>Subject : </span> {props.subject}</p>
    <p><span className='groupnames'>Company : </span> {props.company}</p>
    <p><span className='groupnames'>Body : </span>{props.body}</p>
    <p><span className='groupnames'>Date : </span>{props.date}-{props.month}-{props.year}</p>
    <p><span className='groupnames'>Time : </span>{props.hour}:{props.minute} </p>
    {/* <p><span className='groupnames'>From : </span>{props.from} </p> */}
    {/* <p><span className='groupnames'>To : </span>{props.to} </p> */}
    <p><span className='groupnames'>Status : </span>{props.status}</p>
    </div>
    {/* <div id='greydiv'> */}
   {/* <img src={deleteitem} className='deleteimg' id={props.id} onClick={handleDelete}></img> */}
   {/* </div> */}
    </div>
        </>
    )
}
export default ScheduleComp;