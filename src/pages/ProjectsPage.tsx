/**
 * Projects Page
 * Project management and overview page
 */

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';
import { heroHeading, heroSubtitle } from '../utils/animations';

export const ProjectsPage = () => {
    const { theme } = useTheme();
    return (
        <AnimatedPage>
            <motion.h1
                variants={heroHeading}
                initial="hidden"
                animate="visible"
                style={{
                    fontSize: theme.typography.fontSize['3xl'],
                    fontWeight: theme.typography.fontWeight.bold,
                    color: theme.colors.text.primary,
                    marginBottom: theme.spacing[2],
                }}
            >
                Projects
            </motion.h1>
            <motion.p
                variants={heroSubtitle}
                initial="hidden"
                animate="visible"
                style={{
                    color: theme.colors.text.secondary,
                    fontSize: theme.typography.fontSize.lg,
                    marginBottom: theme.spacing[8],
                }}
            >
                Manage and track your projects
            </motion.p>

            {/* Placeholder Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    padding: theme.spacing[12],
                    backgroundColor: theme.colors.background.paper,
                    borderRadius: theme.borderRadius['2xl'],
                    border: `2px dashed ${theme.colors.neutral[300]}`,
                    textAlign: 'center',
                }}
            >
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    style={{ margin: '0 auto', marginBottom: theme.spacing[4], color: theme.colors.neutral[400] }}
                >
                    <path
                        d="M28 12a4 4 0 014-4h24a4 4 0 014 4v4a4 4 0 01-4 4H32a4 4 0 01-4-4v-4zM16 28a4 4 0 014-4h24a4 4 0 014 4v4a4 4 0 01-4 4H20a4 4 0 01-4-4v-4zM8 44a8 8 0 018-8h48a8 8 0 018 8v16a8 8 0 01-8 8H16a8 8 0 01-8-8V44z"
                        fill="currentColor"
                        opacity="0.2"
                    />
                </svg>
                <h3
                    style={{
                        fontSize: theme.typography.fontSize.xl,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[2],
                    }}
                >
                    Projects Dashboard Coming Soon
                </h3>
                <p style={{ color: theme.colors.text.secondary }}>
                    Project cards, timelines, and team collaboration tools will be displayed here
                </p>
            </motion.div>
        </AnimatedPage>
    );
};
