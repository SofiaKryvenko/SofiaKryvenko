import {map} from "ramda";


import Home from "../containers/Home"
import Movie from "../containers/Movie"
import Favourite from "../containers/Favourite"
// import WithAutorization from "../HOCs/WithAuthorization"

const SCREENS ={
    HOME:Home,
    MOVIE_INFO:Movie,
    FAVOUTITE_MOVIES:Favourite
}


const publicRoutes=()=>({
    "/movie/:id":SCREENS.MOVIE_INFO,
    "/":SCREENS.HOME,
    "/:page":SCREENS.HOME,
    "/favourite":SCREENS.FAVOUTITE_MOVIES
})

// const privateRoutes =()=>{

//     const routes={
        
//     }

//     return map(WithAutorization(),{...routes})
// }

export default{
    ...publicRoutes()
    // ...privateRoutes()
}