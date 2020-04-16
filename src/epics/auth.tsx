import { ofType } from 'redux-observable'
import { combineLatest,of } from 'rxjs';
import {flatMap,mergeMap} from 'rxjs/operators'


import { START_AUTH_LISTENER } from "../constants/actionTypes";
import { setAuthenticated, setUnauthenticated } from '../actions/auth';
import {getFavouriteMovieListSuccess} from "../actions/favourite";
import { createObservableFromFirebase } from '../utils/createObservable';




export const startAuthListenerEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(START_AUTH_LISTENER),
    flatMap(() => {
      return combineLatest(firebase)
    }),
    flatMap(([app]) => {
      return createObservableFromFirebase(new Promise((res) => {
        app.auth().onAuthStateChanged((user) => {
            res(user)
        })
    })).pipe(
        flatMap((user)=>{
        if(user){
        const ref =app.database().ref(`users/${user.uid}/favoriteMovies`)
         return createObservableFromFirebase(new Promise((res)=>{ref.on('value', snapshot => {res(snapshot.val())})})).pipe(
           mergeMap(value=>of(getFavouriteMovieListSuccess(value),setAuthenticated(user)))
          )

        }else{
          return setUnauthenticated()
        }
      }))
    })
  )


