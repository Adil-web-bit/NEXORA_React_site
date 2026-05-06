/**
 * PieChartWidget Component
 * Reusable pie chart for distribution visualization
 */

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

interface PieChartWidgetProps {
    title: string;
    data: Array<{ name: string; value: number }>;
    colors: string[];
}

export const PieChartWidget = ({ title, data, colors }: PieChartWidgetProps) => {
    const { theme } = useTheme();
    return (
        <div
            style={{
                backgroundColor: theme.colors.background.paper,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing[6],
                border: `1px solid ${theme.colors.neutral[200]}`,
            }}
        >
            <h3
                style={{
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: theme.colors.text.primary,
                    marginBottom: theme.spacing[6],
                }}
            >
                {title}
            </h3>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: theme.colors.background.paper,
                            border: `1px solid ${theme.colors.neutral[200]}`,
                            borderRadius: theme.borderRadius.md,
                            boxShadow: theme.shadows.lg,
                        }}
                    />
                    <Legend
                        wrapperStyle={{
                            paddingTop: theme.spacing[4],
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
