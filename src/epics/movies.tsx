import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax';
import { combineLatest, concat, from, of } from 'rxjs'
import { catchError, flatMap, map, switchMap,tap,mapTo ,mergeMap} from 'rxjs/operators'
import queryString  from "query-string"


import {API_KEY,API_URL} from "../constants/configsKey"
import { FETCH_MOVIES,FETCH_MOVIE,FETCH_CREDITS,ADD_TO_LIST,REMOVE_FROM_LIST } from "../constants/actionTypes";
import { fetchMoviesSuccess,
         fetchError,
         fetchMovieSuccess,
         fetchCreditsSuccess,
         fetchMovieInfoFailure
        } from '../actions/movies';
import {successListFirebaseAction} from "../actions/favourite" ;       
import { createObservableFromFirebase } from '../utils/createObservable';


export const fetchMoviesEpic = action$ =>
    action$.pipe(
        ofType(FETCH_MOVIES),
        mergeMap((action)=>
            ajax.getJSON(`${API_URL}/discover/movie${API_KEY}&${queryString.stringify(action.payload)}`).pipe(
            map((response)=>{
                return fetchMoviesSuccess(response)}),
            catchError((error) => of(fetchError(error)))     
        ))
    )

 export const fetchMovieEpic = action$ =>
 action$.pipe(
     ofType(FETCH_MOVIE),
     mergeMap((action)=>
         ajax.getJSON(`${API_URL}/movie/${action.payload}${API_KEY}`).pipe(
         map((response)=>{ 
             return fetchMovieSuccess(response)}),
         catchError((error) => of(fetchMovieInfoFailure(error)))     
     ))
 )


export const fetchCreditsEpic = action$ =>
action$.pipe(
    ofType(FETCH_CREDITS),
    mergeMap((action)=>
        ajax.getJSON(`${API_URL}/movie/${action.payload}/credits${API_KEY}`).pipe(
        map((response)=>{ 
            return fetchCreditsSuccess(response.cast)}),
        catchError((error) => of(fetchMovieInfoFailure(error)))     
    ))
) 


export const addMovieToFavorite = (action$, state$, { firebase }) =>
  action$.pipe(
    ofType(ADD_TO_LIST),
    flatMap((action) => combineLatest(firebase, from([action.payload]))),
    flatMap(([app, payload]) =>  ajax.getJSON(`${API_URL}/movie/${payload.movieId}${API_KEY}`).pipe(
        flatMap((response)=>{
            const ref = app.database().ref(`users/${payload.userId}/favoriteMovies/${payload.movieId}`)
                return createObservableFromFirebase(ref.set({...response}))
            })
        )
    ),
    map(()=>successListFirebaseAction()))



    export const removeMovieFromFavorite = (action$, state$, { firebase }) =>
    action$.pipe(
      ofType(REMOVE_FROM_LIST),
      flatMap((action) => combineLatest(firebase, from([action.payload]))),
      flatMap(([app, payload]) => createObservableFromFirebase(app.database().ref(`users/${payload.userId}/favoriteMovies/${payload.movieId}`).remove()).pipe(
          map(()=>successListFirebaseAction())
      )))
