const initialState = "white"

const themeChange = ( state = initialState , action ) => {
    // console.log(state);
    switch (action.type) {
        case "LIGHT" : return "#ffffff" ;
        case "DARK"  : return "#121212";
        case "FLIP"  : if(state=="#ffffff") return "#121212" ; return "#ffffff"
        default : return state ;
    }
}

export default themeChange ;