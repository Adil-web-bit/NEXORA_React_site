/**
 * Button Component
 * Reusable button with variants and animations
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { hoverScale, rotate } from '../../utils/animations';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    type = 'button',
}: ButtonProps) => {
    const { theme } = useTheme();
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                    color: theme.colors.text.inverse,
                    border: 'none',
                };
            case 'secondary':
                return {
                    background: theme.colors.neutral[100],
                    color: theme.colors.text.primary,
                    border: `1px solid ${theme.colors.neutral[300]}`,
                };
            case 'outline':
                return {
                    background: 'transparent',
                    color: theme.colors.primary[500],
                    border: `2px solid ${theme.colors.primary[500]}`,
                };
            case 'danger':
                return {
                    background: theme.colors.error.main,
                    color: theme.colors.text.inverse,
                    border: 'none',
                };
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return {
                    padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                    fontSize: theme.typography.fontSize.sm,
                };
            case 'md':
                return {
                    padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                    fontSize: theme.typography.fontSize.base,
                };
            case 'lg':
                return {
                    padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
                    fontSize: theme.typography.fontSize.lg,
                };
        }
    };

    const variantStyles = getVariantStyles();
    const sizeStyles = getSizeStyles();

    return (
        <motion.button
            type={type}
            onClick={disabled || loading ? undefined : onClick}
            disabled={disabled || loading}
            {...hoverScale}
            whileTap={{ scale: 0.95 }}
            style={{
                ...variantStyles,
                ...sizeStyles,
                width: fullWidth ? '100%' : 'auto',
                borderRadius: theme.borderRadius.lg,
                fontWeight: theme.typography.fontWeight.semibold,
                fontFamily: theme.typography.fontFamily.primary,
                cursor: disabled || loading ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.6 : 1,
                transition: `all ${theme.transitions.duration.base}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: theme.spacing[2],
                boxShadow: variant === 'primary' || variant === 'danger' ? theme.shadows.md : 'none',
            }}
        >
            {loading && (
                <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    variants={rotate}
                    initial="initial"
                    animate="animate"
                >
                    <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="40"
                        strokeDashoffset="10"
                        opacity="0.25"
                    />
                    <path d="M10 2a8 8 0 018 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
            )}
            {children}
        </motion.button>
    );
};
