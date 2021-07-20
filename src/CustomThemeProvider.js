import React, { useState }  from 'react';
import { ThemeProvider } from '@material-ui/styles';
import getTheme from './Theme.js';

export const CustomThemeContext = React.createContext(
    {
        currentTheme: 'light',
        setTheme: null,
    },
)

const CustomThemeProvider = (props) => {

    const { children } = props

    // Read Current theme from local storage or set to default dark
    const currentTheme = localStorage.getItem('appTheme') || 'light'

    // State to hold the theme type
    const [themeName, _setThemeName] = useState(currentTheme)

    // Retrieving the theme name
    const theme = getTheme(themeName)

    // Setting the local storage
    const setThemeName = (name) => {
        localStorage.setItem('appTheme', name)
        _setThemeName(name)
    }

    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName,
    }

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}

export default CustomThemeProvider