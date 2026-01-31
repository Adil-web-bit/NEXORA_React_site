/**
 * Features Page
 * Detailed overview of NEXORA's features and capabilities
 */

import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';

export const FeaturesPage = () => {
    const { theme } = useTheme();
    const features = [
        {
            icon: '⚡',
            title: 'Real-time Collaboration',
            description: 'Work together seamlessly with your team in real-time. See changes instantly and stay in sync.',
        },
        {
            icon: '🎯',
            title: 'Smart Automation',
            description: 'Automate repetitive tasks and workflows to save time and reduce human error.',
        },
        {
            icon: '📈',
            title: 'Advanced Analytics',
            description: 'Gain deep insights with customizable dashboards and comprehensive reporting tools.',
        },
        {
            icon: '🔗',
            title: 'Seamless Integrations',
            description: 'Connect with your favorite tools and services through our extensive integration library.',
        },
        {
            icon: '🛡️',
            title: 'Enterprise Security',
            description: 'Rest easy with SOC 2 compliance, end-to-end encryption, and advanced access controls.',
        },
        {
            icon: '📱',
            title: 'Mobile Ready',
            description: 'Access your workspace from anywhere with our responsive design and mobile apps.',
        },
    ];

    return (
        <AnimatedPage>
            {/* Header Section */}
            <section style={{
                padding: `${theme.spacing[16]} ${theme.spacing[6]}`,
                backgroundColor: theme.colors.primary[50],
                textAlign: 'center',
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: theme.typography.fontSize['5xl'],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[4],
                    }}>
                        Powerful Features for Modern Teams
                    </h1>
                    <p style={{
                        fontSize: theme.typography.fontSize.xl,
                        color: theme.colors.text.secondary,
                        lineHeight: theme.typography.lineHeight.relaxed,
                    }}>
                        Everything you need to streamline operations, boost productivity, and scale your business.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{
                padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                backgroundColor: theme.colors.background.default,
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: theme.spacing[8],
                    }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    boxShadow: theme.shadows.md,
                                    transition: `all ${theme.transitions.duration.base}`,
                                }}
                            >
                                <div style={{
                                    fontSize: theme.typography.fontSize['5xl'],
                                    marginBottom: theme.spacing[4],
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{
                                    fontSize: theme.typography.fontSize['2xl'],
                                    fontWeight: theme.typography.fontWeight.semibold,
                                    marginBottom: theme.spacing[3],
                                    color: theme.colors.text.primary,
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    color: theme.colors.text.secondary,
                                    lineHeight: theme.typography.lineHeight.relaxed,
                                    fontSize: theme.typography.fontSize.base,
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};
