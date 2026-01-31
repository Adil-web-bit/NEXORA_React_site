/**
 * Analytics Page
 * Dashboard analytics and reporting page
 */

import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';

export const AnalyticsPage = () => {
    const { theme } = useTheme();
    // Sample data for charts
    return (
        <AnimatedPage>
            <h1
                style={{
                    fontSize: theme.typography.fontSize['3xl'],
                    fontWeight: theme.typography.fontWeight.bold,
                    color: theme.colors.text.primary,
                    marginBottom: theme.spacing[2],
                }}
            >
                Analytics
            </h1>
            <p
                style={{
                    color: theme.colors.text.secondary,
                    fontSize: theme.typography.fontSize.lg,
                    marginBottom: theme.spacing[8],
                }}
            >
                View detailed analytics and insights
            </p>

            {/* Placeholder Content */}
            <div
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
                        d="M8 44a4 4 0 014-4h8a4 4 0 014 4v12a4 4 0 01-4 4h-8a4 4 0 01-4-4V44zM28 28a4 4 0 014-4h8a4 4 0 014 4v28a4 4 0 01-4 4h-8a4 4 0 01-4-4V28zM48 16a4 4 0 014-4h8a4 4 0 014 4v40a4 4 0 01-4 4h-8a4 4 0 01-4-4V16z"
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
                    Analytics Dashboard Coming Soon
                </h3>
                <p style={{ color: theme.colors.text.secondary }}>
                    Charts, graphs, and detailed analytics will be displayed here
                </p>
            </div>
        </AnimatedPage>
    );
};
