import { ofType } from 'redux-observable'
import {combineLatest, concat, from, of } from 'rxjs'
import { catchError, flatMap, map, switchMap,tap,mapTo } from 'rxjs/operators'

import * as ActionTypes from "../constants/actionTypes"
import {

  userLoginCompleted,
  userLoginSignupError,
  userSignupFinish,
  userSignupUpdate,
  userLogOutSuccess
} from '../actions/user'
import { createObservableFromFirebase } from '../utils/createObservable'
import { setUserUpdate } from '../actions/auth'



export const userLoginEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(ActionTypes.USER_LOGIN_START),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) =>
      createObservableFromFirebase(
        app.auth().signInWithEmailAndPassword(payload.email, payload.password)
      ).pipe(
        map(() => userLoginCompleted()),
        catchError((err) => of(userLoginSignupError(err)))
      )
    )
  )

export const userSignupEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(ActionTypes.USER_SIGNUP_START),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) => {
      return createObservableFromFirebase(
        app.auth().createUserWithEmailAndPassword(payload.email, payload.password))
      .pipe(
        map(({user}) => {
          const data = {
            name: payload.name,
            email: user.email,
            uid: user.uid};
         return userSignupUpdate(data)}),
        catchError((err) => of(userLoginSignupError(err)))
      )
    })
  )



  export const userSignupUpdateEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(ActionTypes.USER_SIGNUP_UPDATE),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) =>  createObservableFromFirebase(
        app.auth().currentUser.updateProfile({ displayName: payload.name })).pipe(
        switchMap(() => concat(of(userSignupFinish()), of(setUserUpdate(payload)))),
        catchError((err) => of(userLoginSignupError(err)))
      )
    )
  )

 export const userSignOutEpic = (action$,state$,{firebase})=>
    action$.pipe(
      ofType(ActionTypes.USER_SIGN_OUT),
      flatMap(() => {
        return combineLatest(firebase)
      }),
      flatMap(([app])=>{
        return createObservableFromFirebase(
          app.auth().signOut()
        ).pipe(
          mapTo(userLogOutSuccess())
        )
      })
    )


