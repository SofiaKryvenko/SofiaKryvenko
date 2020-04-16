import { ofType } from 'redux-observable'
import { combineLatest } from 'rxjs';
import {map, flatMap } from 'rxjs/operators'
import { authState } from 'rxfire/auth'

import { START_AUTH_LISTENER } from "../constants/actionTypes";
import { setAuthenticated, setUnauthenticated } from '../actions/auth';
import {getFavouriteMovieListSuccess} from "../actions/favourite";
import { createObservableFromFirebase } from '../utils/createObservable';
import {formatUserData} from "../helpers"
import { list } from 'rxfire/database';


export const startAuthListenerEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(START_AUTH_LISTENER),
    flatMap(() => {
      return combineLatest(firebase)
    }),
    flatMap(([app]) => {
      return authState(app.auth()).pipe(
        map((user) => {
          if (user) {

          // list(app.database().ref(`users/${user.uid}/favoriteMovies`)).subscribe(list => { console.log('a synchronized array!', list); });
            return setAuthenticated(user)        
          } else {
            return setUnauthenticated()
          }
        })
      )
    })
  )


  // /export const firebaseStateObserver = () => (dispatch, ) => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       firebase.database().ref(`users/${user.uid}/favoriteMovies`).on('value', res => {
  //         const resMovies = res.val();
  //         const favoriteMovies = [];
  
  //         // eslint-disable-next-line
  //         for (let objKey in resMovies) {
  //           resMovies[objKey].key = objKey;
  //           favoriteMovies.push(resMovies[objKey]);
  //         }
  
  //         const userData = formatUserData(user, favoriteMovies);
  //         dispatch({type: 'FILL_USER', payload: userData});
  //       });
  //     } else {
  //       dispatch({type: 'CLEAR_USER'});
  //     }
  //   });
  // };