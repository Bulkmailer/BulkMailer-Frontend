import FormData from "form-data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  sendmaildata,
  sendmaildata2,
} from "../../../../redux/actions/GroupAction";

function TemplateComp(props) {
  const [check, setCheck] = useState(0);
  const fd = new FormData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var campaign = localStorage.getItem("campaign");

  function handletemp(e) {
    console.log(e.currentTarget.id);
    localStorage.setItem("templateid", e.currentTarget.id);
    navigate("/fileupload");
  }
  return (
    <>
      <div className="template" id={props.id} onClick={handletemp}>
        {props.name}
      </div>
    </>
  );
}
export default TemplateComp;
