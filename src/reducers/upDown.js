const initialState =0;
const changeTheNum =(state=initialState , action)=>{
switch(action.type){
    case "Increement" : return state+1;
    case "Decreement" :return state-1;
    default:return state;
}
}
export default changeTheNum;