import * as ActionTypes from "../constants/actionTypes";

export const fetchMovies = (params) => ({
    type: ActionTypes.FETCH_MOVIES,
    payload:params
});

export const fetchMoviesSuccess = (movies) => ({
    type: ActionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies
});

export const fetchMoviesFailure = (error) => ({
    type: ActionTypes.FETCH_MOVIES_FAILURE,
    payload: error
});