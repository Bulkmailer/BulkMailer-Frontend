import Navbar from "../../Navbar/Navbar";
import './Templates.css'
import { Link } from "react-router-dom";

function Templates(){
return (<>
<Navbar />
    <div id='templatesdiv'>
        <h1 id='heading1'>Templates</h1>
      <div id='templateflex'>
<Link to='/template-1'><div id='template'> Template-1</div></Link>
<Link to='/template-2'><div id='template'>Template-2</div></Link>
<Link to='/template-3'><div id='template'>Template-3</div></Link>
<Link to='/template-4'><div id='template'>Template-4</div></Link>
      </div>
    </div>
</>)
}
export default Templates;