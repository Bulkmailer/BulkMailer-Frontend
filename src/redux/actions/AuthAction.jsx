import api from '../apis.jsx';

export const logindata =(logindata , setLoading , navigate ,setCheck) =>
async (dispatch)=>{
    await api.post("/auth/login/" , logindata)
      .then((res)=>{
        setCheck(1);
          setLoading(false);
          navigate("/home");
          dispatch(
              {type:'Login' ,
              payload :res}
              )
          })
      .catch((err)=>{
        setCheck(1);
          setLoading(false);
          dispatch(
              {type:'Login' ,
              payload :err}
          )
      })
  }

export const frgdata =(frgdata , setLoading , navigate , setCheck) =>
async (dispatch)=>{
    await api.post("/auth/otp_reset_password/" , frgdata)
      .then((res)=>{
        setLoading(false);
        navigate('/loginotp');
        setCheck(1);
          dispatch(
              {type:'Forgot' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
        setLoading(false);
        setCheck(1);
          dispatch(
              {type:'Forgot' ,
              payload :err}
              )
              setCheck(1);
      })
  }

export const signupdata =(signupdata , setLoading , navigate , setCheck)=>
async (dispatch)=>{
    await api.post("/auth/otp/" , signupdata)
      .then((res)=>{
        setLoading(false);
        navigate("/signupotp");
          dispatch(
              {type:'Signup' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'Signup' ,
              payload :err}
              )
              setCheck(1);
      })
  }

export const signupotp =(signup , setLoading , navigate , setCheck)=>
async (dispatch)=>{
    await api.post("/auth/otp_verify/" , signup)
      .then((res)=>{
        setLoading(false);
        navigate("/signupdetails");
          dispatch(
              {type:'SignupOtp' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'SignupOtp' ,
              payload :err}
              )
              setCheck(1);
      })
  }

export const signupdetails =(signupdetails , setLoading , navigate)=>
async (dispatch)=>{
    await api.post("/auth/registration/" , signupdetails)
      .then((res)=>{
        setLoading(false);
        navigate("/login");
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

export const loginotp =(loginotp, setLoading , navigate , setCheck)=>
async (dispatch)=>{
    await api.post("/auth/otp_verify/" , loginotp)
      .then((res)=>{
        setLoading(false);
        navigate("/resetpass");
          dispatch(
              {type:'LoginOtp' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'LoginOtp' ,
              payload :err}
              )
              setCheck(1);
      })
  }

export const resetpass =(resetpass, setLoading , navigate , setCheck)=>
async (dispatch)=>{
    await api.patch("/auth/enter_new_password/" , resetpass)
      .then((res)=>{
        setLoading(false);
        navigate("/login");
          dispatch(
              {type:'ResetPass' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
        setLoading(false);
          dispatch(
              {type:'ResetPass' ,
              payload :err}
              )
              setCheck(1);
      })
  }

