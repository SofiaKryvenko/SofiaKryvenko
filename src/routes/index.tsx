import React from "react"
import { Switch, Route } from "react-router-dom";




import routes from "./routes"
import NotFound from "../components/NotFound"

import Home from "../containers/Home"
import Movie from "../containers/Movie"
import Favourite from "../containers/Favourite"


const AppRouter = () =>(<Switch>
    {/* {Object.keys(routes).map((path, i) => (
       <Route path={path} key={i}    component={routes[path]} />
     ))} 
     <Route component={NotFound} />  */}
                <Route exact path="/" component={Home} />
                <Route path="/movie/:id" component={Movie} />
                <Route path="/favourite" component={Favourite} />

    </Switch>
      )

export default AppRouter;
