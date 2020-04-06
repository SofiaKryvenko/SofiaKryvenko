import { combineReducers } from "redux";

import auth from "./auth";
import firebaseReducer from "./firebase";
import loginSignupReducer from "./user";
import movies from "./movie";

const rootReducer =combineReducers({
    firebase:firebaseReducer,
    auth,
    user:loginSignupReducer,
    movies
})

export default rootReducer;