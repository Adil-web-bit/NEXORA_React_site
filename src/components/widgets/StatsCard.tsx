/**
 * StatsCard Component
 * Displays key metrics with icons and trend indicators
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { hoverLift } from '../../utils/animations';

interface StatsCardProps {
    title: string;
    value: string | number;
    change?: number;
    changeLabel?: string;
    icon: ReactNode;
    iconColor?: string;
    iconBgColor?: string;
}

export const StatsCard = ({
    title,
    value,
    change,
    changeLabel = 'vs last month',
    icon,
    iconColor,
    iconBgColor,
}: StatsCardProps) => {
    const { theme } = useTheme();
    const isPositive = change !== undefined && change >= 0;

    return (
        <motion.div
            {...hoverLift}
            style={{
                backgroundColor: theme.colors.background.paper,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing[6],
                border: `1px solid ${theme.colors.neutral[200]}`,
                transition: `all ${theme.transitions.duration.base}`,
                cursor: 'default',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme.shadows.md;
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {/* Content */}
                <div style={{ flex: 1 }}>
                    <p
                        style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: theme.colors.text.secondary,
                            marginBottom: theme.spacing[2],
                            fontWeight: theme.typography.fontWeight.medium,
                        }}
                    >
                        {title}
                    </p>
                    <h3
                        style={{
                            fontSize: theme.typography.fontSize['3xl'],
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.text.primary,
                            marginBottom: theme.spacing[3],
                        }}
                    >
                        {value}
                    </h3>

                    {/* Trend */}
                    {change !== undefined && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[2] }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: theme.spacing[1],
                                    padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
                                    borderRadius: theme.borderRadius.full,
                                    backgroundColor: isPositive
                                        ? theme.colors.success.light
                                        : theme.colors.error.light,
                                    color: isPositive ? theme.colors.success.dark : theme.colors.error.dark,
                                    fontSize: theme.typography.fontSize.sm,
                                    fontWeight: theme.typography.fontWeight.semibold,
                                }}
                            >
                                {isPositive ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M8 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M8 12.5a.5.5 0 01-.5-.5V4a.5.5 0 011 0v8a.5.5 0 01-.5.5z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M7.646 13.354a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                                {Math.abs(change)}%
                            </div>
                            <span
                                style={{
                                    fontSize: theme.typography.fontSize.xs,
                                    color: theme.colors.text.secondary,
                                }}
                            >
                                {changeLabel}
                            </span>
                        </div>
                    )}
                </div>

                {/* Icon */}
                <div
                    style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: theme.borderRadius.xl,
                        backgroundColor: iconBgColor,
                        color: iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    {icon}
                </div>
            </div>
        </motion.div>
    );
};
