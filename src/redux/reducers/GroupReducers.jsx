
const initial={
contactList:"" ,
response6:"" ,
mailList:"" ,
response:"" ,
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
            break;
            }
            case "Delete" :{
                console.log(action.payload);
            break;
                }
            case "AddContacts":{
                console.log(action.payload);
                return null
            }
            case "SendMail":{
                console.log(action.payload);
               return null ;}
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