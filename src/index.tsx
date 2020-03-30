import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";


import { ThemeProvider } from "@material-ui/styles";



import theme from "./constants/theme"
import store from './store'

import App from "./pages/App"
import "./styles/styles.scss";


ReactDOM.render(<Provider store={store}>

    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>

</Provider>, document.getElementById('root'));