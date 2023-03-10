import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { showgroup } from "../../../redux/actions/GroupAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Groupname from "./groupComp";
import { useSelector } from "react-redux";
import nogroups from '../../../assets/nogroup.svg'
import { Link } from "react-router-dom";
import background from '../../../assets/background.jpg'

function MyGroup(){
    
    const [check , setCheck] = useState(0);
    const [groupArr , setGrouparr] = useState();
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(showgroup(setCheck))
    },[])
    
    const groupArr1= useSelector((state)=>state.mygroupreducer)

    useEffect(()=>{
    if(check==1){
    setGrouparr(groupArr1.initial);
    }
    },[check])
    
    function getGroup(grouparr) {
        return (
          <Groupname
            id={grouparr.id}
            groupname={grouparr.name}
          />
        );
        }

return(<>
<img src={background} id='background'></img>
<Navbar />
{(groupArr&&groupArr.length!=0)?<h1 id='listhead'>My Groups</h1>:null}
<div className="namesdiv">
{(groupArr&&groupArr.length!=0)?<>{groupArr.map((rest)=>getGroup(rest))}</>:<div id='nothing'><img src={nogroups} id='nothingimg'></img><Link to='/creategroup'><div id='btndiv'><button id='formbtn9'>Add Groups</button></div></Link></div>}
</div>
{(groupArr&&groupArr.length!=0)?<div><Link to='/creategroup'><button id='formbtn11A'>Add Groups</button></Link></div>:null}
</>)
}
export default MyGroup;