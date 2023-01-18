const initial={};
const mygroupreducer =(state=initial 
    , action)=>{
    switch(action.type){
     case "Show" :
        console.log(action.payload);
        console.log(action.payload.data);
        return {
        ...state ,
       initial:action.payload.data
        }
         default: return state;
    } 
 }
 export default mygroupreducer;