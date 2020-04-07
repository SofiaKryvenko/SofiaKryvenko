import * as ActionTypes from "../constants/actionTypes";


interface IMovieState{
    loading:boolean;
    cast:{
        cast_id: number;
        character: string;
        credit_id: string;
        gender: number;
        id: number;
        name: string;
        order: number;
        profile_path: string;
    }[]
}

const initialState ={
    cast: [],
    loading:false,
    movieError:null,
    movie: null
}

const movieInfo = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIE:    
        case ActionTypes.FETCH_CREDITS:
            return {
                ...state,
                loading:true
            }


        case ActionTypes.FETCH_MOVIE_SUCCESS:
            return {...state,
                movie:action.payload,
                loading:false}    
            
        
        case ActionTypes.FETCH_CREDITS_SUCCESS:
            return{...state,
                    loading:false,
                    cast:action.payload }            
        


        case ActionTypes.MOVIE_INFO_ERROR:   
            return{
                ...state,
                loading:false,
                movieError:action.payload 
            }    

        case ActionTypes.RESET_MOVIE_INFO:
            return initialState;   

        default:
            return {...state}
    }
}

export default movieInfo;