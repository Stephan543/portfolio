import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline } from '@material-ui/core'
import { Route, Switch, Redirect  } from 'react-router-dom';
import CustomThemeProvider from './CustomThemeProvider';

const App = () => {

  return (
      <Switch>
        <Redirect exact from="/" to="/about"></Redirect>
        <Route exact path="/:page?" render={props => <Navbar {...props}/>}/>
      </Switch>      
  );
}

export default App;
