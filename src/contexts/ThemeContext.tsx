/**
 * Theme Context and Provider
 * Manages theme state and provides theme switching functionality
 */

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { lightTheme, darkTheme, type ThemeMode } from '../config/theme';

// Use union type for theme to support both light and dark
type AppTheme = typeof lightTheme | typeof darkTheme;

interface ThemeContextType {
    theme: AppTheme;
    mode: ThemeMode;
    toggleTheme: () => void;
    setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // Get initial theme from localStorage or default to light
    const getInitialTheme = (): ThemeMode => {
        const savedTheme = localStorage.getItem('nexora-theme');
        return (savedTheme as ThemeMode) || 'light';
    };

    const [mode, setMode] = useState<ThemeMode>(getInitialTheme);
    const [theme, setTheme] = useState<AppTheme>(mode === 'dark' ? darkTheme : lightTheme);

    // Update theme when mode changes
    useEffect(() => {
        const newTheme = mode === 'dark' ? darkTheme : lightTheme;
        setTheme(newTheme);

        // Save to localStorage
        localStorage.setItem('nexora-theme', mode);

        // Apply theme to document root
        document.documentElement.style.backgroundColor = newTheme.colors.background.default;
        document.documentElement.style.color = newTheme.colors.text.primary;
        document.documentElement.style.transition = 'background-color 300ms ease, color 300ms ease';

        // Add data attribute for CSS targeting
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const setThemeMode = (newMode: ThemeMode) => {
        setMode(newMode);
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
