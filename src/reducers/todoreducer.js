const initialData ={
    list:[]
}
const todoReducer =(state=initialData , action)=>{
   switch(action.type){
    case "Add_Todo" :
        const { id, data } = action.payload;
        return{
            ...state,
            list:[
                ...state.list ,
                {
                    id:id,
                    data:data
                }
            ]
        }
        case "Remove_Todo" :
       const deletedlist= state.list.filter((e) => e.id != action.id )
        return{
            ...state,
         list:deletedlist
        }
        default: return state;
   } 
}
export default todoReducer;