import { useNavigate } from "react-router-dom";

const initial = {
  response: "",
  response1: ["a", "b"],
  response3: ["a", "b"],
  response4: ["a", "b"],
  response5: ["a", "b"],
  response6: ["a", "b"],
  statusB: "",
};
const authreducer = (state = initial, action) => {
  switch (action.type) {
    case "Login": {
      console.log(action.payload);
      if (action.payload.data) {
        localStorage.setItem("accesstokenb", action.payload.data.access);
        console.log(localStorage.getItem("accesstokenb"));
      }
      return {
        response:
           action.payload.response.data?.msg,
      };
    }
    case "Forgot": {
      console.log(action.payload);
      console.log(action.payload.response.data.msg);
      return {
        response1: action.payload.response.data.msg,
      };
    }
    case "Signup": {
      console.log(action.payload);
      console.log(action.payload.response.data.msg);
      return {
        response3: action.payload.response.data.msg,
      };
    }
    case "SignupOtp": {
      console.log(action.payload);
      console.log(action.payload.response.data.msg);
      return {
        response4: action.payload.response.data.msg,
      };
    }
    case "SignupDetails": {
      console.log(action.payload);
      break;
    }
    case "LoginOtp": {
      console.log(action.payload);
      console.log(action.payload.response.data.msg);
      // if(action.payload.response.status==400){
      console.log(action.payload.response.status);
      // }
      if (action.payload.response.status == 400) {
        return {
          statusB: action.payload.response.status,
          response5: action.payload.response.data.msg,
        };
      }
      return {
        statusB: action.payload.response.status,
      };
    }
    case "ResetPass": {
      console.log(action.payload);
      console.log(action.payload.response.data.msg);
      return {
        response6: action.payload.response.data.msg,
      };
    }
    default:
      return null;
  }
};
export default authreducer;
