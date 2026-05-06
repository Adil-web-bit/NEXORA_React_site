/**
 * Features Page
 * Detailed overview of NEXORA's features and capabilities
 */

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedPage } from '../components/animated';
import { heroHeading, heroSubtitle, staggerContainerOnScroll, staggerItemOnScroll, iconBounce } from '../utils/animations';

export const FeaturesPage = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const features = t('features.features');

    return (
        <AnimatedPage>
            {/* Header Section */}
            <motion.section
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                style={{
                    padding: `${theme.spacing[16]} ${theme.spacing[6]}`,
                    backgroundColor: theme.colors.primary[50],
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
                        {t('features.title')}
                    </motion.h1>
                    <motion.p variants={heroSubtitle}
                        style={{
                            fontSize: theme.typography.fontSize.xl,
                            color: theme.colors.text.secondary,
                            lineHeight: theme.typography.lineHeight.relaxed,
                        }}
                    >
                        {t('features.description')}
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Features Grid */}
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
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: theme.spacing[8],
                        }}
                    >
                        {features.map((feature: any, index: any) => (
                            <motion.div
                                key={index}
                                variants={staggerItemOnScroll}
                                whileHover={{ y: -8, boxShadow: theme.shadows.lg }}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    boxShadow: theme.shadows.md,
                                    transition: `all ${theme.transitions.duration.base}`,
                                    cursor: 'pointer',
                                }}
                            >
                                <motion.div
                                    variants={iconBounce}
                                    style={{
                                        fontSize: theme.typography.fontSize['5xl'],
                                        marginBottom: theme.spacing[4],
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </AnimatedPage>
    );
};
