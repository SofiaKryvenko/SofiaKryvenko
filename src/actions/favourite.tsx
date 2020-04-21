import * as ActionTypes from "../constants/actionTypes";

export const addToList = (data)=>({
    type: ActionTypes.ADD_TO_LIST,
    payload: data
})

export const removeFromList  = (data)=>({
    type: ActionTypes.REMOVE_FROM_LIST,
    payload: data
})

export const successListFirebaseAction =()=>({
    type:ActionTypes.NULL
})

export const fechMovieList =()=>({
    type:ActionTypes.GET_LIST
})

export const getFavouriteMovieListSuccess=(list)=>({
    type:ActionTypes.GET_LIST_SUCCESS,
    payload:list
})