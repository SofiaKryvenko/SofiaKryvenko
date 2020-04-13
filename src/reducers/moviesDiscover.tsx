import * as ActionTypes from "../constants/actionTypes";


interface IMovieState{
    loading:boolean;
    hasMore:boolean
}

const initialState ={
    filters: {
        genresId: -1,
        keywords: ''
      },
    movies:[],
    loading:false,
    error:null,
    currentPage:1,
    totalCountPage:null,
}

const moviesDiscover = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES:
        case ActionTypes.FETCH_GENRES:   
            return {
                ...state,
                loading:true
            }

        //add split with state
        case ActionTypes.FETCH_MOVIES_SUCCESS:
            return{
                ...state,
                loading:false,
                movies:action.payload.results,
                hasMore:action.payload.page<action.payload.total_pages,
                currentPage:action.payload.page,
                totalCountPage:action.payload.total_pages
            } 


        
                
        case ActionTypes.FETCH_ERROR:   
            return{
                ...state,
                loading:false,
                error:action.payload 
            }    

        default:
            return {...state}
    }
}

export default moviesDiscover;