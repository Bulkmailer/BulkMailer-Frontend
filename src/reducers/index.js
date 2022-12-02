import changeTheNum from "./upDown";
import todoReducer from "./todoreducer";
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    // changeTheNum
    todoReducer
});
export default rootReducer; 