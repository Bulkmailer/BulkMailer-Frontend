import { useNavigate } from "react-router-dom";
import "./MyGroup.css";
import { useState } from "react";
import FormData from "form-data";
import deleteitem from "../../../assets/delete.svg";
import { deletecontact } from "../../../redux/actions/GroupAction";
import { useDispatch } from "react-redux";
import editImg from "../../../assets/editContact.svg";

function Contactname(props) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(0);
  const fd = new FormData();
  const navigate = useNavigate();

  function handleBack() {
    document.getElementById("askmenudiv2").style.display = "none";
  }
  function handleConfirm() {
    var id = localStorage.getItem("contactid");
    fd.append("id", id);
    dispatch(deletecontact(fd, setCheck, navigate));
    document.getElementById("askmenudiv2").style.display = "none";
    document.getElementById(id).style.display = "none";
  }

  function handleDelete(e) {
    document.getElementById("askmenudiv2").style.display = "block";
    setCheck(0);
    localStorage.setItem("contactid", e.currentTarget.id);
  }

  function handleEdit(e) {
    localStorage.setItem("contactmail", e.currentTarget.id);
    console.log(e.currentTarget.id);
    navigate("/editcontacts");
  }

  return (
    <>
      <div id="askmenudiv2">
        <div id="logoutdiv">
          <p>Do you really want to delete this Contact?</p>
          <button id="formbtn12" onClick={handleConfirm}>
            Yes
          </button>
          <p id="nobtn" onClick={handleBack}>
            No
          </p>
        </div>
      </div>
      <div id="flexkro">
        <div className="groupnamediv3" id={props.id}>
          <pre>
            <p id="contactpara">
              <span className="groupnames">Name :</span> {props.name}
            </p>
          </pre>
          <pre>
            <p id="contactpara">
              <span className="groupnames">Email :</span> {props.email}
            </p>
          </pre>
          <pre>
            <p id="contactpara">
              <span className="groupnames">Gender :</span> {props.gender}
            </p>
          </pre>
          <img
            src={deleteitem}
            className="deleteimg"
            id={props.id}
            onClick={handleDelete}
          ></img>
          <img
            src={editImg}
            className="deleteimg"
            id={props.email}
            onClick={handleEdit}
          ></img>
        </div>
      </div>
    </>
  );
}
export default Contactname;
