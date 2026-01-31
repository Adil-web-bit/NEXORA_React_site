/**
 * Animation Utilities
 * Reusable animation variants and utilities for Framer Motion
 */

import type { Variants, Transition } from 'framer-motion';

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation duration constants (in seconds)
export const duration = {
    fast: 0.15,
    base: 0.25,
    slow: 0.35,
} as const;

// Easing functions
export const easing = {
    easeOut: [0.16, 1, 0.3, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
} as const;

// Get transition with reduced motion support
export const getTransition = (customTransition?: Transition): Transition => {
    if (prefersReducedMotion()) {
        return { duration: 0 };
    }
    return customTransition || { duration: duration.base, ease: easing.easeOut };
};

// ========================================
// Page Transitions
// ========================================

export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: getTransition({ duration: duration.slow, ease: easing.easeOut }),
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: getTransition({ duration: duration.fast, ease: easing.easeInOut }),
    },
};

// ========================================
// Fade Animations
// ========================================

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: getTransition() },
    exit: { opacity: 0, transition: getTransition({ duration: duration.fast }) },
};

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: getTransition() },
    exit: { opacity: 0, y: -10, transition: getTransition({ duration: duration.fast }) },
};

export const fadeInDown: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: getTransition() },
    exit: { opacity: 0, y: 10, transition: getTransition({ duration: duration.fast }) },
};

// ========================================
// Scale Animations
// ========================================

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: getTransition() },
    exit: { opacity: 0, scale: 0.95, transition: getTransition({ duration: duration.fast }) },
};

export const scaleBounce: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: getTransition(easing.spring) },
    exit: { scale: 0.8, opacity: 0, transition: getTransition({ duration: duration.fast }) },
};

// ========================================
// Slide Animations
// ========================================

export const slideInRight: Variants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: getTransition({ duration: duration.slow }) },
    exit: { x: '100%', opacity: 0, transition: getTransition() },
};

export const slideInLeft: Variants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: getTransition({ duration: duration.slow }) },
    exit: { x: '-100%', opacity: 0, transition: getTransition() },
};

// ========================================
// Stagger Animations
// ========================================

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: getTransition(),
    },
};

// ========================================
// Hover & Tap Animations
// ========================================

export const hoverLift = {
    whileHover: prefersReducedMotion()
        ? {}
        : {
            y: -4,
            transition: { duration: duration.fast, ease: easing.easeOut },
        },
    whileTap: prefersReducedMotion()
        ? {}
        : {
            y: -2,
            transition: { duration: duration.fast },
        },
};

export const hoverScale = {
    whileHover: prefersReducedMotion()
        ? {}
        : {
            scale: 1.02,
            transition: { duration: duration.fast, ease: easing.easeOut },
        },
    whileTap: prefersReducedMotion()
        ? {}
        : {
            scale: 0.98,
            transition: { duration: duration.fast },
        },
};

export const hoverGlow = {
    whileHover: prefersReducedMotion()
        ? {}
        : {
            boxShadow: '0 10px 40px rgba(0, 86, 224, 0.2)',
            transition: { duration: duration.fast },
        },
};

// ========================================
// Special Animations
// ========================================

// Shake animation for errors
export const shake: Variants = {
    initial: { x: 0 },
    animate: prefersReducedMotion()
        ? { x: 0 }
        : {
            x: [-10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
        },
};

// Pulse animation
export const pulse: Variants = {
    initial: { scale: 1 },
    animate: prefersReducedMotion()
        ? { scale: 1 }
        : {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
};

// Rotate animation (for loading spinners)
export const rotate: Variants = {
    initial: { rotate: 0 },
    animate: prefersReducedMotion()
        ? { rotate: 0 }
        : {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
            },
        },
};

// ========================================
// Modal & Dropdown Animations
// ========================================

export const modalBackdrop: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: getTransition({ duration: duration.fast }) },
    exit: { opacity: 0, transition: getTransition({ duration: duration.fast }) },
};

export const modalContent: Variants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: getTransition({ duration: duration.base }),
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: getTransition({ duration: duration.fast }),
    },
};

export const dropdownMenu: Variants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: getTransition({ duration: duration.fast }),
    },
    exit: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        transition: getTransition({ duration: duration.fast }),
    },
};
