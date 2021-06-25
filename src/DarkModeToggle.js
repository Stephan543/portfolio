import React, { Component } from 'react'
import './style.scss'
import Switch from '@material-ui/core/Switch';
import { WbSunnyIcon } from '@material-ui/icons/WbSunny';
import { createMuiTheme } from '@material-ui/core';

class DarkModeToggle extends Component {
    constructor(props){
        super(props);

        if(JSON.parse(localStorage.getItem('DARK_MODE')) === true){ // Checks local storage for clients preference
            document.body.classList.add('dark-mode');
        }

        this.state = { // sets state to dark mode
            darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
        }

        this.handleModeChange = this.handleModeChange.bind(this); // Must bing in order for 'this' to work in callback
    }

    handleModeChange() {
        if(!this.state.darkMode) { // Check for state congruency on dark mode
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        this.setState({
            darkMode: (!this.state.darkMode)
        });

        localStorage.setItem('DARK_MODE', !this.state.darkMode); // Save on clients storage
    
    }
    // const theme = createMuiTheme({
    //     props: {
    //       checkedIcon: {
    //           WbSunnyIcon
    //       }  
    //     }
    // })
    render(){
        return (
            // <button className="btn btn--small" onClick={this.handleModeChange}>Change Mode</button>
            <Switch 
            onChange={this.handleModeChange}
            // icon={this.Brightness4Icon}
            />
        );
    }
}

export default DarkModeToggle