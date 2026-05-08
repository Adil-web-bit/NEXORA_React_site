/**
 * Router Configuration - SAAEB
 * Marketing pages only (Invite-only model)
 */

import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../layouts';
import {
    HomePage,
    FeaturesPage,
    PricingPage,
    NotFoundPage,
} from '../pages';

export const router = createBrowserRouter([
    // Public Routes - Marketing Pages Only
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
        ],
    },

    // 404 - Catch all unmatched routes
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
