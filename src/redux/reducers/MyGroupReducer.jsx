const initial={};
const init={};
const mygroupreducer =(state=initial 
    , action)=>{
    switch(action.type){
     case "Show" :
        console.log(action.payload);
        console.log(action.payload.data);
        console.log(action.payload.data.length);
        return {
        ...state ,
       initial:action.payload.data , 
       init:action.payload.data.length
        }
         default: return state;
    } 
 }
 export default mygroupreducer;