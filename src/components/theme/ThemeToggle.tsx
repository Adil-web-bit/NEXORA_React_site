/**
 * ThemeToggle Component
 * Toggle button for switching between light and dark modes with smooth animations
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle = () => {
    const { mode, toggleTheme, theme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                backgroundColor: mode === 'dark' ? theme.colors.neutral[700] : theme.colors.neutral[200],
                borderColor: theme.colors.neutral[300],
            }}
            style={{
                position: 'relative',
                width: '56px',
                height: '28px',
                borderRadius: theme.borderRadius.full,
                border: `2px solid ${theme.colors.neutral[300]}`,
                backgroundColor: mode === 'dark' ? theme.colors.neutral[700] : theme.colors.neutral[200],
                cursor: 'pointer',
                transition: `all ${theme.transitions.duration.base}`,
                padding: 0,
                overflow: 'hidden',
            }}
        >
            {/* Toggle Circle */}
            <motion.span
                animate={{
                    left: mode === 'dark' ? '28px' : '2px',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                }}
                style={{
                    position: 'absolute',
                    top: '2px',
                    left: mode === 'dark' ? '28px' : '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: theme.colors.background.paper,
                    boxShadow: theme.shadows.sm,
                    transition: `left ${theme.transitions.duration.base}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <AnimatePresence mode="wait">
                    {mode === 'light' ? (
                        <motion.svg
                            key="sun"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill={theme.colors.warning.main}
                        >
                            <circle cx="6" cy="6" r="2.5" />
                            <path d="M6 0v1.5M6 10.5V12M12 6h-1.5M1.5 6H0M10.243 1.757l-1.06 1.06M2.817 9.183l-1.06 1.06M10.243 10.243l-1.06-1.06M2.817 2.817l-1.06-1.06" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="moon"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill={theme.colors.primary[400]}
                        >
                            <path d="M10.5 6.5a4.5 4.5 0 01-9 0 4.5 4.5 0 014.5-4.5c-.5 0-1 .1-1.5.3a4 4 0 000 7.4c.5.2 1 .3 1.5.3a4.5 4.5 0 004.5-3.5z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.span>
        </motion.button>
    );
};
