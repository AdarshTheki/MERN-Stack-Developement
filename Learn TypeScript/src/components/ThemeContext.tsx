/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';

const theme = {
    primary: {
        main: '#3f51b5',
        text: '#fff',
    },
    secondary: {
        main: '#f50057',
        text: '#fff',
    },
};

type ThemeContextProviderProp = {
    children: React.ReactNode;
};

const ThemeContext = createContext(theme);

const ThemeProvider = ({ children }: ThemeContextProviderProp) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <p style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
                Primary Theme Context
            </p>
            <p style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>
                Secondary Theme Context
            </p>
        </div>
    );
};

// Wrapped to Theme Provider
export const ThemeBox = () => {
    return (
        <ThemeProvider>
            <Box />
        </ThemeProvider>
    );
};
