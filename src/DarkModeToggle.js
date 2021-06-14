import React, { Component } from 'react'
import './style.scss'

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

    render(){
        return (
            <button onClick={this.handleModeChange}>Change Mode</button>
        );
    }
}

export default DarkModeToggle