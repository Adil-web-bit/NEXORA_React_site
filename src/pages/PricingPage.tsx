/**
 * Pricing Page
 * Display pricing plans and subscription options
 */

import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';

export const PricingPage = () => {
    const { theme } = useTheme();
    const plans = [
        {
            name: 'Starter',
            price: '$29',
            period: '/month',
            description: 'Perfect for small teams getting started',
            features: [
                'Up to 5 team members',
                '10 GB storage',
                'Basic analytics',
                'Email support',
                'Core integrations',
            ],
            highlighted: false,
        },
        {
            name: 'Professional',
            price: '$99',
            period: '/month',
            description: 'For growing teams that need more power',
            features: [
                'Up to 25 team members',
                '100 GB storage',
                'Advanced analytics',
                'Priority support',
                'All integrations',
                'Custom workflows',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large organizations with specific needs',
            features: [
                'Unlimited team members',
                'Unlimited storage',
                'Enterprise analytics',
                '24/7 dedicated support',
                'Custom integrations',
                'Advanced security',
                'SLA guarantee',
            ],
            highlighted: false,
        },
    ];

    return (
        <AnimatedPage>
            {/* Header Section */}
            <section style={{
                padding: `${theme.spacing[16]} ${theme.spacing[6]}`,
                backgroundColor: theme.colors.background.paper,
                textAlign: 'center',
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: theme.typography.fontSize['5xl'],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[4],
                    }}>
                        Simple, Transparent Pricing
                    </h1>
                    <p style={{
                        fontSize: theme.typography.fontSize.xl,
                        color: theme.colors.text.secondary,
                        lineHeight: theme.typography.lineHeight.relaxed,
                    }}>
                        Choose the perfect plan for your team. All plans include a 14-day free trial.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section style={{
                padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                backgroundColor: theme.colors.background.default,
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: theme.spacing[8],
                        alignItems: 'stretch',
                    }}>
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: plan.highlighted ? theme.colors.primary[500] : theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    boxShadow: plan.highlighted ? theme.shadows.xl : theme.shadows.md,
                                    border: plan.highlighted ? 'none' : `1px solid ${theme.colors.neutral[200]}`,
                                    position: 'relative',
                                    transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                                    transition: `all ${theme.transitions.duration.base}`,
                                }}
                            >
                                {plan.highlighted && (
                                    <div style={{
                                        position: 'absolute',
                                        top: theme.spacing[4],
                                        right: theme.spacing[4],
                                        padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
                                        backgroundColor: theme.colors.secondary[500],
                                        color: theme.colors.text.inverse,
                                        borderRadius: theme.borderRadius.full,
                                        fontSize: theme.typography.fontSize.sm,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                    }}>
                                        Popular
                                    </div>
                                )}

                                <h3 style={{
                                    fontSize: theme.typography.fontSize['2xl'],
                                    fontWeight: theme.typography.fontWeight.bold,
                                    marginBottom: theme.spacing[2],
                                    color: plan.highlighted ? theme.colors.text.inverse : theme.colors.text.primary,
                                }}>
                                    {plan.name}
                                </h3>

                                <p style={{
                                    color: plan.highlighted ? theme.colors.primary[100] : theme.colors.text.secondary,
                                    marginBottom: theme.spacing[6],
                                }}>
                                    {plan.description}
                                </p>

                                <div style={{ marginBottom: theme.spacing[6] }}>
                                    <span style={{
                                        fontSize: theme.typography.fontSize['5xl'],
                                        fontWeight: theme.typography.fontWeight.bold,
                                        color: plan.highlighted ? theme.colors.text.inverse : theme.colors.text.primary,
                                    }}>
                                        {plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: theme.typography.fontSize.lg,
                                        color: plan.highlighted ? theme.colors.primary[100] : theme.colors.text.secondary,
                                    }}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    marginBottom: theme.spacing[8],
                                }}>
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            style={{
                                                padding: `${theme.spacing[2]} 0`,
                                                color: plan.highlighted ? theme.colors.primary[50] : theme.colors.text.secondary,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span style={{ marginRight: theme.spacing[2] }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/signup"
                                    style={{
                                        display: 'block',
                                        padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
                                        backgroundColor: plan.highlighted ? theme.colors.background.default : theme.colors.primary[500],
                                        color: plan.highlighted ? theme.colors.primary[500] : theme.colors.text.inverse,
                                        textDecoration: 'none',
                                        borderRadius: theme.borderRadius.lg,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        textAlign: 'center',
                                        transition: `all ${theme.transitions.duration.base}`,
                                    }}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};
