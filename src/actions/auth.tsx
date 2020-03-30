import * as ActionTypes from "../constants/actionTypes"

export const startAuthListener = () => ({ type: ActionTypes.START_AUTH_LISTENER })

export const setAuthenticated = (user) => ({ type: ActionTypes.SET_AUTHENTICATED, payload: user })

export const setUnauthenticated = () => ({ type: ActionTypes.SET_UNAUTHENTICATED })

export const setUserUpdate = (user) => ({ type: ActionTypes.SET_USER_UPDATE, payload: user })