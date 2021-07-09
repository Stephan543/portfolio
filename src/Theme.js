import { red } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles} from '@material-ui/core/styles';
  
  
  export const theme = createMuiTheme({
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
    spacing: 24,
  });