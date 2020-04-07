import { combineReducers } from "redux";

import auth from "./auth";
import firebaseReducer from "./firebase";
import loginSignupReducer from "./user";
import moviesDiscover from "./moviesDiscover";
import movieInfo from "./movieInfo";

const rootReducer =combineReducers({
    firebase:firebaseReducer,
    auth,
    user:loginSignupReducer,
    moviesDiscover,
    movieInfo
})

export default rootReducer;