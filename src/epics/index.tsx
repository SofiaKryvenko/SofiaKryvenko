import { combineEpics } from 'redux-observable';

import {startAuthListenerEpic} from "./auth";
import {startLoadingFirebaseEpic} from "./firebase";
import {userLoginEpic,userSignupEpic,userSignupUpdateEpic,userSignOutEpic} from "./user"
import {fetchMoviesEpic,fetchMovieEpic,fetchCreditsEpic} from "./movies"


const rootEpic = combineEpics(
    startAuthListenerEpic,
    startLoadingFirebaseEpic,
    userLoginEpic,
    userSignupEpic,
    userSignupUpdateEpic,
    userSignOutEpic,
    fetchMoviesEpic,
    fetchMovieEpic,
    fetchCreditsEpic
);
export default rootEpic;