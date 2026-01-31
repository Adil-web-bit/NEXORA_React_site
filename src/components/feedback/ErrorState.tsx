/**
 * ErrorState Component
 * Reusable component for displaying error states with retry action
 */

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../forms/Button';
import { fadeIn } from '../../utils/animations';

interface ErrorStateProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
    showHomeButton?: boolean;
}

export const ErrorState = ({
    title = 'Something went wrong',
    message = 'We encountered an error. Please try again.',
    onRetry,
    showHomeButton = false,
}: ErrorStateProps) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

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
                minHeight: '400px',
            }}
        >
            {/* Error Icon */}
            <div
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: `${theme.colors.error.main}15`,
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
                    stroke={theme.colors.error.main}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>

            {/* Title */}
            <h2
                style={{
                    fontSize: theme.typography.fontSize['2xl'],
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: theme.colors.text.primary,
                    marginBottom: theme.spacing[3],
                }}
            >
                {title}
            </h2>

            {/* Message */}
            <p
                style={{
                    fontSize: theme.typography.fontSize.base,
                    color: theme.colors.text.secondary,
                    marginBottom: theme.spacing[8],
                    maxWidth: '500px',
                }}
            >
                {message}
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', gap: theme.spacing[4] }}>
                {onRetry && (
                    <Button onClick={onRetry} variant="primary">
                        Try Again
                    </Button>
                )}
                {showHomeButton && (
                    <Button onClick={() => navigate('/')} variant="outline">
                        Go Home
                    </Button>
                )}
            </div>
        </motion.div>
    );
};
