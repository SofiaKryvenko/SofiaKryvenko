import React from "react"
import { Switch, Route, Router } from "react-router-dom";




import routes from "./routes"
import NotFound from "../components/NotFound"
import {history} from "../store"


const AppRouter = () =>(<Router history={history}>
    <Switch>
    {Object.keys(routes).map((path, i) => (
       <Route exact path={path} key={i} component={routes[path]} />
     ))} 
     <Route component={NotFound} /> 
    </Switch>
        </Router>)

export default AppRouter;
