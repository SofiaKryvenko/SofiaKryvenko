import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

import auth from "./auth";
import firebaseReducer from "./firebase";
import loginSignupReducer from "./user";
import moviesDiscover from "./moviesDiscover";
import movieInfo from "./movieInfo";
import favourite from "./favourite";

const rootReducer =combineReducers({
    firebase:firebaseReducer,
    auth,
    user:loginSignupReducer,
    moviesDiscover,
    movieInfo,
    favourite,
    // routing: routerReducer
})

export default rootReducer;