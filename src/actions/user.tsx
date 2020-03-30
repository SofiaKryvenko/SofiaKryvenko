import * as ActionTypes from "../constants/actionTypes";



export const userLogin = (values) => ({ type: ActionTypes.USER_LOGIN_START, payload: values })
export const userLoginCompleted = () => ({ type: ActionTypes.USER_LOGIN_COMPLETED })

export const userSignup = (values) => ({ type: ActionTypes.USER_SIGNUP_START, payload: values })
export const userSignupUpdate = (values) => ({ type: ActionTypes.USER_SIGNUP_UPDATE, payload: values })
export const userSignupFinish = () => ({ type: ActionTypes.USER_SIGNUP_COMPLETED })

export const userLoginSignupError = (error) => ({ type: ActionTypes.USER_LOGIN_SIGNUP_ERROR, payload: error })

export const userLogOut =()=>({type:ActionTypes.USER_SIGN_OUT})
export const userLogOutSuccess =()=>({type:ActionTypes.USER_SIGN_OUT_SUCCESS})