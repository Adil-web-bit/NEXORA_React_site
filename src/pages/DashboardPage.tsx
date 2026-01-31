/**
 * Dashboard Page
 * Main dashboard with stats cards, charts, tables, and activity feed
 */

import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';
import {
    StatsCard,
    LineChartWidget,
    BarChartWidget,
    PieChartWidget,
    DataTable,
    ActivityFeed,
} from '../components/widgets';

export const DashboardPage = () => {
    const { theme } = useTheme();
    // Sample data for stats cards
    const stats = [
        {
            title: 'Total Users',
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
            title: 'Active Projects',
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
            title: 'Revenue',
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
            title: 'Pending Tasks',
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
            <div style={{ marginBottom: theme.spacing[8] }}>
                <h1
                    style={{
                        fontSize: theme.typography.fontSize['3xl'],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[2],
                    }}
                >
                    Dashboard Overview
                </h1>
                <p
                    style={{
                        color: theme.colors.text.secondary,
                        fontSize: theme.typography.fontSize.lg,
                    }}
                >
                    Welcome back! Here's what's happening with your projects today.
                </p>
            </div>

            {/* Stats Cards Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: theme.spacing[6],
                    marginBottom: theme.spacing[8],
                }}
            >
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Charts Row */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: theme.spacing[6],
                    marginBottom: theme.spacing[8],
                }}
            >
                <LineChartWidget
                    title="Revenue & User Growth"
                    data={revenueData}
                    dataKeys={[
                        { key: 'revenue', color: theme.colors.primary[500], name: 'Revenue ($)' },
                        { key: 'users', color: theme.colors.secondary[500], name: 'Users' },
                    ]}
                    xAxisKey="month"
                />

                <BarChartWidget
                    title="Projects by Category"
                    data={projectData}
                    dataKeys={[
                        { key: 'completed', color: theme.colors.success.main, name: 'Completed' },
                        { key: 'inProgress', color: theme.colors.primary[500], name: 'In Progress' },
                    ]}
                    xAxisKey="category"
                />
            </div>

            {/* Pie Chart & Activity Feed Row */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: theme.spacing[6],
                    marginBottom: theme.spacing[8],
                }}
            >
                <PieChartWidget title="Task Distribution" data={taskDistribution} colors={pieColors} />

                <ActivityFeed title="Recent Activity" activities={activities} maxItems={6} />
            </div>

            {/* Recent Activity Table */}
            <DataTable
                title="Recent Project Activities"
                columns={activityColumns}
                data={recentActivities}
                pageSize={5}
            />
        </AnimatedPage>
    );
};
