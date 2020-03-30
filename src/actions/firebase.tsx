import * as ActionTypes from "../constants/actionTypes"

export const startLoadingFirebase = () => ({ type: ActionTypes.START_LOADING_FIREBASE })

export const finishedLoadingFirebase = () => ({ type: ActionTypes.FINISHED_LOADING_FIREBASE })

export const errorLoadingFirebase = (error) => ({ type: ActionTypes.ERROR_LOADING_FIREBASE, payload: error })