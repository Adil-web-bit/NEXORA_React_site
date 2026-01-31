/**
 * Theme Configuration with Light and Dark Modes
 * Centralized design tokens for colors, typography, spacing, and other design elements
 */

// Light theme colors
const lightColors = {
  primary: {
    50: '#e6f0ff',
    100: '#b3d1ff',
    200: '#80b3ff',
    300: '#4d94ff',
    400: '#1a75ff',
    500: '#0056e0',
    600: '#0044ad',
    700: '#00337a',
    800: '#002247',
    900: '#001114',
  },
  secondary: {
    50: '#f0e6ff',
    100: '#d1b3ff',
    200: '#b380ff',
    300: '#944dff',
    400: '#751aff',
    500: '#5c00e0',
    600: '#4900ad',
    700: '#37007a',
    800: '#240047',
    900: '#120014',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  success: {
    light: '#d1fae5',
    main: '#10b981',
    dark: '#065f46',
  },
  warning: {
    light: '#fef3c7',
    main: '#f59e0b',
    dark: '#92400e',
  },
  error: {
    light: '#fee2e2',
    main: '#ef4444',
    dark: '#991b1b',
  },
  info: {
    light: '#dbeafe',
    main: '#3b82f6',
    dark: '#1e40af',
  },
  background: {
    default: '#ffffff',
    paper: '#f9fafb',
    dark: '#111827',
  },
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    disabled: '#9ca3af',
    inverse: '#ffffff',
  },
};

// Dark theme colors
const darkColors = {
  primary: {
    50: '#001114',
    100: '#002247',
    200: '#00337a',
    300: '#0044ad',
    400: '#0056e0',
    500: '#1a75ff',
    600: '#4d94ff',
    700: '#80b3ff',
    800: '#b3d1ff',
    900: '#e6f0ff',
  },
  secondary: {
    50: '#120014',
    100: '#240047',
    200: '#37007a',
    300: '#4900ad',
    400: '#5c00e0',
    500: '#751aff',
    600: '#944dff',
    700: '#b380ff',
    800: '#d1b3ff',
    900: '#f0e6ff',
  },
  neutral: {
    50: '#111827',
    100: '#1f2937',
    200: '#374151',
    300: '#4b5563',
    400: '#6b7280',
    500: '#9ca3af',
    600: '#d1d5db',
    700: '#e5e7eb',
    800: '#f3f4f6',
    900: '#f9fafb',
  },
  success: {
    light: '#065f46',
    main: '#10b981',
    dark: '#d1fae5',
  },
  warning: {
    light: '#92400e',
    main: '#f59e0b',
    dark: '#fef3c7',
  },
  error: {
    light: '#991b1b',
    main: '#ef4444',
    dark: '#fee2e2',
  },
  info: {
    light: '#1e40af',
    main: '#3b82f6',
    dark: '#dbeafe',
  },
  background: {
    default: '#0f172a',
    paper: '#1e293b',
    dark: '#020617',
  },
  text: {
    primary: '#f1f5f9',
    secondary: '#94a3b8',
    disabled: '#64748b',
    inverse: '#0f172a',
  },
};

// Shared theme configuration
const sharedTheme = {
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      secondary: "'Poppins', sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  transitions: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    timing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

// Create light and dark themes
export const lightTheme = {
  ...sharedTheme,
  colors: lightColors,
  mode: 'light' as const,
};

export const darkTheme = {
  ...sharedTheme,
  colors: darkColors,
  mode: 'dark' as const,
};

// Default export for backward compatibility
export const theme = lightTheme;

export type Theme = typeof lightTheme;
export type ThemeMode = 'light' | 'dark';
