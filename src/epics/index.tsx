import { combineEpics } from 'redux-observable';
import {startAuthListenerEpic} from "./auth";
import {startLoadingFirebaseEpic} from "./firebase";
import {userLoginEpic,userSignupEpic,userSignupUpdateEpic,userSignOutEpic} from "./user"


const rootEpic = combineEpics(
    startAuthListenerEpic,
    startLoadingFirebaseEpic,
    userLoginEpic,
    userSignupEpic,
    userSignupUpdateEpic,
    userSignOutEpic
);
export default rootEpic;