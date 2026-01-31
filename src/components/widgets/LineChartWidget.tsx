/**
 * LineChartWidget Component
 * Reusable line chart for trend visualization with fade-in animation
 */

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { fadeIn } from '../../utils/animations';

interface LineChartWidgetProps {
    title: string;
    data: Array<{ [key: string]: string | number }>;
    dataKeys: Array<{ key: string; color: string; name: string }>;
    xAxisKey: string;
}

export const LineChartWidget = ({ title, data, dataKeys, xAxisKey }: LineChartWidgetProps) => {
    const { theme } = useTheme();
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
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
                <LineChart data={data}>
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
                        <Line
                            key={item.key}
                            type="monotone"
                            dataKey={item.key}
                            stroke={item.color}
                            strokeWidth={2}
                            dot={{ fill: item.color, r: 4 }}
                            activeDot={{ r: 6 }}
                            name={item.name}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};
