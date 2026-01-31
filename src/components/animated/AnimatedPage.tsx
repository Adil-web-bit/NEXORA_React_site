/**
 * AnimatedPage Component
 * Wrapper for page-level transitions with fade + slide effect
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { pageVariants } from '../../utils/animations';

interface AnimatedPageProps {
    children: ReactNode;
}

export const AnimatedPage = ({ children }: AnimatedPageProps) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            style={{ width: '100%', height: '100%' }}
        >
            {children}
        </motion.div>
    );
};
