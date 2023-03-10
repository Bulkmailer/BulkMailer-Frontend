import Navbar from "../../Navbar/Navbar";
import './Templates.css'
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewtemp } from "../../../../redux/actions/GroupAction";
import { useState } from "react";
import TemplateComp from "./TemplateComp";
import background from '../../../../assets/background.jpg';

function Templates(){
  const dispatch =  useDispatch();
  const [check , setCheck]= useState(0);
  const [tempArr1 , setTempArr1] = useState([]);

  const tempArr = useSelector((s)=>s.groupreducer);
  const navigate = useNavigate();

  useEffect(()=>{
  if(check==1){
 setTempArr1(tempArr.temp);
  }
  }, [check])

useEffect(()=>{
 dispatch(viewtemp(setCheck));
},[])

function view(tempArr1){
  return(
  <TemplateComp 
  name = {tempArr1.name}
  id ={tempArr1.id}
  />
  )
}
console.log(tempArr1)
function handleSkip(e){
// localStorage.setItem("templateid" , null);
localStorage.removeItem("templateid");
navigate("/fileupload");
}
return (<>
    <img src={background} id='background'></img>
<Navbar />
    <div id='templatesdiv'>
        <h1 id='heading1'>My Templates</h1>
        <div id='templateflex'>
{(tempArr1)?(tempArr1.map((rest)=>view(rest))):<p>No templates</p>}
</div>
{/* <Link to='/addtemp'><button id='formbtn10'>Add new</button></Link> */}
<p id='buttonpara'><Link to='/addtemp'><button id='formbtn3' type='submit'>Add New</button></Link><button id='plike' onClick={handleSkip}>Skip</button></p>
    </div>
</>)
}
export default Templates;