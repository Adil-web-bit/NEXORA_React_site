/**
 * Tasks Page
 * Task management and tracking page
 */

import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';

export const TasksPage = () => {
    const { theme } = useTheme();
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
                Tasks
            </h1>
            <p
                style={{
                    color: theme.colors.text.secondary,
                    fontSize: theme.typography.fontSize.lg,
                    marginBottom: theme.spacing[8],
                }}
            >
                Organize and prioritize your tasks
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
                        fillRule="evenodd"
                        d="M24 8a4 4 0 00-4 4v4h-8a8 8 0 00-8 8v40a8 8 0 008 8h48a8 8 0 008-8V24a8 8 0 00-8-8h-8v-4a4 4 0 10-8 0v4H28v-4a4 4 0 00-4-4zm0 20a4 4 0 000 8h32a4 4 0 100-8H24z"
                        clipRule="evenodd"
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
                    Task Management Coming Soon
                </h3>
                <p style={{ color: theme.colors.text.secondary }}>
                    Task lists, kanban boards, and productivity tools will be displayed here
                </p>
            </div>
        </AnimatedPage>
    );
};
