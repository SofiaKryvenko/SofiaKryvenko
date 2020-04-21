import * as ActionTypes from "../constants/actionTypes";
import {toListTransform} from "../helpers"

const initialState ={
    list: [],
    loading:false,
    list_error:null
}

const favourite = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_LIST:
        case ActionTypes.GET_LIST:        
            return {
                loading:true
            }


        case ActionTypes.GET_LIST_SUCCESS:
            return {
                list:action.payload,
                loading:false}    
            
        
        // case ActionTypes.FETCH_CREDITS_SUCCESS:
        //     return{...state,
        //             loading:false,
        //             cast:action.payload }            
        


        case ActionTypes.LIST_ERROR:   
            return{
                loading:false,
                list_error:action.payload 
            }    


        default:
            return {...state}
    }
}

export default favourite;