import {useNavigate} from 'react-router-dom';
import './MyGroup.css';
function Groupname(props){
    var Navigate = useNavigate();
    function groupclick(e){
        console.log(e.target.id);
        localStorage.setItem("groupid" , e.currentTarget.id);
        Navigate("/groupinfo");
    }
return(
    <>
   <div className="groupnamediv"  id={props.id} onClick={groupclick}>
    <p className='groupnames' id={props.id}>{props.id}. {props.groupname}</p>
   </div>
    </>
);
}
export default Groupname;