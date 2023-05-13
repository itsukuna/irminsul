import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define your custom theme
const customTheme = createTheme({
    palette: {
        primary: {
            main: '#4a5562', // grey 600
        },
        secondary: {
            main: '#364150', // grey 700
        },
    },
});


// CustomTheme component
const CustomTheme = ({ children }) => {
    return (
        <ThemeProvider theme={customTheme}>
            {children}
        </ThemeProvider>
    );
};

export default CustomTheme;
