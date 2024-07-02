// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
//   // Add any other configuration options here
// });

// export default store;



import { createStore } from "redux"
import rootReducer from "./reducers/index"

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) ;

export default store;
