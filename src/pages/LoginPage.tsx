/**
 * Login Page
 * Professional authentication page with form validation and loading states
 */

import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedPage } from '../components/animated';
import { Input, Checkbox } from '../components/forms';
import { heroHeading, heroSubtitle, staggerContainerOnScroll, staggerItemOnScroll, buttonGlow } from '../utils/animations';

export const LoginPage = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    // UI state
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Validation
    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Navigate to dashboard on success
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <AnimatedPage>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: theme.spacing[6],
                    background: `linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.background.default} 100%)`,
                }}
            >
                <motion.div
                    variants={staggerContainerOnScroll}
                    initial="hidden"
                    animate="visible"
                    style={{
                        width: '100%',
                        maxWidth: '480px',
                        padding: theme.spacing[10],
                        backgroundColor: theme.colors.background.default,
                        borderRadius: theme.borderRadius['2xl'],
                        boxShadow: theme.shadows.xl,
                        border: `1px solid ${theme.colors.neutral[200]}`,
                    }}
                >
                    {/* Header */}
                    <motion.div variants={staggerItemOnScroll} style={{ textAlign: 'center', marginBottom: theme.spacing[8] }}>
                        {/* Logo */}
                        <motion.div style={{ display: 'flex', justifyContent: 'center', marginBottom: theme.spacing[4] }}>
                            <img
                                src="/nexora-logo.png"
                                alt="NEXORA"
                                style={{
                                    height: '48px',
                                    width: 'auto',
                                }}
                            />
                        </motion.div>

                        <motion.h1
                            variants={heroHeading}
                            initial="hidden"
                            animate="visible"
                            style={{
                                fontSize: theme.typography.fontSize['3xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[2],
                            }}
                        >
                            {t('auth.login.title')}
                        </motion.h1>
                        <motion.p
                            variants={heroSubtitle}
                            initial="hidden"
                            animate="visible"
                            style={{
                                color: theme.colors.text.secondary,
                                fontSize: theme.typography.fontSize.base,
                            }}
                        >
                            {t('auth.login.subtitle')}
                        </motion.p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        variants={staggerContainerOnScroll}
                        initial="hidden"
                        animate="visible"
                        onSubmit={handleSubmit}
                    >
                        {/* Email Input */}
                        <motion.div variants={staggerItemOnScroll}>
                            <Input
                            id="email"
                            label={t('auth.login.email')}
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: '' });
                            }}
                            error={errors.email}
                            required
                            icon={
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            }
                            />
                        </motion.div>

                        {/* Password Input */}
                        <motion.div variants={staggerItemOnScroll} style={{ position: 'relative' }}>
                            <Input
                                id="password"
                                label={t('auth.login.password')}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => {
                                    setFormData({ ...formData, password: e.target.value });
                                    if (errors.password) setErrors({ ...errors, password: '' });
                                }}
                                error={errors.password}
                                required
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                            />

                            {/* Show/Hide Password Toggle */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: theme.spacing[4],
                                    top: '38px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: theme.colors.neutral[400],
                                    padding: theme.spacing[1],
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: `color ${theme.transitions.duration.base}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = theme.colors.primary[500];
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = theme.colors.neutral[400];
                                }}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                                            clipRule="evenodd"
                                        />
                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </motion.div>

                        {/* Remember Me & Forgot Password */}
                        <motion.div variants={staggerItemOnScroll}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: theme.spacing[6],
                            }}
                        >
                            <Checkbox
                                label={t('auth.login.rememberMe')}
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            />

                            <Link
                                to="/forgot-password"
                                style={{
                                    color: theme.colors.primary[500],
                                    textDecoration: 'none',
                                    fontSize: theme.typography.fontSize.sm,
                                    fontWeight: theme.typography.fontWeight.medium,
                                    transition: `color ${theme.transitions.duration.base}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = theme.colors.primary[600];
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = theme.colors.primary[500];
                                }}
                            >
                                {t('auth.login.forgotPassword')}
                            </Link>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            variants={staggerItemOnScroll}
                            type="submit"
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                                background: isLoading
                                    ? theme.colors.neutral[400]
                                    : `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                color: theme.colors.text.inverse,
                                border: 'none',
                                borderRadius: theme.borderRadius.lg,
                                fontSize: theme.typography.fontSize.base,
                                fontWeight: theme.typography.fontWeight.semibold,
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: `all ${theme.transitions.duration.base}`,
                                fontFamily: theme.typography.fontFamily.primary,
                                boxShadow: theme.shadows.md,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: theme.spacing[2],
                            }}
                            onMouseEnter={(e) => {
                                if (!isLoading) {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = theme.shadows.lg;
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = theme.shadows.md;
                            }}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        style={{ animation: 'spin 1s linear infinite' }}
                                    >
                                        <circle
                                            cx="10"
                                            cy="10"
                                            r="8"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeDasharray="40"
                                            strokeDashoffset="10"
                                            opacity="0.25"
                                        />
                                        <path
                                            d="M10 2a8 8 0 018 8"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    {t('auth.login.signingIn')}
                                </>
                            ) : (
                                t('auth.login.button')
                            )}
                        </motion.button>
                    </motion.form>

                    {/* Divider */}
                    <motion.div variants={staggerItemOnScroll}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing[4],
                            marginTop: theme.spacing[6],
                            marginBottom: theme.spacing[6],
                        }}
                    >
                        <div style={{ flex: 1, height: '1px', backgroundColor: theme.colors.neutral[200] }} />
                        <span style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                            {t('common.or')}
                        </span>
                        <div style={{ flex: 1, height: '1px', backgroundColor: theme.colors.neutral[200] }} />
                    </motion.div>

                    {/* Sign Up Link */}
                    <motion.div variants={staggerItemOnScroll}
                        style={{
                            textAlign: 'center',
                            color: theme.colors.text.secondary,
                            fontSize: theme.typography.fontSize.sm,
                        }}
                    >
                        {t('auth.login.noAccount')}{' '}
                        <Link
                            to="/signup"
                            style={{
                                color: theme.colors.primary[500],
                                textDecoration: 'none',
                                fontWeight: theme.typography.fontWeight.semibold,
                                transition: `color ${theme.transitions.duration.base}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = theme.colors.primary[600];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = theme.colors.primary[500];
                            }}
                        >
                            {t('auth.login.signupLink')}
                        </Link>
                    </motion.div>

                    {/* Spinner Animation */}
                    <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
                </motion.div>
            </motion.div>
        </AnimatedPage>
    );
};
