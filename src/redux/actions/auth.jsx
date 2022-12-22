import api from '../apis.jsx';

export const logindata =(logindata) =>
async (dispatch)=>{
    const response = await api.post("/auth/login/" , logindata);
    dispatch({type:'Login' , payload :response})
}

export const frgdata =(frgdata) =>
async (dispatch)=>{
    const response = await api.post("/auth/otp/" , frgdata);
    dispatch({type:'Forgot' , payload :response})
}

export const signupdata =(signupdata)=>
    async(dispatch)=>{
        const response = await api.post("/auth/otp/" , signupdata)
        dispatch({type:'Signup' , payload : response})
}

export const signupotp =(signupotp)=>
    async(dispatch)=>{
        const response = await api.post("/auth/otp_verify/" , signupotp)
        dispatch({type:'SignupOtp' , payload : response})
}

export const signupdetails =(signupdetails)=>
    async(dispatch)=>{
        const response = await api.post("/auth/registration/" , signupdetails)
        dispatch({type:'SignupDetails' , payload : response})
}

export const loginotp =(loginotp)=>
    async(dispatch)=>{
        const response = await api.post("/auth/otp_verify/" , loginotp)
        dispatch({type:'LoginOtp' , payload : response})
}

