const initialState = "white"

import { lightTheme , darkTheme } from "../../public/utility";

const themeChange = ( state = initialState , action ) => {
    console.log(state);
    switch (action.type) {
        case "LIGHT" : return lightTheme;
        case "DARK"  : return darkTheme;
        case "FLIP"  : if(state==lightTheme) return darkTheme ; return lightTheme
        default : return state ;
    }
}

export default themeChange ;