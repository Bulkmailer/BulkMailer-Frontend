import api from '../apis.jsx';

export const logindata =(logindata , setLoading , navigate) =>
async (dispatch)=>{
    await api.post("/auth/login/" , logindata)
      .then((res)=>{
          setLoading(false);
          navigate("/home");
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

export const frgdata =(frgdata , setLoading , navigate) =>
async (dispatch)=>{
    await api.post("/auth/otp_reset_password/" , frgdata)
      .then((res)=>{
        setLoading(false);
        navigate('/loginotp');
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

export const signupdata =(signupdata , setLoading , navigate)=>
async (dispatch)=>{
    await api.post("/auth/otp/" , signupdata)
      .then((res)=>{
        setLoading(false);
        navigate("/signupotp");
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

export const signupotp =(signupotp , setLoading , navigate)=>
async (dispatch)=>{
    await api.post("/auth/otp_verify/" , signupotp)
      .then((res)=>{
        setLoading(false);
        navigate("/signupdetails");
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

export const signupdetails =(signupdetails , setLoading , navigate)=>
async (dispatch)=>{
    await api.post("/auth/registration/" , signupdetails)
      .then((res)=>{
        setLoading(false);
        navigate("/home");
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

export const loginotp =(loginotp, setLoading , navigate)=>
async (dispatch)=>{
    await api.post("/auth/otp_verify/" , loginotp)
      .then((res)=>{
        setLoading(false);
        navigate("/resetpass");
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

export const resetpass =(resetpass, setLoading , navigate)=>
async (dispatch)=>{
    await api.patch("/auth/enter_new_password/" , resetpass)
      .then((res)=>{
        setLoading(false);
        navigate("/login");
          dispatch(
              {type:'ResetPass' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'ResetPass' ,
              payload :err}
              )
      })
  }

