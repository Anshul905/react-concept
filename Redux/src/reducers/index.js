import changeTheNumber from "./upDown";
import themeChange from "./themeChange";

import { combineReducers } from "redux" ;

const rootReducer = combineReducers({
    changeTheNumber,
    themeChange
    // ,other reducer
})

export default rootReducer;