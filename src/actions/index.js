// export const incNum=()=>{
//     return{
//         type:"Increement",
//     }
// }
// export const decNum=()=>{
//     return{
//         type:"Decreement"
//     }
// }


export const Add_Todo =(data)=>{
    return{
        type:"Add_Todo" 
        , 
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const Remove_Todo =(id)=>{
    return{
        type:"Remove_Todo",
        id
    }
}