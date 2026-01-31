/**
 * Navbar Component
 * Professional SaaS navigation bar with sticky behavior and responsive mobile menu
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../theme';

export const Navbar = () => {
    const { theme } = useTheme();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/features', label: 'Features' },
        { path: '/pricing', label: 'Pricing' },
    ];

    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: theme.zIndex.sticky,
                backgroundColor: isScrolled
                    ? 'rgba(255, 255, 255, 0.95)'
                    : theme.colors.background.default,
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: `1px solid ${isScrolled ? theme.colors.neutral[200] : 'transparent'}`,
                boxShadow: isScrolled ? theme.shadows.md : 'none',
                transition: `all ${theme.transitions.duration.base}`,
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                    }}
                >
                    <img
                        src="/nexora-logo.png"
                        alt="NEXORA"
                        style={{
                            height: '40px',
                            width: 'auto',
                        }}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div
                    style={{
                        display: 'flex',
                        gap: theme.spacing[8],
                        alignItems: 'center',
                    }}
                    className="desktop-nav"
                >
                    {/* Nav Links */}
                    <div style={{ display: 'flex', gap: theme.spacing[8] }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    color: isActive(link.path)
                                        ? theme.colors.primary[500]
                                        : theme.colors.text.secondary,
                                    textDecoration: 'none',
                                    fontWeight: theme.typography.fontWeight.medium,
                                    fontSize: theme.typography.fontSize.base,
                                    transition: `color ${theme.transitions.duration.base}`,
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = theme.colors.primary[500];
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive(link.path)) {
                                        e.currentTarget.style.color = theme.colors.text.secondary;
                                    }
                                }}
                            >
                                {link.label}
                                {isActive(link.path) && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            bottom: '-8px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: `linear-gradient(90deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                            borderRadius: theme.borderRadius.full,
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* CTA Buttons */}
                    <div style={{ display: 'flex', gap: theme.spacing[3] }}>
                        <Link
                            to="/login"
                            style={{
                                padding: `${theme.spacing[2]} ${theme.spacing[5]}`,
                                color: theme.colors.text.primary,
                                textDecoration: 'none',
                                fontWeight: theme.typography.fontWeight.medium,
                                fontSize: theme.typography.fontSize.base,
                                borderRadius: theme.borderRadius.lg,
                                transition: `all ${theme.transitions.duration.base}`,
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            style={{
                                padding: `${theme.spacing[2]} ${theme.spacing[5]}`,
                                background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                color: theme.colors.text.inverse,
                                textDecoration: 'none',
                                fontWeight: theme.typography.fontWeight.semibold,
                                fontSize: theme.typography.fontSize.base,
                                borderRadius: theme.borderRadius.lg,
                                transition: `all ${theme.transitions.duration.base}`,
                                boxShadow: theme.shadows.sm,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = theme.shadows.lg;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = theme.shadows.sm;
                            }}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        padding: theme.spacing[2],
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: theme.colors.text.primary,
                    }}
                    className="mobile-menu-button"
                    aria-label="Toggle menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    style={{
                        backgroundColor: theme.colors.background.default,
                        borderTop: `1px solid ${theme.colors.neutral[200]}`,
                        padding: theme.spacing[6],
                    }}
                    className="mobile-menu"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[4] }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    color: isActive(link.path)
                                        ? theme.colors.primary[500]
                                        : theme.colors.text.primary,
                                    textDecoration: 'none',
                                    fontWeight: theme.typography.fontWeight.medium,
                                    fontSize: theme.typography.fontSize.lg,
                                    padding: theme.spacing[3],
                                    borderRadius: theme.borderRadius.lg,
                                    backgroundColor: isActive(link.path)
                                        ? theme.colors.primary[50]
                                        : 'transparent',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: theme.spacing[3],
                                marginTop: theme.spacing[4],
                                paddingTop: theme.spacing[4],
                                borderTop: `1px solid ${theme.colors.neutral[200]}`,
                            }}
                        >
                            <Link
                                to="/login"
                                style={{
                                    padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                                    color: theme.colors.text.primary,
                                    textDecoration: 'none',
                                    fontWeight: theme.typography.fontWeight.medium,
                                    fontSize: theme.typography.fontSize.base,
                                    borderRadius: theme.borderRadius.lg,
                                    border: `2px solid ${theme.colors.neutral[300]}`,
                                    textAlign: 'center',
                                }}
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                style={{
                                    padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                                    background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                    color: theme.colors.text.inverse,
                                    textDecoration: 'none',
                                    fontWeight: theme.typography.fontWeight.semibold,
                                    fontSize: theme.typography.fontSize.base,
                                    borderRadius: theme.borderRadius.lg,
                                    textAlign: 'center',
                                }}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};
