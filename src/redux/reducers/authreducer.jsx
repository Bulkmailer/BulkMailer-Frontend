import { useNavigate } from 'react-router-dom';

const initial={};
const authreducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Login" :{
        console.log(action.payload);
        break;
        }
        case "Forgot" :{
        console.log(action.payload);
        // navigate('/loginotp');
        break;
        }
        case "Signup" :{
        console.log(action.payload);
        break;
        }
        case "SignupOtp" :{
        console.log(action.payload);
        break;
        }
        case "SignupDetails" :{
        console.log(action.payload);
        break;
        }
        case "LoginOtp" :{
        console.log(action.payload);
        break;
        }
         default: return null;
    } 
 }
 export default authreducer;