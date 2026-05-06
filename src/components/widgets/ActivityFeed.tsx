/**
 * ActivityFeed Component
 * Displays recent activity timeline with stagger animations
 */

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { EmptyState } from '../feedback';

interface Activity {
    id: string;
    user: string;
    action: string;
    timestamp: string;
    avatar?: string;
    type?: 'success' | 'warning' | 'info' | 'error';
}

interface ActivityFeedProps {
    title: string;
    activities: Activity[];
    maxItems?: number;
}

export const ActivityFeed = ({ title, activities, maxItems = 10 }: ActivityFeedProps) => {
    const { theme } = useTheme();
    const displayActivities = activities.slice(0, maxItems);

    const getTypeColor = (type?: string) => {
        switch (type) {
            case 'success':
                return theme.colors.success.main;
            case 'warning':
                return theme.colors.warning.main;
            case 'error':
                return theme.colors.error.main;
            default:
                return theme.colors.primary[500];
        }
    };

    return (
        <div
            style={{
                backgroundColor: theme.colors.background.paper,
                borderRadius: theme.borderRadius.xl,
                border: `1px solid ${theme.colors.neutral[200]}`,
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <div
                style={{
                    padding: theme.spacing[6],
                    borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                }}
            >
                <h3
                    style={{
                        fontSize: theme.typography.fontSize.lg,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: theme.colors.text.primary,
                    }}
                >
                    {title}
                </h3>
            </div>

            {/* Activity List */}
            <div style={{ padding: theme.spacing[6] }}>
                {displayActivities.length === 0 ? (
                    <EmptyState
                        icon={
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={theme.colors.neutral[400]}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        }
                        title="No recent activity"
                        description="Activity will appear here as it happens."
                    />
                ) : (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[4] }}
                    >
                        {displayActivities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                variants={staggerItem}
                                style={{
                                    display: 'flex',
                                    gap: theme.spacing[4],
                                    position: 'relative',
                                    paddingBottom: index < displayActivities.length - 1 ? theme.spacing[4] : 0,
                                }}
                            >
                                {/* Timeline Line */}
                                {index < displayActivities.length - 1 && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '20px',
                                            top: '48px',
                                            bottom: 0,
                                            width: '2px',
                                            backgroundColor: theme.colors.neutral[200],
                                        }}
                                    />
                                )}

                                {/* Avatar */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: theme.borderRadius.full,
                                        background: activity.avatar
                                            ? `url(${activity.avatar})`
                                            : `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: theme.colors.text.inverse,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        fontSize: theme.typography.fontSize.sm,
                                        flexShrink: 0,
                                        border: `2px solid ${theme.colors.background.paper}`,
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                >
                                    {!activity.avatar && activity.user.charAt(0).toUpperCase()}
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            justifyContent: 'space-between',
                                            gap: theme.spacing[2],
                                            marginBottom: theme.spacing[1],
                                        }}
                                    >
                                        <div style={{ flex: 1 }}>
                                            <span
                                                style={{
                                                    fontWeight: theme.typography.fontWeight.semibold,
                                                    color: theme.colors.text.primary,
                                                    fontSize: theme.typography.fontSize.sm,
                                                }}
                                            >
                                                {activity.user}
                                            </span>
                                            <span
                                                style={{
                                                    color: theme.colors.text.secondary,
                                                    fontSize: theme.typography.fontSize.sm,
                                                    marginLeft: theme.spacing[2],
                                                }}
                                            >
                                                {activity.action}
                                            </span>
                                        </div>

                                        {/* Type Indicator */}
                                        {activity.type && (
                                            <div
                                                style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: theme.borderRadius.full,
                                                    backgroundColor: getTypeColor(activity.type),
                                                    flexShrink: 0,
                                                    marginTop: theme.spacing[1],
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            fontSize: theme.typography.fontSize.xs,
                                            color: theme.colors.text.secondary,
                                        }}
                                    >
                                        {activity.timestamp}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* View All Link */}
            {activities.length > maxItems && (
                <div
                    style={{
                        padding: theme.spacing[4],
                        borderTop: `1px solid ${theme.colors.neutral[200]}`,
                        textAlign: 'center',
                    }}
                >
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: theme.colors.primary[500],
                            fontSize: theme.typography.fontSize.sm,
                            fontWeight: theme.typography.fontWeight.semibold,
                            cursor: 'pointer',
                            fontFamily: theme.typography.fontFamily.primary,
                        }}
                    >
                        View all activity
                    </button>
                </div>
            )}
        </div>
    );
};
