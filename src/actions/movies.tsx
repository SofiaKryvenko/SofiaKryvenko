import * as ActionTypes from "../constants/actionTypes";

export const fetchMovies = (params) => ({
    type: ActionTypes.FETCH_MOVIES,
    payload:params
});

export const fetchMoviesSuccess = (movies) => ({
    type: ActionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies
});


export const fetchError = (error) => ({
    type: ActionTypes.FETCH_ERROR,
    payload: error
});

//movie page

export const fetchMovie = (movieId) => ({
    type: ActionTypes.FETCH_MOVIE,
    payload:movieId
});

export const fetchMovieSuccess = (movie) => ({
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    payload: movie
});

export const fetchCredits = (movieId) => ({
    type: ActionTypes.FETCH_CREDITS,
    payload:movieId
});

export const fetchCreditsSuccess = (credits) => ({
    type: ActionTypes.FETCH_CREDITS_SUCCESS,
    payload: credits
});

export const fetchMovieInfoFailure = (error) => ({
    type: ActionTypes.MOVIE_INFO_ERROR,
    payload: error
});

export const resetMovieData =()=>({
    type:ActionTypes.RESET_MOVIE_INFO
})







