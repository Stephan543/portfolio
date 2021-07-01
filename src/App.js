import React from 'react'
import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Navbar from './components/Navbar/Navbar';
import { darkTheme, lightTheme } from './Theme';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
      </div> 
    </ThemeProvider>
    
  );
}

export default App;
