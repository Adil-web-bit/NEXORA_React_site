/**
 * 404 Not Found Page
 * Displayed when user navigates to a non-existent route
 */

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';
import { Button } from '../components/forms/Button';
import { fadeIn, scaleIn } from '../utils/animations';

export const NotFoundPage = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <AnimatedPage>
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: theme.spacing[6],
                    backgroundColor: theme.colors.background.default,
                }}
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                    }}
                >
                    {/* 404 Icon */}
                    <motion.div
                        variants={scaleIn}
                        style={{
                            width: '120px',
                            height: '120px',
                            margin: '0 auto',
                            marginBottom: theme.spacing[8],
                            borderRadius: '50%',
                            backgroundColor: `${theme.colors.primary[500]}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={theme.colors.primary[500]}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                            <path d="M11 8v3" />
                            <circle cx="11" cy="14" r="0.5" fill={theme.colors.primary[500]} />
                        </svg>
                    </motion.div>

                    {/* 404 Number */}
                    <div
                        style={{
                            fontSize: theme.typography.fontSize['6xl'],
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.primary[500],
                            marginBottom: theme.spacing[4],
                            lineHeight: 1,
                        }}
                    >
                        404
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: theme.typography.fontSize['3xl'],
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.text.primary,
                            marginBottom: theme.spacing[4],
                        }}
                    >
                        Page Not Found
                    </h1>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: theme.typography.fontSize.lg,
                            color: theme.colors.text.secondary,
                            marginBottom: theme.spacing[10],
                            lineHeight: 1.6,
                        }}
                    >
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>

                    {/* Action Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            gap: theme.spacing[4],
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button onClick={() => navigate('/')} variant="primary">
                            Go to Home
                        </Button>
                        <Button onClick={() => navigate('/dashboard')} variant="outline">
                            Go to Dashboard
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};
