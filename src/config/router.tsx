/**
 * Router Configuration
 * Defines all application routes with their corresponding layouts and pages
 * 
 * Route Structure:
 * - Public routes use PublicLayout (marketing pages, auth)
 * - Dashboard routes use DashboardLayout (authenticated pages)
 * - 404 route catches all unmatched paths
 */

import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout, DashboardLayout } from '../layouts';
import {
    HomePage,
    FeaturesPage,
    PricingPage,
    LoginPage,
    SignupPage,
    DashboardPage,
    AnalyticsPage,
    ProjectsPage,
    TasksPage,
    ProfilePage,
    SettingsPage,
    NotFoundPage,
} from '../pages';

export const router = createBrowserRouter([
    // Public Routes - Marketing & Authentication
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'features',
                element: <FeaturesPage />,
            },
            {
                path: 'pricing',
                element: <PricingPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'signup',
                element: <SignupPage />,
            },
        ],
    },

    // Dashboard Routes - Authenticated Pages
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: 'analytics',
                element: <AnalyticsPage />,
            },
            {
                path: 'projects',
                element: <ProjectsPage />,
            },
            {
                path: 'tasks',
                element: <TasksPage />,
            },
            {
                path: 'profile',
                element: <ProfilePage />,
            },
            {
                path: 'settings',
                element: <SettingsPage />,
            },
        ],
    },

    // 404 - Catch all unmatched routes
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
