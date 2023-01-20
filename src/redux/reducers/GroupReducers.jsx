
const initial={
contactList:"" ,
response6:""
};
const groupreducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Create" :{
        console.log(action.payload);
        localStorage.setItem("grpId" , action.payload.data.id);
        break;
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
            case "Groupinfo" :
                console.log(action.payload);
                return{
                    contactList:action.payload.data
                }
         default: return null;
    } 
 }
 export default groupreducer;