/**
 * PublicLayout Component
 * Layout wrapper for public-facing marketing pages (Home, Features, Pricing, Login, Signup)
 * Uses Navbar and Footer components for consistent navigation
 */

import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../components/navigation';
import { ErrorBoundary } from '../components/feedback';

export const PublicLayout = () => {
    const location = useLocation();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation Header */}
            <Navbar />

            {/* Main Content Area - Rendered by child routes */}
            <main style={{ flex: 1 }}>
                <ErrorBoundary>
                    <AnimatePresence mode="wait">
                        <Outlet key={location.pathname} />
                    </AnimatePresence>
                </ErrorBoundary>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
