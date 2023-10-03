import "./Group.css";
import Navbar from "../../Navbar/Navbar";
import uploads from "../../../../assets/uploads.svg";
import { useEffect, useState } from "react";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploaddata } from "../../../../redux/actions/GroupAction";
import * as ReactBootStrap from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Papa from "papaparse";
import uploading from "../../../../assets/uploading.svg";
import background from "../../../../assets/background.jpg";

function Uploads() {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(0);
  const [bool, setbool] = useState(false);
  const [array, setArray] = useState([]);
  const [newArray, setNewArray] = useState([]);
  let uniqueContacts = [];

  var group = localStorage.getItem("groupid");

  const mssg = useSelector((s) => s.groupreducer);
  useEffect(() => {
    if (check == 1) {
      console.log(mssg.status3);
      if (mssg.status3 == 500 || mssg.status3 == 400) {
        toast.error(
          "Select a valid .csv file containing emails , names and gender of contacts to be added ",
          {
            position: toast.POSITION.TOP_RIGHT,
          },
        );
      }
    }
  }, [check]);

  const fd = new FormData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(group);
    setLoading(true);
    setCheck(0);
    const data = {
      group: group,
      "data[]": newArray,
    };
    dispatch(uploaddata(data, setLoading, navigate, setCheck));
  }
  function handleCancel() {
    console.log(file);
  }

  useEffect(() => {
    uniqueContacts = Array.from(new Set(array.map((a) => a.email))).map(
      (email) => {
        return array.find((a) => a.email === email);
      },
    );
    console.log(uniqueContacts);
    setNewArray(uniqueContacts);

    const resultFinal = uniqueContacts.map(Object.values);
    let i = 1;
    // let i=0;
    resultFinal.map((data, index) => {
      if (i == 0) {
        let table = document.getElementById("tb1-data");
        generateTableHead(table, data);
      } else {
        let table = document.getElementById("tb1-data");
        generateTableRows(table, data);
      }
      i++;
    });
  }, [array]);

  function handleFiles(e) {
    setbool(true);
    console.log(bool);
    setFile(e.target.files[0]);
    Papa.parse(e.target.files[0], {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (result) {
        console.log(result);
        setArray(result.data);
      },
    });
  }

  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTableRows(table, data) {
    let newRow = table.insertRow(-1);
    data.map((row, index) => {
      let newCell = newRow.insertCell();
      let newText = document.createTextNode(row);
      newCell.appendChild(newText);
    });
  }

  return (
    <>
      {console.log(newArray)}
      <img src={background} id="background" />
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
      <Navbar />
      <div id="managerC">
        <img src={uploading} id="create7" />
        <div>
          <h1 id="pagehead2">Upload a File</h1>
          <p id="intropara3">Select a .csv or an excel file...</p>

          {file.length != 0 ? (
            <form>
              <table id="tb1-data" />
              <p id="buttonpara">
                <button id="formbtn5" onClick={handleSubmit}>
                  Upload
                </button>
                <button id="plike" onClick={handleCancel}>
                  Cancel
                </button>
              </p>
            </form>
          ) : (
            <div id="show">
              <label htmlFor="file-input">
                <div id="imgdiv">
                  <img src={uploads} id="upimg" />
                  <p id="upload">Upload file here</p>
                </div>
              </label>
            </div>
          )}
          <input
            type="file"
            name="file"
            multiple
            accept=".csv"
            id="file-input"
            onChange={handleFiles}
          />
        </div>
        <img src={uploading} id="create8" />
      </div>
    </>
  );
}
export default Uploads;
