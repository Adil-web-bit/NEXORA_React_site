/**
 * EmptyState Component
 * Reusable component for displaying empty states with optional action
 */

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../forms/Button';
import { fadeIn } from '../../utils/animations';

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: theme.spacing[12],
                textAlign: 'center',
                minHeight: '300px',
            }}
        >
            {/* Icon */}
            {icon ? (
                <div style={{ marginBottom: theme.spacing[6] }}>{icon}</div>
            ) : (
                <div
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: theme.colors.neutral[100],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: theme.spacing[6],
                    }}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.colors.neutral[400]}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                    </svg>
                </div>
            )}

            {/* Title */}
            <h3
                style={{
                    fontSize: theme.typography.fontSize.xl,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: theme.colors.text.primary,
                    marginBottom: description ? theme.spacing[3] : theme.spacing[6],
                }}
            >
                {title}
            </h3>

            {/* Description */}
            {description && (
                <p
                    style={{
                        fontSize: theme.typography.fontSize.base,
                        color: theme.colors.text.secondary,
                        marginBottom: theme.spacing[6],
                        maxWidth: '400px',
                    }}
                >
                    {description}
                </p>
            )}

            {/* Action Button */}
            {action && (
                <Button onClick={action.onClick} variant="outline">
                    {action.label}
                </Button>
            )}
        </motion.div>
    );
};
