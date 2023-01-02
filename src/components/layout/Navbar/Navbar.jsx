import './Navbar.css';
import logo from '../../../assets/logo.svg';
import profile from '../../../assets/profile.svg';
import circle from '../../../assets/circlestwo.svg';

function Navbar(){
return(
    <>
    <div id='nav'>
    <img src={logo} id='logo'></img>
        <ul id='navul'>
            <li></li>
            <li>Dashboard</li>
            <li>Mails</li>
            <li>Schedules</li>
        </ul>
        <img src={profile} id="profile"></img>
    </div>
    <img src = {circle} id="circletwo"></img>
    </>
)
}
export default Navbar;