/**
 * Button Component
 * Reusable button component with variant support
 */

import { type CSSProperties, type ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md', // Changed from 'medium' in instruction to 'md' to match ButtonProps type
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button',
}: ButtonProps) => {
    const { theme } = useTheme();
    // Variant styles
    const variantStyles: Record<string, CSSProperties> = {
        primary: {
            backgroundColor: theme.colors.primary[500],
            color: theme.colors.text.inverse,
            border: 'none',
        },
        secondary: {
            backgroundColor: theme.colors.secondary[500],
            color: theme.colors.text.inverse,
            border: 'none',
        },
        outline: {
            backgroundColor: 'transparent',
            color: theme.colors.primary[500],
            border: `2px solid ${theme.colors.primary[500]}`,
        },
        ghost: {
            backgroundColor: 'transparent',
            color: theme.colors.text.primary,
            border: 'none',
        },
    };

    // Size styles
    const sizeStyles: Record<string, CSSProperties> = {
        sm: {
            padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
            fontSize: theme.typography.fontSize.sm,
        },
        md: {
            padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
            fontSize: theme.typography.fontSize.base,
        },
        lg: {
            padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
            fontSize: theme.typography.fontSize.lg,
        },
    };

    const baseStyles: CSSProperties = {
        fontFamily: theme.typography.fontFamily.primary,
        fontWeight: theme.typography.fontWeight.semibold,
        borderRadius: theme.borderRadius.lg,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: `all ${theme.transitions.duration.base}`,
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        display: 'inline-block',
        textAlign: 'center',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                ...baseStyles,
                ...variantStyles[variant],
                ...sizeStyles[size],
            }}
        >
            {children}
        </button>
    );
};
