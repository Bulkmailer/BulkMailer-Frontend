import api from '../apis.jsx';
import FormData from 'form-data';

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
  export const deletegroupdata =(deletegroupdata , navigate , setCheck) =>
async (dispatch)=>{
  var accesstoken =localStorage.getItem("accesstokenb")
const config ={
      Authorization:`Bearer ${accesstoken}`,
  }
    await api.delete("/dashboard/create_group/",{
      headers:config , 
      data : deletegroupdata 
    })
      .then((res)=>{
          navigate("/contacts");
          dispatch(
              {type:'Delete' ,
              payload :res}
              )
              setCheck(1);
          })
      .catch((err)=>{
          dispatch(
              {type:'Delete' ,
              payload :err}
              )
              setCheck(1);
      })
  }

  export const uploaddata =(uploaddata , setLoading , navigate ,setCheck) =>
  async (dispatch)=>{
    var accesstoken =localStorage.getItem("accesstokenb")
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
      await api.post("/dashboard/bulk_add/" , uploaddata , config)
        .then((res)=>{
            setLoading(false);
            dispatch(
                {type:'Upload' ,
                payload :res}
                )
                setCheck(1);
            })
        .catch((err)=>{
            setLoading(false);
            dispatch(
                {type:'Upload' ,
                payload :err}
                )
                setCheck(1);
        })
    }

    export const addcontactsdata =(addcontactsdata , setLoading , navigate ,setCheck) =>
    async (dispatch)=>{
      var accesstoken =localStorage.getItem("accesstokenb")
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
        await api.post("/dashboard/add_manually/" , addcontactsdata , config)
          .then((res)=>{
              setLoading(false);
              dispatch(
                  {type:'AddContacts' ,
                  payload :res}
                  )
                  setCheck(1);
                  navigate("/addcontacts")
              })
          .catch((err)=>{
              setLoading(false);
              dispatch(
                  {type:'AddContacts' ,
                  payload :err}
                  )
                  setCheck(1);
          })
      }
  

    export const showgroup =(setCheck) =>
    async (dispatch)=>{
      var accesstoken =localStorage.getItem("accesstokenb")
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
        await api.get("/dashboard/create_group/", config)
          .then((res)=>{
              // setLoading(false);
              dispatch(
                  {type:'Show' ,
                  payload :res}
                  )
                  setCheck(1);
              })
          .catch((err)=>{
              // setLoading(false);
              dispatch(
                  {type:'Show' ,
                  payload :err}
                  )
                  setCheck(1);
          })
      }

    export const groupinfo =(setCheck) =>
    async (dispatch)=>{
      var accesstoken =localStorage.getItem("accesstokenb")
      var group_id =localStorage.getItem("groupid")
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
        await api.get("/dashboard/view_group_data/?group_id="+group_id , config )
          .then((res)=>{
            console.log(res);
              dispatch(
                  {type:'Groupinfo' ,
                  payload :res}
                  )
                  setCheck(1);
              })
          .catch((err)=>{
              dispatch(
                  {type:'Groupinfo' ,
                  payload :err}
                  )
                  setCheck(1);
          })
      }
  