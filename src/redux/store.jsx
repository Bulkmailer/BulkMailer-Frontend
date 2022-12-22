import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducers/index.js";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
const persistConfig={
    key:'persist-root' , 
    storage
}
const persistedReducer = persistReducer(persistConfig , rootReducer);
 const store = createStore(persistedReducer ,applyMiddleware(reduxThunk), window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());
 const persistor = persistStore(store)
 export default store ;
 export {persistor};