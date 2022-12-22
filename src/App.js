import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FrgPass from './components/auth/Frgpassword';
import Login from './components/auth/Login';
import Loginotp from './components/auth/LoginOtp';
import ResetPass from './components/auth/ResetPass';
import Signup from './components/auth/signup';
import SignupDetails from './components/auth/SignupDetails';
import Signupotp from './components/auth/SignupOtp';

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
    </Routes>
  </Router>
  </>
  );
}

export default App;
