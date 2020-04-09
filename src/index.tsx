import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";



import theme from "./constants/theme"
import store,{history} from './store'

import App from "./pages/App"
import "./styles/styles.scss";


ReactDOM.render(<Provider store={store}>

    <ThemeProvider theme={theme}>
    <Router history={history}>
        <App/>
    </Router>
    </ThemeProvider>

</Provider>, document.getElementById('root'));