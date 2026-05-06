/**
 * Topbar Component
 * Fixed header with search, notifications, and user dropdown menu
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../theme';

interface TopbarProps {
    onMenuClick: () => void;
}

export const Topbar = ({ onMenuClick }: TopbarProps) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        // Simulate logout
        navigate('/login');
    };

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                height: '70px',
                backgroundColor: theme.colors.background.default,
                borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                zIndex: theme.zIndex.sticky,
                display: 'flex',
                alignItems: 'center',
                padding: `0 ${theme.spacing[6]}`,
                boxShadow: theme.shadows.sm,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '100%',
                }}
            >
                {/* Left Section - Mobile Menu + Search */}
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[4], flex: 1 }}>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            color: theme.colors.text.primary,
                            cursor: 'pointer',
                            padding: theme.spacing[2],
                            borderRadius: theme.borderRadius.md,
                            transition: `background-color ${theme.transitions.duration.base}`,
                        }}
                        className="mobile-menu-btn"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        aria-label="Open menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Search Bar */}
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '500px',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                left: theme.spacing[4],
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: theme.colors.neutral[400],
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: `${theme.spacing[2]} ${theme.spacing[4]} ${theme.spacing[2]} ${theme.spacing[12]}`,
                                border: `2px solid ${theme.colors.neutral[200]}`,
                                borderRadius: theme.borderRadius.lg,
                                fontSize: theme.typography.fontSize.base,
                                fontFamily: theme.typography.fontFamily.primary,
                                color: theme.colors.text.primary,
                                backgroundColor: theme.colors.background.default,
                                outline: 'none',
                                transition: `all ${theme.transitions.duration.base}`,
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = theme.colors.primary[500];
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = theme.colors.neutral[200];
                            }}
                        />
                    </div>
                </div>

                {/* Right Section - Notifications + User Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[4] }}>
                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Notifications */}
                    <button
                        style={{
                            position: 'relative',
                            background: 'none',
                            border: 'none',
                            color: theme.colors.text.primary,
                            cursor: 'pointer',
                            padding: theme.spacing[2],
                            borderRadius: theme.borderRadius.md,
                            transition: `background-color ${theme.transitions.duration.base}`,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        aria-label="Notifications"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                        {/* Notification Badge */}
                        <span
                            style={{
                                position: 'absolute',
                                top: theme.spacing[1],
                                right: theme.spacing[1],
                                width: '8px',
                                height: '8px',
                                backgroundColor: theme.colors.error.main,
                                borderRadius: theme.borderRadius.full,
                                border: `2px solid ${theme.colors.background.default}`,
                            }}
                        />
                    </button>

                    {/* User Menu */}
                    <div ref={userMenuRef} style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: theme.spacing[3],
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: theme.spacing[2],
                                borderRadius: theme.borderRadius.lg,
                                transition: `background-color ${theme.transitions.duration.base}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                            }}
                            onMouseLeave={(e) => {
                                if (!isUserMenuOpen) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                            aria-label="User menu"
                        >
                            {/* User Avatar */}
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: theme.borderRadius.full,
                                    background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: theme.colors.text.inverse,
                                    fontWeight: theme.typography.fontWeight.semibold,
                                    fontSize: theme.typography.fontSize.sm,
                                }}
                            >
                                JD
                            </div>

                            {/* User Info - Hidden on mobile */}
                            <div style={{ textAlign: 'left' }} className="user-info">
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.sm,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        color: theme.colors.text.primary,
                                    }}
                                >
                                    John Doe
                                </div>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.xs,
                                        color: theme.colors.text.secondary,
                                    }}
                                >
                                    Admin
                                </div>
                            </div>

                            {/* Dropdown Arrow */}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                style={{
                                    color: theme.colors.neutral[400],
                                    transition: `transform ${theme.transitions.duration.base}`,
                                    transform: isUserMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                                className="user-info"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 5.293a1 1 0 011.414 0L8 7.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isUserMenuOpen && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    right: 0,
                                    width: '220px',
                                    backgroundColor: theme.colors.background.default,
                                    borderRadius: theme.borderRadius.xl,
                                    boxShadow: theme.shadows.xl,
                                    border: `1px solid ${theme.colors.neutral[200]}`,
                                    padding: theme.spacing[2],
                                    zIndex: theme.zIndex.dropdown,
                                }}
                            >
                                {/* User Info in Dropdown */}
                                <div
                                    style={{
                                        padding: theme.spacing[3],
                                        borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                                        marginBottom: theme.spacing[2],
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: theme.typography.fontSize.sm,
                                            fontWeight: theme.typography.fontWeight.semibold,
                                            color: theme.colors.text.primary,
                                            marginBottom: theme.spacing[1],
                                        }}
                                    >
                                        John Doe
                                    </div>
                                    <div
                                        style={{
                                            fontSize: theme.typography.fontSize.xs,
                                            color: theme.colors.text.secondary,
                                        }}
                                    >
                                        john@nexora.com
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <Link
                                    to="/dashboard/profile"
                                    onClick={() => setIsUserMenuOpen(false)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: theme.spacing[3],
                                        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                                        borderRadius: theme.borderRadius.md,
                                        textDecoration: 'none',
                                        color: theme.colors.text.primary,
                                        fontSize: theme.typography.fontSize.sm,
                                        transition: `background-color ${theme.transitions.duration.base}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M9 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Profile
                                </Link>

                                <Link
                                    to="/dashboard/settings"
                                    onClick={() => setIsUserMenuOpen(false)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: theme.spacing[3],
                                        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                                        borderRadius: theme.borderRadius.md,
                                        textDecoration: 'none',
                                        color: theme.colors.text.primary,
                                        fontSize: theme.typography.fontSize.sm,
                                        transition: `background-color ${theme.transitions.duration.base}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM9 12a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Settings
                                </Link>

                                <div
                                    style={{
                                        height: '1px',
                                        backgroundColor: theme.colors.neutral[200],
                                        margin: `${theme.spacing[2]} 0`,
                                    }}
                                />

                                <button
                                    onClick={handleLogout}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: theme.spacing[3],
                                        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                                        borderRadius: theme.borderRadius.md,
                                        width: '100%',
                                        background: 'none',
                                        border: 'none',
                                        color: theme.colors.error.main,
                                        fontSize: theme.typography.fontSize.sm,
                                        cursor: 'pointer',
                                        transition: `background-color ${theme.transitions.duration.base}`,
                                        fontFamily: theme.typography.fontFamily.primary,
                                        textAlign: 'left',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .user-info {
            display: none !important;
          }
        }
      `}</style>
        </header>
    );
};
