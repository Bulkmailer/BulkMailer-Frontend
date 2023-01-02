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

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/login' exact element={<Login />}></Route>
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
    </Routes>
  </Router>
  </>
  );
}

export default App;
