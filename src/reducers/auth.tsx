import * as ActionTypes from "../constants/actionTypes"



// interface IAuthenticationState{
//     user:{}|null;
//     loading:boolean;
//     error:any
// }

// const initialState:IAuthenticationState ={
//     user:null,
//     loading:false,
//     error:null
// }
  
  
  const defaultState = {
    loggedIn: false,
    profileLoaded: false,
    user: null,
  }
  
  const auth = (state = defaultState, action) => {
    switch (action.type) {
      case ActionTypes.START_AUTH_LISTENER:
        return state

      case ActionTypes.SET_AUTHENTICATED:
        return {
          loggedIn: true,
          profileLoaded: true,
          user: { uid: action.payload.uid, displayName: action.payload.displayName,favourite:action.payload.favourite },
        }

      case ActionTypes.SET_UNAUTHENTICATED:
        return { ...defaultState, profileLoaded: true }

      case ActionTypes.SET_USER_UPDATE:
        return {
          ...state,
          user: { ...state.user, displayName: action.payload },
        }

      
      case ActionTypes.USER_SIGN_OUT_SUCCESS:
        case ActionTypes.USER_SIGN_OUT_FAIL:
        return defaultState;

     

      default:
        return state
    }
  }
  
  export default auth