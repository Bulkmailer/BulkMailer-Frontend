import authreducer from "./authreducer";
import groupreducer from "./GroupReducers";
import mygroupreducer from "./MyGroupReducer";
import profilereducer from "./ProfileReducer";


import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    authreducer,
    groupreducer , 
    mygroupreducer ,
    profilereducer
});
export default rootReducer; 