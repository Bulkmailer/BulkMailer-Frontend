import {useNavigate} from 'react-router-dom';
import './MyGroup.css';
function Contactname(props){
return(
    <>
   <div className="groupnamediv"  id={props.id}>
    <h4 className='groupnames'>{props.name}</h4>
    <pre className='groupnames'><p id='contactpara'>Email    :{props.email}</p></pre>
    <pre className='groupnames'><p id='contactpara'>Gender :{props.gender}</p></pre>
   </div>
    </>
);
}
export default Contactname;