/**
 * DashboardLayout Component
 * Main layout for authenticated dashboard pages with Sidebar and Topbar
 */

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Sidebar, Topbar } from '../components/dashboard';
import { ErrorBoundary } from '../components/feedback';

export const DashboardLayout = () => {
    const { theme } = useTheme();
    const location = useLocation();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.colors.background.default }}>
            {/* Sidebar */}
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                isMobileOpen={isMobileSidebarOpen}
                onMobileClose={() => setIsMobileSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: isSidebarCollapsed ? '80px' : '280px',
                    transition: `margin-left ${theme.transitions.duration.base}`,
                }}
                className="main-content"
            >
                {/* Topbar */}
                <Topbar onMenuClick={() => setIsMobileSidebarOpen(true)} />

                {/* Page Content */}
                <main
                    style={{
                        flex: 1,
                        padding: theme.spacing[8],
                        marginTop: '70px', // Height of topbar
                        overflowY: 'auto',
                    }}
                >
                    <ErrorBoundary>
                        <AnimatePresence mode="wait">
                            <Outlet key={location.pathname} />
                        </AnimatePresence>
                    </ErrorBoundary>
                </main>
            </div>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          .main-content {
            margin-left: 0 !important;
          }
        }
      `}</style>
        </div>
    );
};
