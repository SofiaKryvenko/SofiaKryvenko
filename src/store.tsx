import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from "redux-devtools-extension";

// import { routerMiddleware } from 'react-router-redux';
// import createHistory from "history/createBrowserHistory";

import {firebaseApp$} from "./components/Firebase"
import rootReducer from './reducers'
import rootEpic from './epics'


// export const history = createHistory()
// const reactRouterMiddleware = routerMiddleware(history);

const epicMiddleware =  createEpicMiddleware({
    dependencies: { firebase: firebaseApp$ },
  })

  const middlewares =[
    // reactRouterMiddleware,
    epicMiddleware
  ]  

const store =createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)))

export default store

epicMiddleware.run(rootEpic);