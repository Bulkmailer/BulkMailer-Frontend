import { useState } from "react";
import { useEffect } from "react";
import { schedulehistory } from "../../../redux/actions/GroupAction";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import ScheduleComp from "./ScheduleComp";
import { useSelector } from "react-redux";
import noschedules from "../../../assets/noschedule.svg";
import background from "../../../assets/background.jpg";
import * as ReactBootStrap from "react-bootstrap";

function ScheduleHistory() {
  const [check, setCheck] = useState(0);
  const [list1, setList1] = useState();
  const [loading, setLoading] = useState(true);

  const list = useSelector((s) => s.groupreducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(schedulehistory(setCheck, setLoading));
  }, []);

  useEffect(() => {
    if (check == 1) {
      setList1(list.mailList);
    }
  }, [check]);
  function getSchedule(list1) {
    return (
      <ScheduleComp
        id={list1.id}
        subject={list1._subject}
        body={list1._body}
        company={list1._company}
        date={list1._date}
        hour={list1._hour}
        minute={list1._minute}
        month={list1._month}
        year={list1._year}
        from={list1._from}
        to={list1._group}
        status={list1.status}
      />
    );
  }
  return (
    <>
      {loading ? (
        <div id="loader">
          <ReactBootStrap.Spinner animation="border" id="spinner" />
        </div>
      ) : null}
      <img src={background} id="background"></img>
      <Navbar />
      {list1 && list1.length != 0 ? <h1 id="listhead">My Schedules</h1> : null}
      <div className="namesdiv2">
        {list1 && list1.length != 0 ? (
          list1.map((rest) => getSchedule(rest))
        ) : (
          <div id="nothing">
            <img src={noschedules} id="nothingimg"></img>
            <h6 id="nothingpara">No Schedules</h6>
          </div>
        )}
      </div>
    </>
  );
}
export default ScheduleHistory;
