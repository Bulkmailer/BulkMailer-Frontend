import api from '../apis.jsx';

export const creategroupdata =(creategroupdata , setLoading , navigate ,setCheck) =>
async (dispatch)=>{
  var accesstoken =localStorage.getItem("accesstokenb")
const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
    await api.post("/dashboard/create_group/" , creategroupdata , config)
      .then((res)=>{
          setLoading(false);
          navigate("/contacts");
          dispatch(
              {type:'Create' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
          setLoading(false);
          dispatch(
              {type:'Create' ,
              payload :err}
              )
              setCheck(1);
      })
  }
