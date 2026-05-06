/**
 * Language Toggle Component
 * Allows users to switch between English and Arabic
 */

import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();
    const { theme } = useTheme();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            style={{
                padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                backgroundColor: theme.colors.neutral[100],
                border: `1px solid ${theme.colors.neutral[300]}`,
                borderRadius: theme.borderRadius.lg,
                color: theme.colors.text.primary,
                fontWeight: theme.typography.fontWeight.medium,
                fontSize: theme.typography.fontSize.base,
                cursor: 'pointer',
                transition: `all ${theme.transitions.duration.base}`,
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing[2],
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.neutral[200];
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.neutral[100];
                e.currentTarget.style.transform = 'scale(1)';
            }}
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
            {/* Globe Icon */}
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
            </svg>
            <span>{language.toUpperCase()}</span>
        </button>
    );
};
