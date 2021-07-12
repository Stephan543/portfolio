import React from 'react'
import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Navbar from './components/Navbar/Navbar';
import { darkTheme, lightTheme } from './Theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme } from '@material-ui/core/styles';
import {theme} from './Theme.js'
import { CssBaseline, Paper } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import About from "./components/Pages/About"

const App = () => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');
  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //     [prefersDarkMode],
  // );

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar theme={theme}/>

        {/* <Route exact path="/" render={props => <About {...props}/>}/> */}
      </ThemeProvider> 
  );
}

export default App;
