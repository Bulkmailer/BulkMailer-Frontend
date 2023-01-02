
const initial={
    // response:["a" , "b"] 
};
const groupreducer =(state=initial 
    , action)=>{
    switch(action.type){
        case "Create" :{
        console.log(action.payload);
        // console.log(action.payload.response.data.msg);
        // return{
        // response:action.payload.response.data.msg
        // }
        }
         default: return null;
    } 
 }
 export default groupreducer;