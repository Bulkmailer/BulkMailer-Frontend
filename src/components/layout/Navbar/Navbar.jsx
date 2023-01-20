import './Navbar.css';
import logo from '../../../assets/logo.svg';
import profile from '../../../assets/profile.svg';
import circle from '../../../assets/circlestwo.svg';
import { Link } from "react-router-dom";
import menu from '../../../assets/menu.svg';
import cross from '../../../assets/cross.svg';

function Navbar(){

function showmenu(){
        document.getElementById('uli').style.left=0;
}
function close(){
    document.getElementById('uli').style.left='-100vw'; 
}
function listitems(){
if(document.getElementById('olli').style.display=="none"){    
document.getElementById('olli').style.display="block";
}
else{    
    document.getElementById('olli').style.display="none";
    }
}
return(
    <>
    <div id='uli'>
<img src={cross} id='crossimg' onClick={close}></img>
        <ul>
            <li onClick={listitems}>Dashboard
            <ol id='olli'>
            <li><Link to='/creategroup'>Create Group</Link></li>
            <li><Link to='/mailhistory'>Mail History</Link></li>
            <li><Link to='/templates'>Templates</Link></li>
        </ol>
            </li>
            <li><Link to='/mails'>Mails</Link></li>
            <li><Link to='/mygrp'>My Groups</Link></li>
        </ul>
    </div>
    <div id='nav' className='blur'>
    <img src={logo} id='logo'></img>
        <ul id='navul'>
            <li></li>
            <Link to='/home'><li>Dashboard</li></Link>
            <Link to='/mails'><li>Mails</li></Link>
            <Link to='/mygrp'><li>My groups</li></Link>
            <Link to='/schedulehistory'><li>My Schedules</li></Link>
        </ul>
        <img src={menu} id="menu" onClick={showmenu}></img>
        <Link to='/profilepage'><img src={profile} id="profile"></img></Link>
    </div>
    <img src = {circle} id="circletwo"></img>
    </>
)
}
export default Navbar;