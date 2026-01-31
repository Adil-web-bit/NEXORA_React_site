/**
 * Card Component
 * Reusable card container component
 */

import { type CSSProperties, type ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface CardProps {
    children: ReactNode;
    padding?: 'sm' | 'md' | 'lg';
    shadow?: 'sm' | 'md' | 'lg' | 'xl';
    hover?: boolean;
    className?: string;
}

export const Card = ({
    children,
    padding = 'md',
    shadow = 'md',
    hover = false,
}: CardProps) => {
    const { theme } = useTheme();

    const paddingStyles: Record<string, string> = {
        sm: theme.spacing[4],
        md: theme.spacing[6],
        lg: theme.spacing[8],
    };

    const shadowStyles: Record<string, string> = {
        sm: theme.shadows.sm,
        md: theme.shadows.md,
        lg: theme.shadows.lg,
        xl: theme.shadows.xl,
    };

    const baseStyles: CSSProperties = {
        backgroundColor: theme.colors.background.default,
        borderRadius: theme.borderRadius.xl,
        padding: paddingStyles[padding],
        boxShadow: shadowStyles[shadow],
        border: `1px solid ${theme.colors.neutral[200]}`,
        transition: `all ${theme.transitions.duration.base}`,
    };

    const hoverStyles: CSSProperties = hover
        ? {
            cursor: 'pointer',
        }
        : {};

    return (
        <div
            style={{
                ...baseStyles,
                ...hoverStyles,
            }}
        >
            {children}
        </div>
    );
};
