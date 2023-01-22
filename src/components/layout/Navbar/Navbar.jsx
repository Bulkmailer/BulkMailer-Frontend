import './Navbar.css';
import logo from '../../../assets/logo.svg';
import profile from '../../../assets/profile.svg';
import circle from '../../../assets/circlestwo.svg';
import { Link } from "react-router-dom";
import menu from '../../../assets/menu.svg';
import cross from '../../../assets/cross.svg';
import dashboardimg from '../../../assets/dashboard.svg';
import mails from '../../../assets/mail.svg'
import groups from '../../../assets/group.svg';
import logout from '../../../assets/logout.svg';
import { useNavigate } from 'react-router-dom';

function Navbar(){

const Navigate = useNavigate();

function showmenu(){
        document.getElementById('uli').style.width="75vw";
}
function askmenu(){
   document.getElementById("askmenudiv").style.display ="block";
}
function logoutfunc(){
    Navigate("/login");
    localStorage.removeItem("accesstokenb");
}
function hideaskmenu(){
    document.getElementById("askmenudiv").style.display ="none";
 }
function close(){
    document.getElementById('uli').style.width=0; 
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
    <div id='askmenudiv'>
        <div id='logoutdiv'>
            <p>Do you really want to LogOut?</p>
            <button id='formbtn12' onClick={logoutfunc}>Yes</button>
            <p onClick={hideaskmenu}>No</p>
        </div>
    </div>
    <div id='uli'>
<img src={cross} id='crossimg' onClick={close}></img>
        <ul>
            <li onClick={listitems}><img src={dashboardimg} id='dashboardimg3'></img>Dashboard
            <ol id='olli'>
            <li><Link to='/creategroup'>Create Group</Link></li>
            <li><Link to='/mailhistory'>Mail History</Link></li>
            <li><Link to='/templates'>Templates</Link></li>
        </ol>
            </li>
            <li><Link to='/mails'><img src={mails} id='dashboardimg4'></img>Mails</Link></li>
            <li><Link to='/mygrp'><img src={groups} id='dashboardimg4'></img>My Groups</Link></li>
        </ul>
    </div>
    <div id='nav' className='blur'>
    <img src={logo} id='logo'></img>
        <ul id='navul'>
            <li></li>
            <Link to='/home'><li> Dashboard</li></Link>
            <Link to='/mails'><li>Mails</li></Link>
            <Link to='/mygrp'><li>My groups</li></Link>
            <Link to='/schedulehistory'><li>My Schedules</li></Link>
        </ul>
        <img src={menu} id="menu" onClick={showmenu}></img>
        <Link to='/profilepage'><img src={profile} id="profile"></img></Link>
        <img src={logout} id="logout" onClick={askmenu}></img>
    </div>
    <img src = {circle} id="circletwo"></img>
    </>
)
}
export default Navbar;