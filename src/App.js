import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FrgPass from './components/auth/Frgpassword';
import Login from './components/auth/Login';
import Loginotp from './components/auth/LoginOtp';
import ResetPass from './components/auth/ResetPass';
import Signup from './components/auth/signup';
import SignupDetails from './components/auth/SignupDetails';
import Signupotp from './components/auth/SignupOtp';
import FrontPage from './components/layout/Dashboard/Frontpage';
import Contacts from './components/layout/Dashboard/Group/Contacts';
import Import from './components/layout/Dashboard/Group/Import';
import Copy from './components/layout/Dashboard/Group/Copy';
import CreateGroup from './components/layout/Dashboard/Group/Creategroup';
import Uploads from './components/layout/Dashboard/Group/UploadFile';
import AddContacts from './components/layout/Dashboard/Group/AddContact';
import Mailhistory from './components/layout/Dashboard/Mailhistory';
import MyGroup from './components/layout/MyGroup/MyGroup';
import Groupinfo from './components/layout/MyGroup/Groupinfo';
import ProfilePage from './components/layout/ProfilePage/ProfilePage';
import Templates from './components/layout/Mailing/Templates/Template';
import EditProfile from './components/layout/ProfilePage/ProfileEdit';
import AddPassword from './components/layout/ProfilePage/AddPassword';
import UpdatePassword from './components/layout/ProfilePage/UpdateAppPassword';
import AddEmails from './components/layout/ProfilePage/AddEmails';
import Mails from './components/layout/Mailing/Mailingpage/Mails';
// import Home from './components/auth/home';
import ScheduleHistory from './components/layout/Schedules/ScheduleHistory';
import Schedule from './components/layout/Schedules/Schedules';
import Campaign from './components/layout/Mailing/Mailingpage/Campaign';
import TemplateComp from './components/layout/Mailing/Templates/TemplateComp';
import AddTemplate from './components/layout/Mailing/Templates/Addtemplate';
import FileUpload from './components/layout/Mailing/Mailingpage/FileUpload';
import TemplatesShow from './components/layout/Mailing/Templates/TempShow';
import EditContacts from './components/layout/MyGroup/ContactEdit';
import EditGroup from './components/layout/MyGroup/GroupEdit';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' exact element={<Login />}></Route>
      <Route path="/forgot" exact element={<FrgPass />}></Route>
      <Route path="/loginotp" exact element={<Loginotp />}></Route>
      <Route path="/resetpass" exact element={<ResetPass />}></Route>
      <Route path="/signup" exact element={<Signup />}></Route>
      <Route path="/signupotp" exact element={<Signupotp />}></Route>
      <Route path="/signupdetails" exact element={<SignupDetails />}></Route>
      <Route path="/home" exact element={<FrontPage />}></Route>
      <Route path="/contacts" exact element={<Contacts />}></Route>
      <Route path="/import" exact element={<Import />}></Route>
      <Route path="/copy" exact element={<Copy />}></Route>
      <Route path="/creategroup" exact element={<CreateGroup />}></Route>
      <Route path="/uploads" exact element={<Uploads />}></Route>
      <Route path="/addcontacts" exact element={<AddContacts />}></Route>
      <Route path="/mailhistory" exact element={<Mailhistory />}></Route>
      <Route path="/mygrp" exact element={<MyGroup />}></Route>
      <Route path="/groupinfo" exact element={<Groupinfo />}></Route>
      <Route path="/profilepage" exact element={<ProfilePage />}></Route>
      <Route path="/templates" exact element={<Templates />}></Route>
      <Route path="/editprofile" exact element={<EditProfile />}></Route>
      <Route path="/addpassword" exact element={<AddPassword />}></Route>
      <Route path="/updatepassword" exact element={<UpdatePassword />}></Route>
      <Route path="/addmails" exact element={<AddEmails />}></Route>
      <Route path="/mails" exact element={<Campaign />}></Route>
      <Route path="/mailingpage" exact element={<Mails />}></Route>
      {/* <Route path="/" exact element={<Home />}></Route> */}
      <Route path="/schedulehistory" exact element={<ScheduleHistory/>}></Route>
      <Route path="/schedule" exact element={<Schedule/>}></Route>
      <Route path="/addtemp" exact element={<AddTemplate/>}></Route>
      <Route path="/fileupload" exact element={<FileUpload/>}></Route>
      <Route path="/template" exact element={<TemplatesShow/>}></Route>    
      <Route path="/editcontacts" exact element={<EditContacts/>}></Route>    
      <Route path="/editgroup" exact element={<EditGroup/>}></Route>    
    </Routes>
  </Router>
  </>
  );
}

export default App;
