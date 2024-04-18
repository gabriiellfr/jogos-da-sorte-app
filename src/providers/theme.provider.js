import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { toggleTheme } from '../store/slices';

import { lightTheme, darkTheme } from '../themes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme: handleToggleTheme }}
        >
            <StyledThemeProvider
                theme={theme === 'light' ? lightTheme : darkTheme}
            >
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
