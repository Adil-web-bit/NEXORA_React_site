/**
 * BarChartWidget Component
 * Reusable bar chart for comparison visualization
 */

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

interface BarChartWidgetProps {
    title: string;
    data: Array<{ [key: string]: string | number }>;
    dataKeys: Array<{ key: string; color: string; name: string }>;
    xAxisKey: string;
}

export const BarChartWidget = ({ title, data, dataKeys, xAxisKey }: BarChartWidgetProps) => {
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
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.neutral[200]} />
                    <XAxis
                        dataKey={xAxisKey}
                        stroke={theme.colors.text.secondary}
                        style={{ fontSize: theme.typography.fontSize.sm }}
                    />
                    <YAxis
                        stroke={theme.colors.text.secondary}
                        style={{ fontSize: theme.typography.fontSize.sm }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: theme.colors.background.paper,
                            border: `1px solid ${theme.colors.neutral[200]}`,
                            borderRadius: theme.borderRadius.md,
                            boxShadow: theme.shadows.lg,
                        }}
                        labelStyle={{ color: theme.colors.text.primary, fontWeight: theme.typography.fontWeight.semibold }}
                    />
                    <Legend
                        wrapperStyle={{
                            paddingTop: theme.spacing[4],
                        }}
                    />
                    {dataKeys.map((item) => (
                        <Bar
                            key={item.key}
                            dataKey={item.key}
                            fill={item.color}
                            radius={[8, 8, 0, 0]}
                            name={item.name}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
