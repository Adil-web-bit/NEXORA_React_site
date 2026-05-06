/**
 * Dashboard Page
 * Main dashboard with stats cards, charts, tables, and activity feed
 */

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedPage } from '../components/animated';
import {
    StatsCard,
    LineChartWidget,
    BarChartWidget,
    PieChartWidget,
    DataTable,
    ActivityFeed,
} from '../components/widgets';
import { heroHeading, heroSubtitle, staggerContainerOnScroll, staggerItemOnScroll } from '../utils/animations';

export const DashboardPage = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    // Sample data for stats cards
    const stats = [
        {
            title: t('dashboard.stats.totalUsers'),
            value: '12,543',
            change: 12.5,
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                    <path d="M14 14a5 5 0 100-10 5 5 0 000 10zM4 24a10 10 0 1120 0H4z" />
                </svg>
            ),
            iconColor: theme.colors.primary[500],
            iconBgColor: theme.colors.primary[50],
        },
        {
            title: t('dashboard.stats.activeProjects'),
            value: '248',
            change: 8.2,
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                    <path d="M11 5a1 1 0 011-1h4a1 1 0 011 1v1h3a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h3V5z" />
                </svg>
            ),
            iconColor: theme.colors.secondary[500],
            iconBgColor: theme.colors.secondary[50],
        },
        {
            title: t('dashboard.stats.revenue'),
            value: '$45,890',
            change: 15.3,
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                    <path d="M14 4a1 1 0 011 1v1h2a1 1 0 110 2h-2v2a3 3 0 01-3 3H9v2h3a5 5 0 005-5V8h2a1 1 0 100-2h-2V5a1 1 0 011-1zm-3 9a1 1 0 100-2H9a1 1 0 000 2h2zm0 4a1 1 0 100-2H9a1 1 0 000 2h2z" />
                </svg>
            ),
            iconColor: theme.colors.success.main,
            iconBgColor: theme.colors.success.light,
        },
        {
            title: t('dashboard.stats.pendingTasks'),
            value: '89',
            change: -3.1,
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M10 4a2 2 0 00-2 2v1H6a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a2 2 0 10-4 0v1h-4V6a2 2 0 00-2-2zm0 6a1 1 0 000 2h8a1 1 0 100-2h-8z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            iconColor: theme.colors.warning.main,
            iconBgColor: theme.colors.warning.light,
        },
    ];

    // Mock data for line chart
    const revenueData = [
        { month: 'Jan', revenue: 4200, users: 240 },
        { month: 'Feb', revenue: 5100, users: 310 },
        { month: 'Mar', revenue: 4800, users: 290 },
        { month: 'Apr', revenue: 6200, users: 380 },
        { month: 'May', revenue: 7100, users: 450 },
        { month: 'Jun', revenue: 6800, users: 420 },
    ];

    // Mock data for bar chart
    const projectData = [
        { category: 'Development', completed: 45, inProgress: 12 },
        { category: 'Design', completed: 32, inProgress: 8 },
        { category: 'Marketing', completed: 28, inProgress: 15 },
        { category: 'Sales', completed: 38, inProgress: 10 },
        { category: 'Support', completed: 25, inProgress: 6 },
    ];

    // Mock data for pie chart
    const taskDistribution = [
        { name: 'Completed', value: 156 },
        { name: 'In Progress', value: 89 },
        { name: 'Pending', value: 45 },
        { name: 'Blocked', value: 12 },
    ];

    const pieColors = [
        theme.colors.success.main,
        theme.colors.primary[500],
        theme.colors.warning.main,
        theme.colors.error.main,
    ];

    // Mock data for recent activity table
    const recentActivities = [
        { id: 1, user: 'John Doe', action: 'Created new project', project: 'Website Redesign', date: '2024-01-29', status: 'Active' },
        { id: 2, user: 'Jane Smith', action: 'Completed task', project: 'Mobile App', date: '2024-01-29', status: 'Completed' },
        { id: 3, user: 'Mike Johnson', action: 'Updated document', project: 'API Integration', date: '2024-01-28', status: 'Active' },
        { id: 4, user: 'Sarah Williams', action: 'Added comment', project: 'Dashboard UI', date: '2024-01-28', status: 'Active' },
        { id: 5, user: 'Tom Brown', action: 'Closed issue', project: 'Bug Fixes', date: '2024-01-27', status: 'Completed' },
        { id: 6, user: 'Emily Davis', action: 'Started sprint', project: 'Feature Development', date: '2024-01-27', status: 'Active' },
        { id: 7, user: 'Chris Wilson', action: 'Reviewed code', project: 'Backend API', date: '2024-01-26', status: 'Active' },
        { id: 8, user: 'Lisa Anderson', action: 'Deployed to staging', project: 'E-commerce', date: '2024-01-26', status: 'Completed' },
    ];

    const activityColumns = [
        { key: 'user', label: 'User', sortable: true },
        { key: 'action', label: 'Action', sortable: false },
        { key: 'project', label: 'Project', sortable: true },
        { key: 'date', label: 'Date', sortable: true },
        {
            key: 'status',
            label: 'Status',
            sortable: true,
            render: (value: string) => (
                <span
                    style={{
                        padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
                        borderRadius: theme.borderRadius.full,
                        fontSize: theme.typography.fontSize.xs,
                        fontWeight: theme.typography.fontWeight.semibold,
                        backgroundColor:
                            value === 'Completed' ? theme.colors.success.light : theme.colors.primary[50],
                        color: value === 'Completed' ? theme.colors.success.dark : theme.colors.primary[700],
                    }}
                >
                    {value}
                </span>
            ),
        },
    ];

    // Mock data for activity feed
    const activities = [
        {
            id: '1',
            user: 'John Doe',
            action: 'created a new project "Website Redesign"',
            timestamp: '2 minutes ago',
            type: 'success' as const,
        },
        {
            id: '2',
            user: 'Jane Smith',
            action: 'completed task "Update homepage design"',
            timestamp: '15 minutes ago',
            type: 'success' as const,
        },
        {
            id: '3',
            user: 'Mike Johnson',
            action: 'commented on "API Integration"',
            timestamp: '1 hour ago',
            type: 'info' as const,
        },
        {
            id: '4',
            user: 'Sarah Williams',
            action: 'uploaded new files to "Dashboard UI"',
            timestamp: '2 hours ago',
            type: 'info' as const,
        },
        {
            id: '5',
            user: 'Tom Brown',
            action: 'reported a bug in "Mobile App"',
            timestamp: '3 hours ago',
            type: 'warning' as const,
        },
        {
            id: '6',
            user: 'Emily Davis',
            action: 'started a new sprint',
            timestamp: '5 hours ago',
            type: 'success' as const,
        },
    ];

    return (
        <AnimatedPage>
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: theme.spacing[8] }}
            >
                <motion.h1 variants={heroHeading}
                    style={{
                        fontSize: theme.typography.fontSize['3xl'],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[2],
                    }}
                >
                    Dashboard Overview
                </motion.h1>
                <motion.p variants={heroSubtitle}
                    style={{
                        color: theme.colors.text.secondary,
                        fontSize: theme.typography.fontSize.lg,
                    }}
                >
                    Welcome back! Here's what's happening with your projects today.
                </motion.p>
            </motion.div>

            {/* Stats Cards Grid */}
            <motion.div
                variants={staggerContainerOnScroll}
                initial="hidden"
                whileInView="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: theme.spacing[6],
                    marginBottom: theme.spacing[8],
                }}
            >
                {stats.map((stat, index) => (
                    <motion.div key={index} variants={staggerItemOnScroll}>
                        <StatsCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Charts Row */}
            <motion.div
                variants={staggerContainerOnScroll}
                initial="hidden"
                whileInView="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: theme.spacing[6],
                    marginBottom: theme.spacing[8],
                }}
            >
                <motion.div variants={staggerItemOnScroll}>
                    <LineChartWidget
                        title={t('dashboard.charts.revenueGrowth')}
                        data={revenueData}
                        dataKeys={[
                            { key: 'revenue', color: theme.colors.primary[500], name: t('dashboard.charts.revenue') },
                            { key: 'users', color: theme.colors.secondary[500], name: t('dashboard.charts.users') },
                        ]}
                        xAxisKey="month"
                    />
                </motion.div>

                <motion.div variants={staggerItemOnScroll}>
                    <BarChartWidget
                        title={t('dashboard.charts.projectsByCategory')}
                        data={projectData}
                        dataKeys={[
                            { key: 'completed', color: theme.colors.success.main, name: t('dashboard.charts.completed') },
                            { key: 'inProgress', color: theme.colors.primary[500], name: t('dashboard.charts.inProgress') },
                        ]}
                        xAxisKey="category"
                    />
                </motion.div>
            </motion.div>

            {/* Pie Chart & Activity Feed Row */}
            <motion.div
                variants={staggerContainerOnScroll}
                initial="hidden"
                whileInView="visible"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: theme.spacing[6],
                    marginBottom: theme.spacing[8],
                }}
            >
                <motion.div variants={staggerItemOnScroll}>
                    <PieChartWidget title={t('dashboard.charts.taskDistribution')} data={taskDistribution} colors={pieColors} />
                </motion.div>

                <motion.div variants={staggerItemOnScroll}>
                    <ActivityFeed title={t('dashboard.recentActivity')} activities={activities} maxItems={6} />
                </motion.div>
            </motion.div>

            {/* Recent Activity Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
            <DataTable
                title={t('dashboard.recentProjectActivities')}
                columns={activityColumns}
                data={recentActivities}
                pageSize={5}
            />
            </motion.div>
        </AnimatedPage>
    );
};
