import "./Navbar.css";
import logo from "../../../assets/logo.svg";
import profile from "../../../assets/profile.svg";
import circle from "../../../assets/circlestwo.svg";
import { Link, NavLink } from "react-router-dom";
import menu from "../../../assets/menu.svg";
import cross from "../../../assets/cross.svg";
import dashboardimg from "../../../assets/dashboard.svg";
import mails from "../../../assets/mail.svg";
import groups from "../../../assets/group.svg";
import logout from "../../../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  function showmenu() {
    document.getElementById("uli").style.width = "75vw";
  }
  function askmenu() {
    document.getElementById("askmenudiv").style.display = "block";
  }
  function logoutfunc() {
    Navigate("/");
    localStorage.removeItem("accesstokenb");
  }
  function hideaskmenu() {
    document.getElementById("askmenudiv").style.display = "none";
  }
  function close() {
    document.getElementById("uli").style.width = 0;
  }
  function listitems() {
    if (document.getElementById("olli").style.display == "none") {
      document.getElementById("olli").style.display = "block";
    } else {
      document.getElementById("olli").style.display = "none";
    }
  }

  return (
    <>
      <div id="askmenudiv">
        <div id="logoutdiv2">
          <p>Do you really want to LogOut?</p>
          <button id="formbtn12" onClick={logoutfunc}>
            Yes
          </button>
          <p id="nobtn" onClick={hideaskmenu}>
            No
          </p>
        </div>
      </div>
      <div id="uli">
        <img src={cross} id="crossimg" onClick={close}></img>
        <ul>
          <li onClick={listitems}>
            <img src={dashboardimg} id="dashboardimg3"></img>Dashboard
            <ol id="olli">
              <li>
                <Link to="/creategroup">Create Group</Link>
              </li>
              <li>
                <Link to="/mailhistory">Mail History</Link>
              </li>
              <li>
                <Link to="/templates">Templates</Link>
              </li>
            </ol>
          </li>
          <li>
            <Link to="/mails">
              <img src={mails} id="dashboardimg4"></img>Mails
            </Link>
          </li>
          <li>
            <Link to="/mygrp">
              <img src={groups} id="dashboardimg4"></img>My Groups
            </Link>
          </li>
        </ul>
      </div>
      <nav id="nav" className="blur">
        <img src={logo} id="logo"></img>
        <ul id="navul">
          <li></li>
          <NavLink
            to="/home"
            className={
              [
                "/home",
                "/creategroup",
                "/template",
                "/mailhistory",
                "/contacts",
                "/uploads",
                "/addcontacts",
                "/addtemp",
              ].includes(pathname)
                ? "active"
                : "inactive"
            }
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="/mails"
            className={
              [
                "/mails",
                "/templates",
                "/fileupload",
                "/mailingpage",
                "/schedule",
              ].includes(pathname)
                ? "active"
                : "inactive"
            }
          >
            <li>Mails</li>
          </NavLink>
          <NavLink
            to="/mygrp"
            className={
              ["/mygrp", "/groupinfo"].includes(pathname)
                ? "active"
                : "inactive"
            }
          >
            <li>My groups</li>
          </NavLink>
          <NavLink to="/schedulehistory">
            <li>My Schedules</li>
          </NavLink>
        </ul>
        <img src={menu} id="menu" onClick={showmenu}></img>
        <Link to="/profilepage">
          <img src={profile} id="profile"></img>
        </Link>
        <img src={logout} id="logout" onClick={askmenu}></img>
      </nav>
      <img src={circle} id="circletwo"></img>
    </>
  );
}
export default Navbar;
