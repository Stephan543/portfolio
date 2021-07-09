import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App /> 
        </Router>
    </React.StrictMode>, 
    document.getElementById('root')
);
