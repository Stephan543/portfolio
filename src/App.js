import React from 'react'
import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Navbar from './components/Navbar/Navbar';
import { darkTheme, lightTheme } from './Theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const theme = createMuiTheme({
  root: {

  }
})

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
      [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
      </div> 
    </ThemeProvider> 
  );
}

export default App;
