import React from 'react'
import Switch from '@material-ui/core/Switch';
import {FaMoon, FaSun} from 'react-icons/fa';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { CustomThemeContext } from './CustomThemeProvider';
import { useContext } from 'react';
import { IconButton } from '@material-ui/core';

const DarkModeToggle = () => {
    // const [theme, setTheme] = useState(true);
    // const appliedTheme = createMuiTheme(theme ? light : dark);
    const {currentTheme, setTheme} = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'dark')
    
    const handleModeChange = (event) => {
        const { checked } = event.target
        if (checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        
        <Switch 
        onChange={handleModeChange}
        checked={isDark}
        icon={<Brightness4Icon />}
        checkedIcon={<Brightness7Icon />}
        edge="end"
        size="medium"
        />


    )
}


// class DarkModeToggle extends Component {
//     constructor(props){
//         super(props);

//         if(JSON.parse(localStorage.getItem('DARK_MODE')) === true){ // Checks local storage for clients preference
//             document.body.classList.add('dark-mode');
//         }

//         this.state = { // sets state to dark mode
//             darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
//         }

//         this.handleModeChange = this.handleModeChange.bind(this); // Must bing in order for 'this' to work in callback
//     }

//     handleModeChange() {
//         if(!this.state.darkMode) { // Check for state congruency on dark mode
//             // document.body.classList.add('dark-mode');
//             theme.palette.type = 'dark';
//         } else {
//             // document.body.classList.remove('dark-mode');
//             theme.palette.type = 'light';
//         }

//         this.setState({
//             darkMode: (!this.state.darkMode)
//         });

//         localStorage.setItem('DARK_MODE', !this.state.darkMode); // Save on clients storage
//     }
    
//     render(){
        
//         return (
           
//             /* <button className="btn btn--small" onClick={this.handleModeChange}>Change Mode</button> */
//             <Switch 
//             onChange={this.handleModeChange}
//             icon={<FaMoon />}
//             checkedIcon={<FaSun />}
//             />
           
//         );
//     }
// }

export default DarkModeToggle;

// export const light = {
//     palette: {
//       type: "light"
//     }
//   };
//   export const dark = {
//     palette: {
//       type: "dark"
//     }
//   };
  