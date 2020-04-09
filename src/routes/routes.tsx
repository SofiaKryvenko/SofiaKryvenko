import {map} from "ramda";

import Landing from "../pages/Landing"
import Home from "../containers/Home"
import Movie from "../containers/Movie"

import WithAutorization from "../HOCs/WithAuthorization"

const SCREENS ={
    HOME:Home,
    MOVIE_INFO:Movie
}


const publicRoutes=()=>({
    "/movie/:id":SCREENS.MOVIE_INFO,
    "/":SCREENS.HOME,
    "/:page":SCREENS.HOME
})

// const privateRoutes =()=>{

//     const routes={
//         "/home/:page":SCREENS.HOME,
//         "/movie/:id":SCREENS.MOVIE_INFO
//     }

//     return map(WithAutorization(),{...routes})
// }

export default{
    ...publicRoutes(),
    // ...privateRoutes()
}