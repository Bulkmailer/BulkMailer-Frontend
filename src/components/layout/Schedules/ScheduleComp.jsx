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
    <p className='groupnames'>Subject:{props.subject}</p>
    <p className='groupnames'>Company:{props.company}</p>
    <p className='groupnames'>Body:{props.body}</p>
    <p className='groupnames'>Date:{props.date}-{props.month}-{props.year}</p>
    <p className='groupnames'>Time:{props.hour}:{props.minute} </p>
    <p className='groupnames'>From:{props.from} </p>
    <p className='groupnames'>To:{props.to} </p>
    <p className='groupnames'>Status:{props.status} </p>
    </div>
    {/* <div id='greydiv'> */}
   {/* <img src={deleteitem} className='deleteimg' id={props.id} onClick={handleDelete}></img> */}
   {/* </div> */}
    </div>
        </>
    )
}
export default ScheduleComp;