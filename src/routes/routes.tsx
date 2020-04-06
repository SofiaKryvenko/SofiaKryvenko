import {map} from "ramda";

import Login from "../containers/Login"
import Register from "../containers/Register"
import Landing from "../pages/Landing"
import Home from "../containers/Home"
import Movie from "../pages/Movie"

import WithAutorization from "../HOCs/WithAuthorization"

const SCREENS ={
    START_PAGE:Landing,
    LOGIN:Login,
    REGISTER:Register,
    HOME:Home,
    MOVIE_INFO:Movie
}


const publicRoutes=()=>({
    "/login":SCREENS.LOGIN,
    "/register":SCREENS.REGISTER,
    "/":SCREENS.START_PAGE
})

const privateRoutes =()=>{

    const routes={
        "/home/:page?":SCREENS.HOME,
        "/movie/:id":SCREENS.MOVIE_INFO
    }

    return map(WithAutorization(),{...routes})
}

export default{
    ...publicRoutes(),
    ...privateRoutes()
}