
const initial={
response:'',
status1:'' , 
status2:'' , 
status3:'' ,
};
const profilereducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Profileget" :{
        console.log(action.payload);
       return{
        response:action.payload.data[0],
       }
        }
        case "EditProfile" :{
            console.log(action.payload);
          return {
            status1:action.payload.request.status
          }
            }
            case "AddPass" :{
                console.log(action.payload);
                return {
                    status2:action.payload.request.status
                }
                }
                case "UpdatePass" :{
                    console.log(action.payload);
                    return {
                        status3:action.payload.request.status
                    }
                    }
                    
         default: return null;
    } 
 }
 export default profilereducer;