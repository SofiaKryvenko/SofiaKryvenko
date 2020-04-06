import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax';
import { combineLatest, concat, from, of } from 'rxjs'
import { catchError, flatMap, map, switchMap,tap,mapTo ,mergeMap} from 'rxjs/operators'
import queryString  from "query-string"


import {API_KEY,API_URL,PAGE} from "../constants/configsKey"
import { FETCH_MOVIES } from "../constants/actionTypes";
import { fetchMoviesSuccess, fetchMoviesFailure } from '../actions/movies';


export const fetchMoviesEpic = action$ =>
    action$.pipe(
        ofType(FETCH_MOVIES),
        mergeMap((action)=>
            ajax.getJSON(`${API_URL}/movie/popular${API_KEY}&${queryString.stringify(action.payload)}`).pipe(
            map((response)=>{
                console.log(response); 
                return fetchMoviesSuccess(response)}),
            catchError((error) => of(fetchMoviesFailure(error)))     
        ))
    )
