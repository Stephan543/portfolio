import { createMuiTheme } from '@material-ui/core/styles';
  
export const dark = createMuiTheme({
  palette: {
    type: 'dark',
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

export const light = createMuiTheme({
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
  return themes[theme]
}