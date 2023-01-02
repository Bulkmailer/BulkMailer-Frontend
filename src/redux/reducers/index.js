import authreducer from "./authreducer";
import groupreducer from "./GroupReducers";

import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    authreducer,
    groupreducer
});
export default rootReducer; 