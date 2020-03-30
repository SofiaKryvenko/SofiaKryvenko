import { combineReducers } from "redux";

import auth from "./auth";
import firebaseReducer from "./firebase";
import loginSignupReducer from "./user";

const rootReducer =combineReducers({
    firebase:firebaseReducer,
    auth,
    user:loginSignupReducer,
})

export default rootReducer;