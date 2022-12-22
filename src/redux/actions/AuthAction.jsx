import api from '../apis.jsx';

export const logindata =(logindata , setLoading) =>
async (dispatch)=>{
    await api.post("/auth/login/" , logindata)
      .then((res)=>{
          setLoading(false);
          dispatch(
              {type:'Login' ,
              payload :res}
              )
          })
      .catch((err)=>{
          setLoading(false);
          dispatch(
              {type:'Login' ,
              payload :err}
              )
             
      })
  }

export const frgdata =(frgdata , setLoading) =>
async (dispatch)=>{
    await api.post("/auth/otp/" , frgdata)
      .then((res)=>{
        setLoading(false);
          dispatch(
              {type:'Forgot' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'Forgot' ,
              payload :err}
              )
      })
  }

export const signupdata =(signupdata , setLoading)=>
async (dispatch)=>{
    await api.post("/auth/otp/" , signupdata)
      .then((res)=>{
        setLoading(false);
          dispatch(
              {type:'Signup' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'Signup' ,
              payload :err}
              )
      })
  }

export const signupotp =(signupotp , setLoading)=>
async (dispatch)=>{
    await api.post("/auth/otp_verify/" , signupotp)
      .then((res)=>{
        setLoading(false);
          dispatch(
              {type:'SignupOtp' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'SignupOtp' ,
              payload :err}
              )
      })
  }

export const signupdetails =(signupdetails , setLoading)=>
async (dispatch)=>{
    await api.post("/auth/registration/" , signupdetails)
      .then((res)=>{
        setLoading(false);
          dispatch(
              {type:'SignupDetails' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'SignupDetails' ,
              payload :err}
              )
      })
  }

export const loginotp =(loginotp, setLoading)=>
async (dispatch)=>{
    await api.post("/auth/otp_verify/" , loginotp)
      .then((res)=>{
        setLoading(false);
          dispatch(
              {type:'LoginOtp' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'LoginOtp' ,
              payload :err}
              )
      })
  }

