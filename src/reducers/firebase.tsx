import * as ActionTypes from "../constants/actionTypes"


interface IFirebaseState{
    loading:boolean
    loaded:boolean;
    error:any
}
  
  const initialState:IFirebaseState = {
    loading: false,
    loaded: false,
    error: null,
  }
  
  const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.START_LOADING_FIREBASE:
        return {
          ...state,
          loading: true,
        }
  
      case ActionTypes.FINISHED_LOADING_FIREBASE:
        return {
          ...state,
          loading: false,
          loaded: true,
        }
      case ActionTypes.ERROR_LOADING_FIREBASE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        }
      default:
        return state
    }
  }
  
  export default firebaseReducer