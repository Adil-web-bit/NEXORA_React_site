import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tilt3D, slideInFromRight, slideOutToLeft, carouselDot } from '../../utils/animations';
import { useTheme } from '../../contexts/ThemeContext';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
    autoRotateInterval?: number;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
    testimonials,
    autoRotateInterval = 5000,
}) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const { theme } = useTheme();

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, autoRotateInterval);
        return () => clearInterval(interval);
    }, [testimonials.length, autoRotateInterval]);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[current];

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {/* Carousel Container */}
            <div style={{ position: 'relative', minHeight: '300px', overflow: 'hidden' }}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={direction > 0 ? slideInFromRight : slideOutToLeft}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{
                            padding: theme.spacing[8],
                            backgroundColor: theme.colors.background.paper,
                            borderRadius: theme.borderRadius['2xl'],
                            border: `1px solid ${theme.colors.neutral[200]}`,
                            perspective: '1000px',
                        }}
                        {...tilt3D}
                    >
                        {/* Quote Mark */}
                        <div
                            style={{
                                fontSize: theme.typography.fontSize['5xl'],
                                color: theme.colors.primary[300],
                                marginBottom: theme.spacing[4],
                                lineHeight: 1,
                            }}
                        >
                            "
                        </div>

                        {/* Quote Text */}
                        <p
                            style={{
                                fontSize: theme.typography.fontSize.lg,
                                color: theme.colors.text.primary,
                                lineHeight: theme.typography.lineHeight.relaxed,
                                marginBottom: theme.spacing[8],
                                fontStyle: 'italic',
                                minHeight: '80px',
                            }}
                        >
                            {testimonial.quote}
                        </p>

                        {/* Author Info */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[3] }}>
                            <div
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: theme.borderRadius.full,
                                    background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: theme.colors.text.inverse,
                                    fontWeight: theme.typography.fontWeight.bold,
                                    fontSize: theme.typography.fontSize.lg,
                                }}
                            >
                                {testimonial.avatar}
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        color: theme.colors.text.primary,
                                        fontSize: theme.typography.fontSize.base,
                                    }}
                                >
                                    {testimonial.author}
                                </div>
                                <div
                                    style={{
                                        fontSize: theme.typography.fontSize.sm,
                                        color: theme.colors.text.secondary,
                                    }}
                                >
                                    {testimonial.role}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: theme.spacing[3],
                    marginTop: theme.spacing[8],
                }}
            >
                {testimonials.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            setDirection(index > current ? 1 : -1);
                            setCurrent(index);
                        }}
                        variants={carouselDot}
                        initial={index === current ? 'animate' : 'initial'}
                        animate={index === current ? 'animate' : 'initial'}
                        style={{
                            width: index === current ? theme.spacing[8] : theme.spacing[3],
                            height: theme.spacing[3],
                            borderRadius: theme.borderRadius.full,
                            backgroundColor: index === current ? theme.colors.primary[500] : theme.colors.neutral[300],
                            border: 'none',
                            cursor: 'pointer',
                            transition: `all ${theme.transitions.duration.base}`,
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                    />
                ))}
            </div>

            {/* Arrow Navigation (optional for desktop) */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: theme.spacing[6],
                    gap: theme.spacing[4],
                }}
            >
                <motion.button
                    onClick={() => paginate(-1)}
                    style={{
                        padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                        backgroundColor: theme.colors.background.paper,
                        border: `1px solid ${theme.colors.neutral[200]}`,
                        borderRadius: theme.borderRadius.lg,
                        cursor: 'pointer',
                        fontSize: theme.typography.fontSize.lg,
                        color: theme.colors.text.secondary,
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: theme.colors.primary[50] }}
                    whileTap={{ scale: 0.95 }}
                >
                    ← Prev
                </motion.button>

                <motion.button
                    onClick={() => paginate(1)}
                    style={{
                        padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
                        backgroundColor: theme.colors.background.paper,
                        border: `1px solid ${theme.colors.neutral[200]}`,
                        borderRadius: theme.borderRadius.lg,
                        cursor: 'pointer',
                        fontSize: theme.typography.fontSize.lg,
                        color: theme.colors.text.secondary,
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: theme.colors.primary[50] }}
                    whileTap={{ scale: 0.95 }}
                >
                    Next →
                </motion.button>
            </div>
        </div>
    );
};
