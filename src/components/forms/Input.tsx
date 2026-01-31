/**
 * Input Component
 * Reusable form input with validation states, error messages, icons, and animations
 */

import { useState, type InputHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { shake, fadeInDown } from '../../utils/animations';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helperText?: string;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Input = ({
    label,
    error,
    helperText,
    icon,
    fullWidth = true,
    type = 'text',
    ...props
}: InputProps) => {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={{ marginBottom: theme.spacing[5], width: fullWidth ? '100%' : 'auto' }}>
            {/* Label */}
            <label
                htmlFor={props.id}
                style={{
                    display: 'block',
                    marginBottom: theme.spacing[2],
                    color: error ? theme.colors.error.main : theme.colors.text.primary,
                    fontWeight: theme.typography.fontWeight.medium,
                    fontSize: theme.typography.fontSize.sm,
                    transition: `color ${theme.transitions.duration.base}`,
                }}
            >
                {label}
                {props.required && (
                    <span style={{ color: theme.colors.error.main, marginLeft: theme.spacing[1] }}>*</span>
                )}
            </label>

            {/* Input Container */}
            <motion.div
                style={{ position: 'relative' }}
                animate={error ? "animate" : "initial"}
                variants={shake}
            >
                {/* Icon */}
                {icon && (
                    <div
                        style={{
                            position: 'absolute',
                            left: theme.spacing[4],
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: error
                                ? theme.colors.error.main
                                : isFocused
                                    ? theme.colors.primary[500]
                                    : theme.colors.text.secondary,
                            transition: `color ${theme.transitions.duration.base}`,
                            pointerEvents: 'none',
                            zIndex: 1,
                        }}
                    >
                        {icon}
                    </div>
                )}

                {/* Input Field */}
                <input
                    type={type}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        width: '100%',
                        padding: icon
                            ? `${theme.spacing[3]} ${theme.spacing[4]} ${theme.spacing[3]} ${theme.spacing[12]}`
                            : `${theme.spacing[3]} ${theme.spacing[4]}`,
                        fontSize: theme.typography.fontSize.base,
                        color: theme.colors.text.primary,
                        backgroundColor: theme.colors.background.paper,
                        border: `2px solid ${error
                            ? theme.colors.error.main
                            : isFocused
                                ? theme.colors.primary[500]
                                : theme.colors.neutral[300]
                            }`,
                        borderRadius: theme.borderRadius.lg,
                        outline: 'none',
                        transition: `all ${theme.transitions.duration.base}`,
                        transform: isFocused ? 'scale(1.01)' : 'scale(1)',
                    }}
                    {...props}
                />
            </motion.div>

            {/* Helper Text or Error Message */}
            <AnimatePresence>
                {(error || helperText) && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeInDown}
                        style={{
                            marginTop: theme.spacing[2],
                            fontSize: theme.typography.fontSize.sm,
                            color: error ? theme.colors.error.main : theme.colors.text.secondary,
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing[1],
                        }}
                    >
                        {error && (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z" />
                            </svg>
                        )}
                        <span>{error || helperText}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
