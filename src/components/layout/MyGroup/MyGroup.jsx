import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { showgroup } from "../../../redux/actions/GroupAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Groupname from "./groupComp";
import { useSelector } from "react-redux";
import nogroups from "../../../assets/nogroup.svg";
import { Link } from "react-router-dom";
import background from "../../../assets/background.jpg";
import * as ReactBootStrap from "react-bootstrap";

function MyGroup() {
  const [check, setCheck] = useState(0);
  const [loading, setLoading] = useState(true);
  const [groupArr, setGrouparr] = useState();
  const [len, setLen] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showgroup(setCheck, setLoading));
  }, []);

  const groupArr1 = useSelector((state) => state.mygroupreducer);

  useEffect(() => {
    if (check == 1) {
      setGrouparr(groupArr1.initial);
      setLen(groupArr1.init);
    }
  }, [check]);

  function getGroup(grouparr) {
    // setLen(groupArr.length)
    return <Groupname id={grouparr.id} groupname={grouparr.name} />;
  }

  return (
    <>
      {groupArr ? null : (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      )}
      <img src={background} id="background"></img>
      <Navbar />
      {groupArr && groupArr.length != 0 ? (
        <h1 id="listhead">My Groups</h1>
      ) : null}
      {/* {(groupArr&&groupArr.length!=0)?<p className='groupnames2'>Total No. Of Groups : {len}</p>:null} */}
      <div className="namesdiv">
        {groupArr && groupArr.length != 0 ? (
          <>{groupArr.map((rest) => getGroup(rest))}</>
        ) : (
          <div id="nothing">
            <img src={nogroups} id="nothingimg"></img>
            <Link to="/creategroup">
              <div id="btndiv">
                <button id="formbtn9">Add Groups</button>
              </div>
            </Link>
          </div>
        )}
      </div>
      {groupArr && groupArr.length != 0 ? (
        <div>
          <Link to="/creategroup">
            <button id="formbtn11A">Add Groups</button>
          </Link>
        </div>
      ) : null}
    </>
  );
}
export default MyGroup;
