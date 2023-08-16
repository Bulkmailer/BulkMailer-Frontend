import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import templateimg from "../../../../assets/template.svg";
import FormData from "form-data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtemp } from "../../../../redux/actions/GroupAction";
import background from "../../../../assets/background.jpg";
import { useEffect } from "react";
import uploads from "../../../../assets/uploads.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import templateimgs from "../../../../assets/templatesimg.svg";
import addimg from "../../../../assets/add.svg";

function AddTemplate() {
  // const [temp , setTemp] = useState();
  const [tempName, setTempName] = useState();
  const [file, setFile] = useState([]);
  const [name, setName] = useState();
  const [check, setCheck] = useState(0);
  const [loading, setLoading] = useState(false);

  const fd = new FormData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [correctTemplateName, setCorrectTemplateName] = useState(false);

  const rightTemplateName = /^[^\s]+(\s+[^\s]+)*$/;

  useEffect(() => {
    if (rightTemplateName.test(tempName)) {
      document.getElementById("error5F").style.display = "none";
      setCorrectTemplateName(true);
    } else if (tempName) {
      document.getElementById("error5F").style.display = "block";
      setCorrectTemplateName(false);
    }
  }, [tempName]);

  const mssg = useSelector((state) => state.groupreducer);

  useEffect(() => {
    // console.log(check);
    if (check == 1) {
      console.log(mssg.statusB);
      if (mssg.statusB) {
        toast.error("Template Model With this Name Already Exist", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }, [check]);

  // function handleTemp(e){
  // setTemp(e.target.value);
  // }
  function handleTempName(e) {
    setTempName(e.target.value);
  }

  function handleFiles(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    setName(e.target.files[0].name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (correctTemplateName) {
      fd.append("name", tempName);
      fd.append("html_file", file);
      // fd.append("template" , temp);
      dispatch(addtemp(fd, navigate, setCheck, setLoading));
    }
  }

  return (
    <>
      <img src={background} id="background"></img>
      <Navbar />
      <div id="flexkro">
        <div id="marginerA">
          <h1 id="formhead">Add A Template</h1>
          <form id="formflexer" onSubmit={handleSubmit}>
            <label htmlFor="name" id="formlabel">
              Template Name
            </label>
            <input
              type="text"
              placeholder="Enter Template Name"
              id="forminput3B"
              value={tempName}
              onChange={handleTempName}
              maxLength={20}
            ></input>
            <img src={templateimg} id="mailimg"></img>
            <p id="error5F">Invalid Template Name</p>
            <label htmlFor="from" id="formlabel">
              Template File
            </label>
            {file.length == 0 ? (
              <div id="fixer">
                <label htmlFor="file-input">
                  <div id="imgdiv">
                    <img src={uploads} id="upimg"></img>
                    <p id="upload">Upload file here</p>
                  </div>
                </label>
              </div>
            ) : (
              <>
                <div id="fixer">
                  <div id="imgdiv">
                    <p id="marginp">{name}</p>
                  </div>
                </div>
                <div>
                  <button type="submit" id="formbtn10">
                    Next
                  </button>
                </div>
              </>
            )}
            <input
              type="file"
              name="file"
              multiple
              accept=".html"
              id="file-input"
              onChange={handleFiles}
            />
            {/* <label htmlFor="from" id='formlabel'>Template code</label>
        <p>Enter your template html code here..</p>
        <textarea rows={5} cols={6} required id='textarea2' value={temp} onChange={handleTemp}></textarea> */}
          </form>
          <ToastContainer />
        </div>
        <img src={templateimgs} id="mailbox2"></img>
      </div>
    </>
  );
}
export default AddTemplate;
