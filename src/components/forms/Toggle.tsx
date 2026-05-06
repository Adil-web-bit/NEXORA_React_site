/**
 * Toggle Component
 * Reusable switch/toggle for settings with smooth animations
 */

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface ToggleProps {
    label: string;
    description?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export const Toggle = ({ label, description, checked, onChange, disabled = false }: ToggleProps) => {
    const { theme } = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: theme.spacing[4],
            }}
        >
            <div style={{ flex: 1 }}>
                <label
                    style={{
                        fontSize: theme.typography.fontSize.base,
                        fontWeight: theme.typography.fontWeight.medium,
                        color: disabled ? theme.colors.neutral[400] : theme.colors.text.primary,
                        display: 'block',
                        marginBottom: description ? theme.spacing[1] : 0,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                    }}
                    onClick={() => !disabled && onChange(!checked)}
                >
                    {label}
                </label>
                {description && (
                    <p
                        style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: theme.colors.text.secondary,
                            margin: 0,
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>

            {/* Toggle Switch */}
            <motion.button
                onClick={() => !disabled && onChange(!checked)}
                disabled={disabled}
                animate={{
                    backgroundColor: checked ? theme.colors.primary[500] : theme.colors.neutral[300],
                }}
                whileTap={{ scale: disabled ? 1 : 0.95 }}
                style={{
                    position: 'relative',
                    width: '48px',
                    height: '24px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    flexShrink: 0,
                    opacity: disabled ? 0.5 : 1,
                }}
            >
                <motion.div
                    animate={{
                        x: checked ? 24 : 0,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                    }}
                    style={{
                        position: 'absolute',
                        top: '2px',
                        left: '2px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: theme.colors.background.default,
                        borderRadius: '50%',
                        boxShadow: theme.shadows.sm,
                    }}
                />
            </motion.button>
        </div>
    );
};
