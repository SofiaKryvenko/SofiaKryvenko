import {map} from "ramda";

import Login from "../containers/Login"
import Register from "../containers/Register"
import Landing from "../pages/Landing"
import Home from "../pages/Home"

import WithAutorization from "../HOCs/WithAuthorization"

const SCREENS ={
    START_PAGE:Landing,
    LOGIN:Login,
    REGISTER:Register,
    HOME:Home
}


const publicRoutes=()=>({
    "/login":SCREENS.LOGIN,
    "/register":SCREENS.REGISTER,
    "/":SCREENS.START_PAGE
})

const privateRoutes =()=>{

    const routes={"/home":SCREENS.HOME}

    return map(WithAutorization(),{...routes})
}

export default{
    ...publicRoutes(),
    ...privateRoutes()
}