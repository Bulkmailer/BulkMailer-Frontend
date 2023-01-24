import {useNavigate} from 'react-router-dom';
import './MyGroup.css';
import { useState } from 'react';
import FormData from 'form-data';
import deleteitem from '../../../assets/delete.svg'
import { deletecontact } from '../../../redux/actions/GroupAction';
import { useDispatch } from 'react-redux';

function Contactname(props){
    const dispatch = useDispatch();
    const [check , setCheck] = useState(0);
    const fd = new FormData();

    function handleDelete(e){
        setCheck(0);
        console.log(e.currentTarget.id);
       fd.append("id" , e.currentTarget.id);
        dispatch(deletecontact(fd , setCheck));
        document.getElementById(e.currentTarget.id).style.display="none";
        }
    
return(
    <>
    <div id='flexkro'>
   <div className="groupnamediv"  id={props.id}>
    <h4 className='groupnames'>{props.name}</h4>
    <pre className='groupnames'><p id='contactpara'>Email    :{props.email}</p></pre>
    <pre className='groupnames'><p id='contactpara'>Gender :{props.gender}</p></pre>
   </div>
   <div className='greydiv' id={props.id}>
   <img src={deleteitem} className='deleteimg' id={props.id} onClick={handleDelete}></img>
   </div>
   </div>
    </>
);
}
export default Contactname;