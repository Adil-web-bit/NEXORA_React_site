/**
 * Checkbox Component
 * Reusable checkbox with custom styling, error states, and animations
 */

import { motion, AnimatePresence } from 'framer-motion';
import type { InputHTMLAttributes } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { scaleIn } from '../../utils/animations';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string | React.ReactNode;
    error?: string;
}

export const Checkbox = ({ label, error, ...props }: CheckboxProps) => {
    const { theme } = useTheme();
    return (
        <div style={{ marginBottom: theme.spacing[4] }}>
            <label
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    gap: theme.spacing[3],
                }}
            >
                {/* Custom Checkbox */}
                <div style={{ position: 'relative', flexShrink: 0, marginTop: '2px' }}>
                    <input
                        type="checkbox"
                        style={{
                            position: 'absolute',
                            opacity: 0,
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px',
                        }}
                        {...props}
                    />
                    <motion.div
                        animate={{
                            backgroundColor: props.checked ? theme.colors.primary[500] : theme.colors.background.default,
                            borderColor: error ? theme.colors.error.main : props.checked ? theme.colors.primary[500] : theme.colors.neutral[300],
                        }}
                        style={{
                            width: '20px',
                            height: '20px',
                            border: `2px solid`,
                            borderRadius: theme.borderRadius.base,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Checkmark */}
                        <AnimatePresence>
                            {props.checked && (
                                <motion.svg
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={scaleIn}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    style={{ color: theme.colors.text.inverse }}
                                >
                                    <path
                                        d="M10 3L4.5 8.5L2 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Label */}
                <span
                    style={{
                        fontSize: theme.typography.fontSize.sm,
                        color: error ? theme.colors.error.main : theme.colors.text.secondary,
                        lineHeight: theme.typography.lineHeight.relaxed,
                    }}
                >
                    {label}
                </span>
            </label>

            {/* Error Message */}
            {error && (
                <div
                    style={{
                        marginTop: theme.spacing[2],
                        marginLeft: theme.spacing[8],
                        fontSize: theme.typography.fontSize.sm,
                        color: theme.colors.error.main,
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing[1],
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7v-2h2v2zm0-3H7V4h2v5z" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};
