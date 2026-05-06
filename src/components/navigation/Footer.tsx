/**
 * Footer Component
 * Professional SaaS footer with organized sections and social links
 */

import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export const Footer = () => {
    const { theme } = useTheme();
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Product',
            links: [
                { label: 'Features', path: '/features' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Security', path: '#' },
                { label: 'Roadmap', path: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', path: '#' },
                { label: 'Blog', path: '#' },
                { label: 'Careers', path: '#' },
                { label: 'Contact', path: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', path: '#' },
                { label: 'Help Center', path: '#' },
                { label: 'API Reference', path: '#' },
                { label: 'Community', path: '#' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', path: '#' },
                { label: 'Terms of Service', path: '#' },
                { label: 'Cookie Policy', path: '#' },
                { label: 'GDPR', path: '#' },
            ],
        },
    ];

    const socialLinks = [
        {
            name: 'Twitter',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
            ),
            url: '#',
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            url: '#',
        },
        {
            name: 'GitHub',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
            ),
            url: '#',
        },
        {
            name: 'YouTube',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
            ),
            url: '#',
        },
    ];

    return (
        <footer
            style={{
                backgroundColor: theme.colors.neutral[900],
                color: theme.colors.text.inverse,
                marginTop: theme.spacing[20],
            }}
        >
            {/* Main Footer Content */}
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: `${theme.spacing[16]} ${theme.spacing[6]} ${theme.spacing[12]}`,
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: theme.spacing[8],
                        marginBottom: theme.spacing[12],
                    }}
                >
                    {/* Brand Section */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <img
                            src="/nexora-logo.png"
                            alt="NEXORA"
                            style={{
                                height: '36px',
                                width: 'auto',
                                marginBottom: theme.spacing[4],
                            }}
                        />
                        <p
                            style={{
                                color: theme.colors.neutral[400],
                                lineHeight: theme.typography.lineHeight.relaxed,
                                fontSize: theme.typography.fontSize.sm,
                                marginBottom: theme.spacing[6],
                            }}
                        >
                            Enterprise-grade SaaS platform empowering modern businesses to scale and succeed.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: theme.spacing[4] }}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    aria-label={social.name}
                                    style={{
                                        color: theme.colors.neutral[400],
                                        transition: `color ${theme.transitions.duration.base}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = theme.colors.primary[400];
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = theme.colors.neutral[400];
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4
                                style={{
                                    fontSize: theme.typography.fontSize.sm,
                                    fontWeight: theme.typography.fontWeight.semibold,
                                    color: theme.colors.text.inverse,
                                    marginBottom: theme.spacing[4],
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {section.title}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {section.links.map((link) => (
                                    <li key={link.label} style={{ marginBottom: theme.spacing[3] }}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                color: theme.colors.neutral[400],
                                                textDecoration: 'none',
                                                fontSize: theme.typography.fontSize.sm,
                                                transition: `color ${theme.transitions.duration.base}`,
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = theme.colors.neutral[200];
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = theme.colors.neutral[400];
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        paddingTop: theme.spacing[8],
                        borderTop: `1px solid ${theme.colors.neutral[800]}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: theme.spacing[4],
                    }}
                >
                    <p
                        style={{
                            color: theme.colors.neutral[500],
                            fontSize: theme.typography.fontSize.sm,
                            margin: 0,
                        }}
                    >
                        © {currentYear} NEXORA. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: theme.spacing[6] }}>
                        <Link
                            to="#"
                            style={{
                                color: theme.colors.neutral[500],
                                textDecoration: 'none',
                                fontSize: theme.typography.fontSize.sm,
                                transition: `color ${theme.transitions.duration.base}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = theme.colors.neutral[300];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = theme.colors.neutral[500];
                            }}
                        >
                            Privacy
                        </Link>
                        <Link
                            to="#"
                            style={{
                                color: theme.colors.neutral[500],
                                textDecoration: 'none',
                                fontSize: theme.typography.fontSize.sm,
                                transition: `color ${theme.transitions.duration.base}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = theme.colors.neutral[300];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = theme.colors.neutral[500];
                            }}
                        >
                            Terms
                        </Link>
                        <Link
                            to="#"
                            style={{
                                color: theme.colors.neutral[500],
                                textDecoration: 'none',
                                fontSize: theme.typography.fontSize.sm,
                                transition: `color ${theme.transitions.duration.base}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = theme.colors.neutral[300];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = theme.colors.neutral[500];
                            }}
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
