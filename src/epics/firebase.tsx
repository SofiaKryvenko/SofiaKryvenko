import { ofType } from 'redux-observable'
import { tap, catchError, flatMap, switchMap } from 'rxjs/operators'
import { concat, of } from 'rxjs'

import {START_LOADING_FIREBASE} from "../constants/actionTypes"
import { errorLoadingFirebase, finishedLoadingFirebase } from '../actions/firebase'
import { FIREBASE_CONFIG, lazyLoadFireBase } from '../components/Firebase'

import { startAuthListener } from '../actions/auth'

export const startLoadingFirebaseEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(START_LOADING_FIREBASE),
    flatMap(() => lazyLoadFireBase(FIREBASE_CONFIG)),
    tap((app) => {
      firebase.next(app)
    }),
    switchMap(() => concat(of(finishedLoadingFirebase()), of(startAuthListener()))),
    catchError((error) => errorLoadingFirebase(error))
  )