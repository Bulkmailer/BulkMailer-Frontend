import "./Group.css";
import Navbar from "../../Navbar/Navbar";
import contacts from "../../../../assets/contacts.svg";
import { Link } from "react-router-dom";
import newcontact from "../../../../assets/newcontact.svg";
import background from "../../../../assets/background.jpg";

function Contacts() {
  return (
    <>
      <img src={background} id="background" />
      <Navbar />
      <div id="managerC">
        <img src={newcontact} id="create3" />
        <div>
          <h1 id="pagehead">
            <img src={contacts} />Contacts
          </h1>
          <p id="intropara2">
            You can add contacts manually or upload them through csv , txt , xls
            file....
          </p>
          <div id="marginer">
            <div id="boxflex2">
              <Link to="/uploads">
                <div id="box2">Import Contacts</div>
              </Link>
              <Link to="/addcontacts">
                <div id="box2">Add Contacts Manually</div>
              </Link>
            </div>
          </div>
        </div>
        <img src={newcontact} id="create4" />
      </div>
    </>
  );
}
export default Contacts;
