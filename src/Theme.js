import { createMuiTheme } from '@material-ui/core/styles';
  
const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(73,63,252,1)',
    },
    secondary: {
      main: '#3acbf7',
    },
  },
  // spacing: 24,
});

const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      // Purple and green play nicely together.
      main: 'rgba(73,63,252,1)',
    },
    secondary: {
      main: '#3acbf7',
    },
  },
  // spacing: 24,
});

const themes = {
  light,
  dark,
}

export default function getTheme(theme){
  // console.log(themes[theme])
  return themes[theme]
}