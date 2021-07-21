import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import CustomThemeProvider from './CustomThemeProvider';
import { CssBaseline } from '@material-ui/core'

ReactDOM.render(
    <CustomThemeProvider>
      <CssBaseline/>
        <Router>
            <App /> 
        </Router>
    </CustomThemeProvider>, 
    document.getElementById('root')
);
