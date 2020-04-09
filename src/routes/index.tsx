import React from "react"
import { Switch, Route } from "react-router-dom";




import routes from "./routes"
import NotFound from "../components/NotFound"


const AppRouter = () =>(
    <Switch>
    {Object.keys(routes).map((path, i) => (
       <Route path={path} key={i} exact  component={routes[path]} />
     ))} 
     <Route component={NotFound} /> 
    </Switch>
      )

export default AppRouter;
