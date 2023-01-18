import './Navbar.css';
import logo from '../../../assets/logo.svg';
import profile from '../../../assets/profile.svg';
import circle from '../../../assets/circlestwo.svg';
import { Link } from "react-router-dom";

function Navbar(){
return(
    <>
    <div id='nav'>
    <img src={logo} id='logo'></img>
        <ul id='navul'>
            <li></li>
            <li>Dashboard</li>
            <li>Mails</li>
            <Link to='/mygrp'><li>My groups</li></Link>
        </ul>
        <Link to='/profilepage'><img src={profile} id="profile"></img></Link>
    </div>
    <img src = {circle} id="circletwo"></img>
    </>
)
}
export default Navbar;