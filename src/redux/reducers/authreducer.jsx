import { useNavigate } from 'react-router-dom';

const initial={
    response:""
};
const authreducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Login" :{
        console.log(action.payload);
        console.log(action.payload.response.data.msg);
        return{
        response:action.payload.response.data.msg
        }
        // break;
        }
        case "Forgot" :{
        console.log(action.payload);
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
        case "ResetPass" :{
        console.log(action.payload);
        break;
        }
         default: return null;
    } 
 }
 export default authreducer;