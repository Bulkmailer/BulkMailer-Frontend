// import { legacy_createStore as createStore} from 'redux'
// import rootReducer from "./reducers";
// const store =createStore(rootReducer , +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export default store;

import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducers";
 const store = createStore(rootReducer , +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export default store ;