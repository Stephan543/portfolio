import React from 'react'
import Switch from '@material-ui/core/Switch';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { CustomThemeContext } from './CustomThemeProvider';
import { useContext } from 'react';

const DarkModeToggle = () => {

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

export default DarkModeToggle;

