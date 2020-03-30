import * as ActionTypes from "../constants/actionTypes"

  
  const initialState = {
    submitting: false,
    error: null,
  }
  
  const loginSignupReducer = (state = initialState, action) => {
    switch (action.type) {

      case ActionTypes.USER_SIGNUP_START:
      case ActionTypes.USER_SIGNUP_UPDATE:
      case ActionTypes.USER_LOGIN_START:
        return {
          ...state,
          submitting: true,
        }
  
      case ActionTypes.USER_LOGIN_SIGNUP_ERROR:
        return { ...state, submitting: false, error: action.payload }
  
      case ActionTypes.USER_SIGNUP_COMPLETED:
      case ActionTypes.USER_LOGIN_COMPLETED:
        return {
          ...state,
          submitting: false,
          error: null,
        }

      default:
        return state
    }
  }
  
  export default loginSignupReducer
  