/**
 * Home Page - Professional SaaS Landing Page
 * Comprehensive marketing page with hero, features, how it works, testimonials, and CTA sections
 * WITH IMPRESSIVE ANIMATIONS FOR CLIENT
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedPage } from '../components/animated';
import { TestimonialsCarousel } from '../components/widgets/TestimonialsCarousel';
import {
    heroHeading,
    heroSubtitle,
    heroCTA,
    counterVariants,
    staggerContainerOnScroll,
    staggerItemOnScroll,
    buttonGlow,
    iconBounce,
    shimmerVariants,
} from '../utils/animations';

export const HomePage = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    
    const features = t('home.features');
    const steps = t('home.howSteps');
    const testimonials = t('home.testimonials');
    const stats = [
        { value: '50K+', label: t('home.stats.users') },
        { value: '99.9%', label: t('home.stats.uptime') },
        { value: '150+', label: t('home.stats.countries') },
        { value: '4.9/5', label: t('home.stats.rating') },
    ];

    return (
        <AnimatedPage>
            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    padding: `${theme.spacing[20]} ${theme.spacing[6]} ${theme.spacing[24]}`,
                    background: `linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.secondary[50]} 50%, ${theme.colors.background.default} 100%)`,
                    overflow: 'hidden',
                }}
            >
                {/* Decorative Elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: '500px',
                        height: '500px',
                        background: `radial-gradient(circle, ${theme.colors.primary[200]}40 0%, transparent 70%)`,
                        borderRadius: theme.borderRadius.full,
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-5%',
                        width: '400px',
                        height: '400px',
                        background: `radial-gradient(circle, ${theme.colors.secondary[200]}40 0%, transparent 70%)`,
                        borderRadius: theme.borderRadius.full,
                        filter: 'blur(60px)',
                    }}
                />

                <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        {/* Badge */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: theme.spacing[2],
                                padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                                backgroundColor: theme.colors.background.default,
                                borderRadius: theme.borderRadius.full,
                                marginBottom: theme.spacing[6],
                                boxShadow: theme.shadows.md,
                                border: `1px solid ${theme.colors.neutral[200]}`,
                            }}
                        >
                            <span
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: theme.colors.success.main,
                                    borderRadius: theme.borderRadius.full,
                                    animation: 'pulse 2s infinite',
                                }}
                            />
                            <span
                                style={{
                                    fontSize: theme.typography.fontSize.sm,
                                    fontWeight: theme.typography.fontWeight.medium,
                                    color: theme.colors.text.secondary,
                                }}
                            >
                                {t('home.badge')}
                            </span>
                        </div>

                        {/* Headline */}
                        <motion.h1
                            variants={heroHeading}
                            initial="initial"
                            animate="animate"
                            style={{
                                fontSize: theme.typography.fontSize['6xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                lineHeight: theme.typography.lineHeight.tight,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[6],
                                fontFamily: theme.typography.fontFamily.secondary,
                            }}
                        >
                            {t('home.headline')}
                            {' '}
                            <span
                                style={{
                                    color: theme.colors.primary[500],
                                }}
                            >
                                NEXORA
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={heroSubtitle}
                            initial="initial"
                            animate="animate"
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                color: theme.colors.text.secondary,
                                lineHeight: theme.typography.lineHeight.relaxed,
                                marginBottom: theme.spacing[10],
                                maxWidth: '700px',
                                margin: `0 auto ${theme.spacing[10]}`,
                            }}
                        >
                            {t('home.subheading')}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={heroCTA}
                            initial="initial"
                            animate="animate"
                            style={{
                                display: 'flex',
                                gap: theme.spacing[4],
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginBottom: theme.spacing[12],
                            }}
                        >
                            <motion.div
                                {...buttonGlow}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/signup"
                                    style={{
                                        padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
                                        background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                        color: theme.colors.text.inverse,
                                        textDecoration: 'none',
                                        borderRadius: theme.borderRadius.xl,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        fontSize: theme.typography.fontSize.lg,
                                        boxShadow: theme.shadows.xl,
                                        transition: `all ${theme.transitions.duration.base}`,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: theme.spacing[2],
                                    }}
                                >
                                    {t('home.cta')}
                                    <span>→</span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/features"
                                    style={{
                                        padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
                                        backgroundColor: theme.colors.background.default,
                                        color: theme.colors.text.primary,
                                        textDecoration: 'none',
                                        borderRadius: theme.borderRadius.xl,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        fontSize: theme.typography.fontSize.lg,
                                        border: `2px solid ${theme.colors.neutral[300]}`,
                                        transition: `all ${theme.transitions.duration.base}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = theme.colors.primary[500];
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = theme.colors.neutral[300];
                                    }}
                                >
                                    {t('home.ctaDemo')}
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust Indicators */}
                        <p
                            style={{
                                fontSize: theme.typography.fontSize.sm,
                                color: theme.colors.text.secondary,
                                marginBottom: theme.spacing[4],
                            }}
                        >
                            {t('home.ctaNote')}
                        </p>
                    </div>

                    {/* Stats Bar */}
                    <motion.div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: theme.spacing[8],
                            marginTop: theme.spacing[16],
                            padding: theme.spacing[8],
                            backgroundColor: theme.colors.background.default,
                            borderRadius: theme.borderRadius['2xl'],
                            boxShadow: theme.shadows.xl,
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                style={{ textAlign: 'center' }}
                                variants={counterVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div
                                    style={{
                                        fontSize: theme.typography.fontSize['4xl'],
                                        fontWeight: theme.typography.fontWeight.bold,
                                        color: theme.colors.primary[600],
                                        marginBottom: theme.spacing[2],
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.sm,
                                        color: theme.colors.text.secondary,
                                        fontWeight: theme.typography.fontWeight.medium,
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Pulse Animation */}
                <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
            </section>

            {/* Features Section */}
            <section
                style={{
                    padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                    backgroundColor: theme.colors.background.default,
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: theme.spacing[16] }}>
                        <h2
                            style={{
                                fontSize: theme.typography.fontSize['4xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[4],
                                fontFamily: theme.typography.fontFamily.secondary,
                            }}
                        >
                            {t('home.featuresTitle')}
                        </h2>
                        <p
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                color: theme.colors.text.secondary,
                                maxWidth: '600px',
                                margin: '0 auto',
                                lineHeight: theme.typography.lineHeight.relaxed,
                            }}
                        >
                            {t('home.featuresSubtitle')}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <motion.div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: theme.spacing[8],
                        }}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainerOnScroll}
                    >
                        {features.map((feature: any, index: any) => (
                            <motion.div
                                key={index}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    border: `1px solid ${theme.colors.neutral[200]}`,
                                    transition: `all ${theme.transitions.duration.base}`,
                                    cursor: 'pointer',
                                }}
                                variants={staggerItemOnScroll}
                                whileHover={{
                                    y: -8,
                                    boxShadow: theme.shadows.xl,
                                    borderColor: theme.colors.primary[300],
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    style={{
                                        fontSize: theme.typography.fontSize['5xl'],
                                        marginBottom: theme.spacing[4],
                                        display: 'inline-block',
                                    }}
                                    animate={iconBounce.animate}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3
                                    style={{
                                        fontSize: theme.typography.fontSize.xl,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        color: theme.colors.text.primary,
                                        marginBottom: theme.spacing[3],
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        color: theme.colors.text.secondary,
                                        lineHeight: theme.typography.lineHeight.relaxed,
                                        fontSize: theme.typography.fontSize.base,
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How It Works Section */}
            <section
                style={{
                    padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                    background: `linear-gradient(180deg, ${theme.colors.background.default} 0%, ${theme.colors.primary[50]} 100%)`,
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: theme.spacing[16] }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            style={{
                                fontSize: theme.typography.fontSize['4xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[4],
                                fontFamily: theme.typography.fontFamily.secondary,
                            }}
                        >
                            {t('home.howTitle')}
                        </motion.h2>
                        <motion.p
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                color: theme.colors.text.secondary,
                                maxWidth: '600px',
                                margin: '0 auto',
                                lineHeight: theme.typography.lineHeight.relaxed,
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('home.howSubtitle')}
                        </motion.p>
                    </motion.div>

                    {/* Steps */}
                    <motion.div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: theme.spacing[8],
                        }}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainerOnScroll}
                    >
                        {steps.map((step: any, index: any) => (
                            <motion.div
                                key={index}
                                style={{
                                    position: 'relative',
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.default,
                                    borderRadius: theme.borderRadius['2xl'],
                                    boxShadow: theme.shadows.md,
                                }}
                                variants={staggerItemOnScroll}
                                whileHover={{
                                    y: -8,
                                    boxShadow: theme.shadows.xl,
                                    borderColor: theme.colors.primary[300],
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Step Number */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: theme.spacing[6],
                                        right: theme.spacing[6],
                                        fontSize: theme.typography.fontSize['5xl'],
                                        fontWeight: theme.typography.fontWeight.bold,
                                        color: theme.colors.primary[100],
                                        fontFamily: theme.typography.fontFamily.secondary,
                                    }}
                                    animate={iconBounce.animate}
                                >
                                    {step.number}
                                </motion.div>

                                <h3
                                    style={{
                                        fontSize: theme.typography.fontSize.xl,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        color: theme.colors.text.primary,
                                        marginBottom: theme.spacing[3],
                                        paddingRight: theme.spacing[12],
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        color: theme.colors.text.secondary,
                                        lineHeight: theme.typography.lineHeight.relaxed,
                                        fontSize: theme.typography.fontSize.base,
                                    }}
                                >
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                style={{
                    padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                    backgroundColor: theme.colors.background.default,
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: theme.spacing[16] }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            style={{
                                fontSize: theme.typography.fontSize['4xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[4],
                                fontFamily: theme.typography.fontFamily.secondary,
                            }}
                        >
                            {t('home.testimonialsTitle')}
                        </motion.h2>
                        <motion.p
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                color: theme.colors.text.secondary,
                                maxWidth: '600px',
                                margin: '0 auto',
                                lineHeight: theme.typography.lineHeight.relaxed,
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('home.testimonialsSubtitle')}
                        </motion.p>
                    </motion.div>

                    {/* Testimonials Carousel with Auto-Rotation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TestimonialsCarousel testimonials={testimonials} autoRotateInterval={5000} />
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section
                style={{
                    padding: `${theme.spacing[20]} ${theme.spacing[6]}`,
                    background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.1,
                        backgroundImage: `radial-gradient(circle, ${theme.colors.text.inverse} 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                    }}
                />

                <motion.div
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                    }}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <motion.h2
                        style={{
                            fontSize: theme.typography.fontSize['5xl'],
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.text.inverse,
                            marginBottom: theme.spacing[6],
                            fontFamily: theme.typography.fontFamily.secondary,
                        }}
                    >
                        {t('home.ctaFinal')}
                    </motion.h2>
                    <motion.p
                        style={{
                            fontSize: theme.typography.fontSize.xl,
                            color: theme.colors.primary[100],
                            marginBottom: theme.spacing[10],
                            lineHeight: theme.typography.lineHeight.relaxed,
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('home.ctaFinalSubtitle')}
                    </motion.p>

                    <motion.div
                        style={{
                            display: 'flex',
                            gap: theme.spacing[4],
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ position: 'relative' }}
                        >
                            <motion.div
                                variants={shimmerVariants}
                                animate="animate"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                                    backgroundSize: '200% center',
                                    borderRadius: theme.borderRadius.xl,
                                    pointerEvents: 'none',
                                }}
                            />
                            <Link
                                to="/signup"
                                style={{
                                    padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
                                    backgroundColor: theme.colors.background.default,
                                    color: theme.colors.primary[500],
                                    textDecoration: 'none',
                                    borderRadius: theme.borderRadius.xl,
                                    fontWeight: theme.typography.fontWeight.semibold,
                                    fontSize: theme.typography.fontSize.lg,
                                    boxShadow: theme.shadows.xl,
                                    transition: `all ${theme.transitions.duration.base}`,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: theme.spacing[2],
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {t('home.ctaButton')}
                                <span>→</span>
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ position: 'relative' }}
                        >
                            <motion.div
                                variants={shimmerVariants}
                                animate="animate"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                                    backgroundSize: '200% center',
                                    borderRadius: theme.borderRadius.xl,
                                    pointerEvents: 'none',
                                }}
                            />
                            <Link
                                to="/pricing"
                                style={{
                                    padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
                                    backgroundColor: 'transparent',
                                    color: theme.colors.text.inverse,
                                    textDecoration: 'none',
                                    borderRadius: theme.borderRadius.xl,
                                    fontWeight: theme.typography.fontWeight.semibold,
                                    fontSize: theme.typography.fontSize.lg,
                                    border: `2px solid ${theme.colors.text.inverse}`,
                                    transition: `all ${theme.transitions.duration.base}`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {t('nav.pricing')}
                            </Link>
                        </motion.div>
                    </motion.div>

                    <p
                        style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: theme.colors.primary[100],
                            marginTop: theme.spacing[8],
                        }}
                    >
                        {t('home.ctaNote')}
                    </p>
                </motion.div>
            </section>
        </AnimatedPage>
    );
};
