import Navbar from "../../Navbar/Navbar";
import campaignlogo from "../../../../assets/campaignlogo.svg";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import campaign from "../../../../assets/campaign.svg";
import { campaigndata } from "../../../../redux/actions/GroupAction";
import { profilegetdata } from "../../../../redux/actions/ProfileActions";
import background from "../../../../assets/background.jpg";

function Campaign() {
  const [loading, setLoading] = useState(false);
  const [campaignName, setCampaignName] = useState();
  const [check, setCheck] = useState(0);
  const [check2, setCheck2] = useState(0);

  const [arr, setarr] = useState([]);
  const arr1 = useSelector((state) => state.profilereducer);

  const fd = new FormData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [correctName, setCorrectName] = useState(false);

  const rightCampaignName = /^[^\s]+(\s+[^\s]+)*$/;

  useEffect(() => {
    if (rightCampaignName.test(campaignName)) {
      document.getElementById("error5C").style.display = "none";
      setCorrectName(true);
    } else if (campaignName) {
      document.getElementById("error5C").style.display = "block";
      setCorrectName(false);
    }
  }, [campaignName]);

  useEffect(() => {
    dispatch(profilegetdata(setCheck));
  }, []);

  useEffect(() => {
    if (check == 1) {
      setarr(arr1.response);
    }
  }, [check]);

  const app = arr.AppPassword;
  console.log(app);

  function handleSubmit(e) {
    e.preventDefault();
    if (correctName) {
      if (app == true) {
        setLoading(true);
        fd.append("title", campaignName);
        dispatch(campaigndata(fd, setCheck2, setLoading, navigate));
      } else {
        toast.error("Add an app password first", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }
  function handleCampaign(e) {
    setCampaignName(e.target.value);
  }
  return (
    <>
      <img src={background} id="background" />
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
      <Navbar />
      <div id="managerA">
        <img src={campaign} id="create9" />
        <div>
          <h1 id="groupheadA">Add Campaign Name</h1>
          <form id="flexformA" onSubmit={handleSubmit}>
            <label htmlFor="campaignName" id="formslabel">
              Campaign Name
            </label>
            <input
              type="text"
              id="forminput2A"
              placeholder="Enter Campaign Name"
              value={campaignName}
              onChange={handleCampaign}
              required
              maxLength={30}
             />
            <img src={campaignlogo} id="mailimg" />
            <p id="error5C">Invalid Campaign Name</p>
            <p id="buttonpara">
              <button id="formbtn3A" type="submit">
                Submit
              </button>
              <Link to="/home">
                <button id="plike">Cancel</button>
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
        <img src={campaign} id="create10" />
      </div>
    </>
  );
}
export default Campaign;
