import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";



import theme from "./constants/theme"
import store from './store'

import App from "./pages/App"
import "./styles/styles.scss";


ReactDOM.render(<Provider store={store}>

    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </ThemeProvider>

</Provider>, document.getElementById('root'));