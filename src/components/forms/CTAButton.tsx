import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { rippleVariants, shimmerVariants } from '../../utils/animations';

interface RipplePosition {
    x: number;
    y: number;
}

interface CTAButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    isPrimary?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    children,
    onClick,
    href,
    isPrimary = true,
    style,
    className,
}) => {
    const [ripples, setRipples] = useState<RipplePosition[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y };
        setRipples([...ripples, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples((prev) => prev.slice(1));
        }, 600);

        onClick?.();
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block' }}
        >
            {href ? (
                <a
                    href={href}
                    onClick={handleClick}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        ...style,
                    }}
                    className={className}
                >
                    {/* Shimmer effect */}
                    <motion.div
                        variants={shimmerVariants}
                        animate="animate"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: isPrimary
                                ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                                : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                            backgroundSize: '200% center',
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Ripples */}
                    {ripples.map((ripple, index) => (
                        <motion.div
                            key={index}
                            variants={rippleVariants}
                            initial="initial"
                            animate="animate"
                            style={{
                                position: 'absolute',
                                top: ripple.y,
                                left: ripple.x,
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none',
                            }}
                        />
                    ))}

                    {/* Button content */}
                    <span style={{ position: 'relative', zIndex: 1, display: 'inline-block' }}>
                        {children}
                    </span>
                </a>
            ) : (
                <button
                    onClick={handleClick}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        ...style,
                    }}
                    className={className}
                >
                    {/* Shimmer effect */}
                    <motion.div
                        variants={shimmerVariants}
                        animate="animate"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: isPrimary
                                ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                                : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                            backgroundSize: '200% center',
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Ripples */}
                    {ripples.map((ripple, index) => (
                        <motion.div
                            key={index}
                            variants={rippleVariants}
                            initial="initial"
                            animate="animate"
                            style={{
                                position: 'absolute',
                                top: ripple.y,
                                left: ripple.x,
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none',
                            }}
                        />
                    ))}

                    {/* Button content */}
                    <span style={{ position: 'relative', zIndex: 1, display: 'inline-block' }}>
                        {children}
                    </span>
                </button>
            )}
        </motion.div>
    );
};
