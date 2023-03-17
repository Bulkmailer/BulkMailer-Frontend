
const initial={
contactList:"" ,
response6:"" ,
mailList:"" ,
response:"" ,
response2:"" ,
status2:"" ,
status3:"" , 
temp:"",
delete:"",
statusA:""  ,
statusB:"" ,
};
const groupreducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Create" :{
        console.log(action.payload); 
if(action.payload.data){
    localStorage.setItem("groupid" , action.payload.data.id);
    console.log(action.payload.response.data.id);
}
    return{
        response:action.payload.response.data.msg
    }
        }
        case "Upload" :{
            console.log(action.payload);
           return{
            status3:action.payload.request.status
           }
            }
            case "Delete" :{
                console.log(action.payload);
            break;
            }
                case "DeleteContact" :{
                    console.log(action.payload);
                break;
                    }
                    case "EditGroup" :{
                        console.log(action.payload);
                    break;
                        }
                    case "DeleteSchedule" :{
                        console.log(action.payload);
                    break;
                        }
            case "AddContacts":{
                console.log(action.payload);
                console.log(action.payload.status);
                if(action.payload.status==201){
                    return{
                        statusA:action.payload.status,
                    }  
                }
                return{
                    statusA:action.payload.response.status,
                    response2:action.payload.response.data.msg
                }
            }
            case "SendMail":{
                console.log(action.payload);
               return null ;
            }
            case "UploadFile":{
                console.log(action.payload);
               return null ;
            }
            case "Addtemp":{
                console.log(action.payload);
                console.log(action.payload.response.data.name);
               return {
                statusB:action.payload.response.data.name
               } ;
            }
            case "Templateview":{
                console.log(action.payload);
              return{
                temp:action.payload.data
              }
            }
            case "Campaign":{
                console.log(action.payload);
                console.log(action.payload.data.id);
                localStorage.setItem("campaign" , action.payload.data.id)
               return null ;
            }
               case "ScheduleMail":{
                console.log(action.payload);
               return null ;}
                case "MailHistory":{
                    console.log(action.payload);
                    return{
                        mailList:action.payload.data
                    }
                }
                    case "ScheduleHistory":{
                        console.log(action.payload);
                        return{
                            mailList:action.payload.data
                        }
            }
            case "Groupinfo" :
                console.log(action.payload);
                return{
                    contactList:action.payload.data
                }
         default: return null;
    } 
 }
 export default groupreducer;