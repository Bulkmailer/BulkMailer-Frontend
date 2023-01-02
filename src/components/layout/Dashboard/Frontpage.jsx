import Navbar from "../Navbar/Navbar";
import dashboard from '../../../assets/dashboard.svg'
import './Frontpage.css'
import { Link } from "react-router-dom";

function FrontPage(){
return(
    <>
<Navbar />
<div id='padder'>
<img src={dashboard} id='dashboardimg'></img>
<h1 id='welcome'>Welcome To <span id='h1part'>BULK MAILER!!!</span></h1>
<p id='intropara'>Get Started to have an improved mailing experience....</p>
<div id='boxflex'>
<Link to='/creategroup'><button id='box'>Create Group</button></Link>
    <Link to='/template'><button id='box'>Templates</button></Link> 
    <Link to='/mailhistory'><button id='box'>Mail History</button></Link>
</div>
</div>
    </>
)
}
export default FrontPage;