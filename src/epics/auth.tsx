import { ofType } from 'redux-observable'
import { combineLatest,of, concat, from} from 'rxjs';
import {flatMap,switchMap} from 'rxjs/operators'


import { START_AUTH_LISTENER } from "../constants/actionTypes";
import { setAuthenticated, setUnauthenticated } from '../actions/auth';
import {getFavouriteMovieListSuccess} from "../actions/favourite";
import { Observable  } from "rxjs";





export const startAuthListenerEpic = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(START_AUTH_LISTENER),
    flatMap(() => {
      return combineLatest(firebase)
    }),
    flatMap(([app]) => {
      const getUser=()=>new Promise((res) => {
        app.auth().onAuthStateChanged((user) => {
            res(user);
        });
    })
     return from(getUser()).pipe(
       flatMap(x=>{
         console.log(x)
        return new Observable((observer) => {
          app.database().ref(`users/${x.uid}/favoriteMovies`).on('value',snapshot=>{
            const resMovies = snapshot.val();
             const favoriteMovies = [];
  
              // eslint-disable-next-line
              for (let objKey in resMovies) {
                resMovies[objKey].key = objKey;
                favoriteMovies.push(resMovies[objKey]);
              }
            observer.next(favoriteMovies)})
         }
          ).pipe(
            switchMap((res)=>concat(of(setAuthenticated(x)),of(getFavouriteMovieListSuccess(res))))
          )
       })
     )
    })
  )
