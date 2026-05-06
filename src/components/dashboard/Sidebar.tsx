/**
 * Sidebar Component
 * Collapsible vertical navigation for dashboard with icons and active states
 */

import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
    isMobileOpen: boolean;
    onMobileClose: () => void;
}

export const Sidebar = ({ isCollapsed, onToggle, isMobileOpen, onMobileClose }: SidebarProps) => {
    const { theme } = useTheme();
    const location = useLocation();

    const menuItems = [
        {
            path: '/dashboard',
            label: 'Overview',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
        },
        {
            path: '/dashboard/analytics',
            label: 'Analytics',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            ),
        },
        {
            path: '/dashboard/projects',
            label: 'Projects',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
            ),
        },
        {
            path: '/dashboard/tasks',
            label: 'Tasks',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            path: '/dashboard/profile',
            label: 'Profile',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            path: '/dashboard/settings',
            label: 'Settings',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ];

    const isActive = (path: string) => {
        if (path === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    onClick={onMobileClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: theme.zIndex.modal - 1,
                        transition: `opacity ${theme.transitions.duration.base}`,
                    }}
                    className="mobile-overlay"
                />
            )}

            {/* Sidebar */}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    left: isMobileOpen ? 0 : isCollapsed ? '-280px' : 0,
                    width: isCollapsed ? '80px' : '280px',
                    height: '100vh',
                    backgroundColor: theme.colors.neutral[900],
                    color: theme.colors.text.inverse,
                    transition: `all ${theme.transitions.duration.base}`,
                    zIndex: theme.zIndex.modal,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: theme.shadows.xl,
                }}
                className="sidebar"
            >
                {/* Logo & Toggle */}
                <div
                    style={{
                        padding: theme.spacing[6],
                        borderBottom: `1px solid ${theme.colors.neutral[800]}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {!isCollapsed && (
                        <img
                            src="/nexora-logo.png"
                            alt="NEXORA"
                            style={{
                                height: '36px',
                                width: 'auto',
                            }}
                        />
                    )}

                    {/* Toggle Button */}
                    <button
                        onClick={onToggle}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: theme.colors.neutral[400],
                            cursor: 'pointer',
                            padding: theme.spacing[2],
                            borderRadius: theme.borderRadius.md,
                            transition: `all ${theme.transitions.duration.base}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.colors.neutral[800];
                            e.currentTarget.style.color = theme.colors.text.inverse;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = theme.colors.neutral[400];
                        }}
                        aria-label="Toggle sidebar"
                        className="desktop-only"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Mobile Close Button */}
                    <button
                        onClick={onMobileClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: theme.colors.neutral[400],
                            cursor: 'pointer',
                            padding: theme.spacing[2],
                            borderRadius: theme.borderRadius.md,
                            display: 'none',
                        }}
                        className="mobile-only"
                        aria-label="Close sidebar"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav style={{ flex: 1, padding: theme.spacing[4], overflowY: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {menuItems.map((item) => (
                            <li key={item.path} style={{ marginBottom: theme.spacing[2] }}>
                                <Link
                                    to={item.path}
                                    onClick={onMobileClose}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: theme.spacing[3],
                                        padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                                        borderRadius: theme.borderRadius.lg,
                                        textDecoration: 'none',
                                        color: isActive(item.path) ? theme.colors.text.inverse : theme.colors.neutral[400],
                                        backgroundColor: isActive(item.path)
                                            ? theme.colors.primary[600]
                                            : 'transparent',
                                        transition: `all ${theme.transitions.duration.base}`,
                                        fontWeight: isActive(item.path)
                                            ? theme.typography.fontWeight.semibold
                                            : theme.typography.fontWeight.medium,
                                        fontSize: theme.typography.fontSize.base,
                                        position: 'relative',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive(item.path)) {
                                            e.currentTarget.style.backgroundColor = theme.colors.neutral[800];
                                            e.currentTarget.style.color = theme.colors.text.inverse;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive(item.path)) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = theme.colors.neutral[400];
                                        }
                                    }}
                                >
                                    <span style={{ display: 'flex', flexShrink: 0 }}>{item.icon}</span>
                                    {!isCollapsed && <span>{item.label}</span>}

                                    {/* Active Indicator */}
                                    {isActive(item.path) && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                width: '4px',
                                                height: '60%',
                                                backgroundColor: theme.colors.secondary[400],
                                                borderRadius: '0 4px 4px 0',
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Section */}
                <div
                    style={{
                        padding: theme.spacing[4],
                        borderTop: `1px solid ${theme.colors.neutral[800]}`,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing[3],
                            padding: theme.spacing[3],
                            borderRadius: theme.borderRadius.lg,
                            cursor: 'pointer',
                            transition: `background-color ${theme.transitions.duration.base}`,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.colors.neutral[800];
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
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
                                flexShrink: 0,
                            }}
                        >
                            JD
                        </div>
                        {!isCollapsed && (
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.sm,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        color: theme.colors.text.inverse,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    John Doe
                                </div>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.xs,
                                        color: theme.colors.neutral[400],
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    john@nexora.com
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          .sidebar {
            left: ${isMobileOpen ? '0' : '-280px'} !important;
            width: 280px !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-overlay {
            display: none !important;
          }
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
        </>
    );
};
