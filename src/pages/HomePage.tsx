/**
 * Home Page - Professional SaaS Landing Page
 * Comprehensive marketing page with hero, features, how it works, testimonials, and CTA sections
 */

import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';

export const HomePage = () => {
    const { theme } = useTheme();
    const features = [
        {
            icon: '⚡',
            title: 'Lightning Fast Performance',
            description: 'Experience blazing-fast load times and seamless interactions powered by cutting-edge technology.',
        },
        {
            icon: '🔒',
            title: 'Enterprise-Grade Security',
            description: 'Bank-level encryption, SOC 2 compliance, and advanced security features to protect your data.',
        },
        {
            icon: '📊',
            title: 'Advanced Analytics',
            description: 'Make data-driven decisions with real-time insights and comprehensive reporting dashboards.',
        },
        {
            icon: '🔗',
            title: 'Seamless Integrations',
            description: 'Connect with 100+ tools and services through our extensive integration ecosystem.',
        },
    ];

    const steps = [
        {
            number: '01',
            title: 'Sign Up in Seconds',
            description: 'Create your account with just an email. No credit card required for the 14-day trial.',
        },
        {
            number: '02',
            title: 'Customize Your Workspace',
            description: 'Set up your team, configure preferences, and integrate your favorite tools effortlessly.',
        },
        {
            number: '03',
            title: 'Start Collaborating',
            description: 'Invite team members and start working together in real-time with powerful collaboration features.',
        },
        {
            number: '04',
            title: 'Scale with Confidence',
            description: 'Grow your business without limits. Our platform scales seamlessly as your needs evolve.',
        },
    ];

    const testimonials = [
        {
            quote: "NEXORA transformed how our team collaborates. We've seen a 40% increase in productivity since switching.",
            author: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            avatar: 'SJ',
        },
        {
            quote: 'The best investment we made this year. The ROI was evident within the first month of implementation.',
            author: 'Michael Chen',
            role: 'CTO, DataFlow Systems',
            avatar: 'MC',
        },
        {
            quote: 'Intuitive, powerful, and reliable. NEXORA has become an indispensable part of our daily workflow.',
            author: 'Emily Rodriguez',
            role: 'Product Manager, CloudScale',
            avatar: 'ER',
        },
    ];

    const stats = [
        { value: '50K+', label: 'Active Users' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '150+', label: 'Countries' },
        { value: '4.9/5', label: 'User Rating' },
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
                                🎉 New: AI-powered insights now available
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            style={{
                                fontSize: theme.typography.fontSize['6xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                lineHeight: theme.typography.lineHeight.tight,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[6],
                                fontFamily: theme.typography.fontFamily.secondary,
                            }}
                        >
                            Transform Your Business with{' '}
                            <span
                                style={{
                                    color: theme.colors.primary[500],
                                }}
                            >
                                NEXORA
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                color: theme.colors.text.secondary,
                                lineHeight: theme.typography.lineHeight.relaxed,
                                marginBottom: theme.spacing[10],
                                maxWidth: '700px',
                                margin: `0 auto ${theme.spacing[10]}`,
                            }}
                        >
                            The all-in-one platform that empowers teams to collaborate, automate workflows, and scale
                            effortlessly. Join thousands of companies already transforming their operations.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            style={{
                                display: 'flex',
                                gap: theme.spacing[4],
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginBottom: theme.spacing[12],
                            }}
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
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = theme.shadows['2xl'];
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = theme.shadows.xl;
                                }}
                            >
                                Start Free Trial
                                <span>→</span>
                            </Link>
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
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = theme.colors.neutral[300];
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                Watch Demo
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <p
                            style={{
                                fontSize: theme.typography.fontSize.sm,
                                color: theme.colors.text.secondary,
                                marginBottom: theme.spacing[4],
                            }}
                        >
                            ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
                        </p>
                    </div>

                    {/* Stats Bar */}
                    <div
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
                    >
                        {stats.map((stat, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize['4xl'],
                                        fontWeight: theme.typography.fontWeight.bold,
                                        color: theme.colors.primary[600],
                                        marginBottom: theme.spacing[2],
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.sm,
                                        color: theme.colors.text.secondary,
                                        fontWeight: theme.typography.fontWeight.medium,
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
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
                            Everything You Need to Succeed
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
                            Powerful features designed to streamline your workflow and boost productivity
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: theme.spacing[8],
                        }}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    border: `1px solid ${theme.colors.neutral[200]}`,
                                    transition: `all ${theme.transitions.duration.base}`,
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = theme.shadows.xl;
                                    e.currentTarget.style.borderColor = theme.colors.primary[300];
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = theme.colors.neutral[200];
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize['5xl'],
                                        marginBottom: theme.spacing[4],
                                    }}
                                >
                                    {feature.icon}
                                </div>
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
                            </div>
                        ))}
                    </div>
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
                            How It Works
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
                            Get started in minutes with our simple, intuitive process
                        </p>
                    </div>

                    {/* Steps */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: theme.spacing[8],
                        }}
                    >
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'relative',
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.default,
                                    borderRadius: theme.borderRadius['2xl'],
                                    boxShadow: theme.shadows.md,
                                }}
                            >
                                {/* Step Number */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: theme.spacing[6],
                                        right: theme.spacing[6],
                                        fontSize: theme.typography.fontSize['5xl'],
                                        fontWeight: theme.typography.fontWeight.bold,
                                        color: theme.colors.primary[100],
                                        fontFamily: theme.typography.fontFamily.secondary,
                                    }}
                                >
                                    {step.number}
                                </div>

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
                            </div>
                        ))}
                    </div>
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
                            Loved by Teams Worldwide
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
                            See what our customers have to say about their experience
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: theme.spacing[8],
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: theme.spacing[8],
                                    backgroundColor: theme.colors.background.paper,
                                    borderRadius: theme.borderRadius['2xl'],
                                    border: `1px solid ${theme.colors.neutral[200]}`,
                                    transition: `all ${theme.transitions.duration.base}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = theme.colors.primary[300];
                                    e.currentTarget.style.boxShadow = theme.shadows.lg;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = theme.colors.neutral[200];
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Quote */}
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize['4xl'],
                                        color: theme.colors.primary[300],
                                        marginBottom: theme.spacing[4],
                                        lineHeight: 1,
                                    }}
                                >
                                    "
                                </div>
                                <p
                                    style={{
                                        fontSize: theme.typography.fontSize.lg,
                                        color: theme.colors.text.primary,
                                        lineHeight: theme.typography.lineHeight.relaxed,
                                        marginBottom: theme.spacing[6],
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {testimonial.quote}
                                </p>

                                {/* Author */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[3] }}>
                                    <div
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: theme.borderRadius.full,
                                            background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: theme.colors.text.inverse,
                                            fontWeight: theme.typography.fontWeight.semibold,
                                            fontSize: theme.typography.fontSize.base,
                                        }}
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontWeight: theme.typography.fontWeight.semibold,
                                                color: theme.colors.text.primary,
                                                fontSize: theme.typography.fontSize.base,
                                            }}
                                        >
                                            {testimonial.author}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: theme.typography.fontSize.sm,
                                                color: theme.colors.text.secondary,
                                            }}
                                        >
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

                <div
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <h2
                        style={{
                            fontSize: theme.typography.fontSize['5xl'],
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.text.inverse,
                            marginBottom: theme.spacing[6],
                            fontFamily: theme.typography.fontFamily.secondary,
                        }}
                    >
                        Ready to Transform Your Workflow?
                    </h2>
                    <p
                        style={{
                            fontSize: theme.typography.fontSize.xl,
                            color: theme.colors.primary[100],
                            marginBottom: theme.spacing[10],
                            lineHeight: theme.typography.lineHeight.relaxed,
                        }}
                    >
                        Join thousands of teams already using NEXORA to streamline operations, boost productivity,
                        and achieve their goals faster.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            gap: theme.spacing[4],
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
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
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = theme.shadows['2xl'];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = theme.shadows.xl;
                            }}
                        >
                            Start Your Free Trial
                            <span>→</span>
                        </Link>
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
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = theme.colors.text.inverse;
                                e.currentTarget.style.color = theme.colors.primary[500];
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = theme.colors.text.inverse;
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            View Pricing
                        </Link>
                    </div>

                    <p
                        style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: theme.colors.primary[100],
                            marginTop: theme.spacing[8],
                        }}
                    >
                        ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
                    </p>
                </div>
            </section>
        </AnimatedPage>
    );
};
