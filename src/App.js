import React from 'react'
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import {theme} from './Theme.js'
import { CssBaseline } from '@material-ui/core'
import { Route, Switch, Redirect  } from 'react-router-dom';


const App = () => {

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {/* <Navbar theme={theme} />  */}
        <Switch>
          <Redirect exact from="/" to="/about"></Redirect>
          <Route exact path="/:page?" render={props => <Navbar {...props}/>}/>
        </Switch>
        
        
      
      </ThemeProvider> 
  );
}

export default App;
