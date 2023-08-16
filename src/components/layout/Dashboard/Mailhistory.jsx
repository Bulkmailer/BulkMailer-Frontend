// import './Group.css';
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { mailhistory } from "../../../redux/actions/GroupAction";
import { useState } from "react";
import { useSelector } from "react-redux";
import HistoryComp from "./MailHistoryComp";
import nomails from "../../../assets/nomails.svg";
import { seeappPassword } from "../../../redux/actions/ProfileActions";
import background from "../../../assets/background.jpg";

function Mailhistory() {
  const [list1, setList1] = useState();
  const [check, setCheck] = useState(0);

  const list = useSelector((s) => s.groupreducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mailhistory(setCheck));
  }, []);
  useEffect(() => {
    if (check == 1) {
      setList1(list.mailList);
    }
  }, [check]);

  function getMail(list1) {
    return (
      <HistoryComp
        id={list1.id}
        subject={list1._subject}
        body={list1._body}
        company={list1._company}
        from={list1._from}
        to={list1._group}
        status={list1.status}
      />
    );
  }

  return (
    <>
      <img src={background} id="background"></img>
      <Navbar />
      <h1 id="listhead">Mail History</h1>
      {/* <button id='formbtn17'>All</button>
        <button id='formbtn17'>Sent</button>
        <button id='formbtn17'>Schedule</button> */}
      {/* <hr></hr> */}
      <div className="namesdiv2">
        {list1 && list1.length != 0 ? (
          list1.map((rest) => getMail(rest))
        ) : (
          <div id="nothing">
            <img src={nomails} id="nothingimg"></img>
            <p>No contacts</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Mailhistory;
