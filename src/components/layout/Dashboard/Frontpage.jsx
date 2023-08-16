import Navbar from "../Navbar/Navbar";
import dashboard from "../../../assets/dashboard.svg";
import "./Frontpage.css";
import { Link } from "react-router-dom";
import frontpage from "../../../assets/frontpage.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { mailhistory } from "../../../redux/actions/GroupAction";
import background from "../../../assets/background.jpg";

function FrontPage() {
  return (
    <>
      <img src={background} id="background"></img>
      <Navbar />
      <div id="padder">
        <img src={dashboard} id="dashboardimg"></img>
        <div id="frontpagediv">
          <img src={frontpage} id="frontpageimg"></img>
        </div>
        <h1 id="welcome">
          Welcome To <span id="h1part">BULK MAILER!!!</span>
        </h1>
        <p id="intropara">
          Get Started to have an improved mailing experience....
        </p>
        <div id="boxflex">
          <Link to="/creategroup">
            <button id="box">Create Group</button>
          </Link>
          <Link to="/template">
            <button id="box">Templates</button>
          </Link>
          <Link to="/mailhistory">
            <button id="box">Mail History</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default FrontPage;
