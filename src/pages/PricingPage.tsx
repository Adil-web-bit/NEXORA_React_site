/**
 * Pricing Page
 * Display pricing plans and subscription options
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedPage } from '../components/animated';
import { heroHeading, heroSubtitle, staggerContainerOnScroll, staggerItemOnScroll } from '../utils/animations';

export const PricingPage = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const plans = t('pricing.plans');

    return (
        <AnimatedPage>
            {/* Header Section */}
            <motion.section
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                style={{
                    padding: `${theme.spacing[16]} ${theme.spacing[6]}`,
                    backgroundColor: theme.colors.background.paper,
                    textAlign: 'center',
                }}
            >
                <motion.div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.h1 variants={heroHeading}
                        style={{
                            fontSize: theme.typography.fontSize['5xl'],
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.text.primary,
                            marginBottom: theme.spacing[4],
                        }}
                    >
                        {t('pricing.title')}
                    </motion.h1>
                    <motion.p variants={heroSubtitle}
                        style={{
                            fontSize: theme.typography.fontSize.xl,
                            color: theme.colors.text.secondary,
                            lineHeight: theme.typography.lineHeight.relaxed,
                        }}
                    >
                        {t('pricing.description')}
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Pricing Cards */}
            <motion.section
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                    backgroundColor: theme.colors.background.default,
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <motion.div
                        variants={staggerContainerOnScroll}
                        initial="hidden"
                        whileInView="visible"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: theme.spacing[8],
                            alignItems: 'stretch',
                        }}
                    >
                        {plans.map((plan: any, index: any) => (
                            <motion.div
                                key={index}
                                variants={staggerItemOnScroll}
                                whileHover={{ y: -8, boxShadow: theme.shadows.lg }}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: plan.highlighted ? theme.colors.primary[500] : theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    boxShadow: plan.highlighted ? theme.shadows.xl : theme.shadows.md,
                                    border: plan.highlighted ? 'none' : `1px solid ${theme.colors.neutral[200]}`,
                                    position: 'relative',
                                    transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                                    transition: `all ${theme.transitions.duration.base}`,
                                    cursor: 'pointer',
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
                                        {t('pricing.popular')}
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
                                    {plan.features.map((feature: any, featureIndex: any) => (
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
                                    {t('pricing.cta')}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </AnimatedPage>
    );
};
