import { useState } from "react";
import { useSelector } from "react-redux";


function ProfileComp(){
//  const arr=[];
    const arr= useSelector((state)=>state.profilereducer.response);

    return (<>
    <div id='profiledetails'>
    <pre>Name         : {arr.name}</pre>    
    <pre>Email        : {arr.email}</pre>    
    <pre>Phone No.    : {arr.mobile}</pre>    
    <pre>Gender       : {arr.gender}</pre>    
    <pre>Username     : {arr.user_name}</pre>    
    </div>
    </>)
}
export default ProfileComp;