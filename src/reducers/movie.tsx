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
    movieError:null,
    hasMore:true,
    currentPage:1,
    totalCountPage:null
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES:
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
            
        case ActionTypes.FETCH_MOVIES_FAILURE:
            return{
                ...state,
                loading:false,
                movieError:action.payload 
            }    

        default:
            return {...state}
    }
}

export default movies;