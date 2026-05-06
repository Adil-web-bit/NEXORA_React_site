/**
 * Settings Page
 * Application settings and preferences page
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';
import { Toggle, Input, Button } from '../components/forms';
import { heroHeading, staggerContainerOnScroll, staggerItemOnScroll } from '../utils/animations';

export const SettingsPage = () => {
    const { theme } = useTheme();
    // Settings state
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Theme settings
    const [darkMode, setDarkMode] = useState(false);

    // Notification settings
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [weeklyDigest, setWeeklyDigest] = useState(false);
    const [projectUpdates, setProjectUpdates] = useState(true);
    const [taskReminders, setTaskReminders] = useState(true);

    // Account settings
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle save settings
    const handleSaveSettings = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1500);
    };

    // Handle password change
    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1500);
    };

    return (
        <AnimatedPage>
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: theme.spacing[8] }}
            >
                <motion.h1 variants={heroHeading}
                    style={{
                        fontSize: theme.typography.fontSize['3xl'],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[2],
                    }}
                >
                    Settings
                </motion.h1>
                <p
                    style={{
                        color: theme.colors.text.secondary,
                        fontSize: theme.typography.fontSize.lg,
                    }}
                >
                    Manage your application preferences and account settings
                </p>
            </motion.div>

            {/* Success Message */}
            {showSuccess && (
                <div
                    style={{
                        padding: theme.spacing[4],
                        backgroundColor: theme.colors.success.light,
                        border: `1px solid ${theme.colors.success.main}`,
                        borderRadius: theme.borderRadius.lg,
                        marginBottom: theme.spacing[6],
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing[3],
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill={theme.colors.success.dark}>
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span style={{ color: theme.colors.success.dark, fontWeight: theme.typography.fontWeight.medium }}>
                        Settings saved successfully!
                    </span>
                </div>
            )}

            {/* Settings Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing[6] }}>
                {/* Appearance Settings */}
                <div
                    style={{
                        backgroundColor: theme.colors.background.paper,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.neutral[200]}`,
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            padding: theme.spacing[6],
                            borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                        }}
                    >
                        <h2
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                fontWeight: theme.typography.fontWeight.semibold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[1],
                            }}
                        >
                            Appearance
                        </h2>
                        <p
                            style={{
                                color: theme.colors.text.secondary,
                                fontSize: theme.typography.fontSize.sm,
                            }}
                        >
                            Customize how NEXORA looks on your device
                        </p>
                    </div>

                    <div style={{ padding: theme.spacing[6] }}>
                        <Toggle
                            label="Dark Mode"
                            description="Enable dark mode for a better viewing experience in low-light environments"
                            checked={darkMode}
                            onChange={setDarkMode}
                        />
                    </div>
                </div>

                {/* Notification Settings */}
                <div
                    style={{
                        backgroundColor: theme.colors.background.paper,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.neutral[200]}`,
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            padding: theme.spacing[6],
                            borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                        }}
                    >
                        <h2
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                fontWeight: theme.typography.fontWeight.semibold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[1],
                            }}
                        >
                            Notifications
                        </h2>
                        <p
                            style={{
                                color: theme.colors.text.secondary,
                                fontSize: theme.typography.fontSize.sm,
                            }}
                        >
                            Manage how you receive notifications
                        </p>
                    </div>

                    <div
                        style={{
                            padding: theme.spacing[6],
                            display: 'flex',
                            flexDirection: 'column',
                            gap: theme.spacing[6],
                        }}
                    >
                        <Toggle
                            label="Email Notifications"
                            description="Receive email notifications for important updates"
                            checked={emailNotifications}
                            onChange={setEmailNotifications}
                        />

                        <Toggle
                            label="Push Notifications"
                            description="Receive push notifications on your device"
                            checked={pushNotifications}
                            onChange={setPushNotifications}
                        />

                        <Toggle
                            label="Weekly Digest"
                            description="Get a weekly summary of your activity and updates"
                            checked={weeklyDigest}
                            onChange={setWeeklyDigest}
                        />

                        <Toggle
                            label="Project Updates"
                            description="Get notified when projects you're involved in are updated"
                            checked={projectUpdates}
                            onChange={setProjectUpdates}
                        />

                        <Toggle
                            label="Task Reminders"
                            description="Receive reminders for upcoming tasks and deadlines"
                            checked={taskReminders}
                            onChange={setTaskReminders}
                        />
                    </div>

                    <div
                        style={{
                            padding: theme.spacing[6],
                            borderTop: `1px solid ${theme.colors.neutral[200]}`,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button variant="primary" onClick={handleSaveSettings} loading={isSaving}>
                            Save Notification Settings
                        </Button>
                    </div>
                </div>

                {/* Account Settings */}
                <div
                    style={{
                        backgroundColor: theme.colors.background.paper,
                        borderRadius: theme.borderRadius.xl,
                        border: `1px solid ${theme.colors.neutral[200]}`,
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            padding: theme.spacing[6],
                            borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                        }}
                    >
                        <h2
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                fontWeight: theme.typography.fontWeight.semibold,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[1],
                            }}
                        >
                            Account Security
                        </h2>
                        <p
                            style={{
                                color: theme.colors.text.secondary,
                                fontSize: theme.typography.fontSize.sm,
                            }}
                        >
                            Manage your password and security settings
                        </p>
                    </div>

                    <div style={{ padding: theme.spacing[6] }}>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: theme.spacing[6],
                            }}
                        >
                            <Input
                                id="currentPassword"
                                label="Current Password"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter current password"
                            />

                            <Input
                                id="newPassword"
                                label="New Password"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                            />

                            <Input
                                id="confirmPassword"
                                label="Confirm New Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            padding: theme.spacing[6],
                            borderTop: `1px solid ${theme.colors.neutral[200]}`,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant="primary"
                            onClick={handleChangePassword}
                            loading={isSaving}
                            disabled={!currentPassword || !newPassword || !confirmPassword}
                        >
                            Change Password
                        </Button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div
                    style={{
                        backgroundColor: theme.colors.background.paper,
                        borderRadius: theme.borderRadius.xl,
                        border: `2px solid ${theme.colors.error.main}`,
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            padding: theme.spacing[6],
                            borderBottom: `1px solid ${theme.colors.error.light}`,
                        }}
                    >
                        <h2
                            style={{
                                fontSize: theme.typography.fontSize.xl,
                                fontWeight: theme.typography.fontWeight.semibold,
                                color: theme.colors.error.main,
                                marginBottom: theme.spacing[1],
                            }}
                        >
                            Danger Zone
                        </h2>
                        <p
                            style={{
                                color: theme.colors.text.secondary,
                                fontSize: theme.typography.fontSize.sm,
                            }}
                        >
                            Irreversible and destructive actions
                        </p>
                    </div>

                    <div style={{ padding: theme.spacing[6] }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: theme.spacing[4],
                            }}
                        >
                            <div>
                                <h3
                                    style={{
                                        fontSize: theme.typography.fontSize.base,
                                        fontWeight: theme.typography.fontWeight.semibold,
                                        color: theme.colors.text.primary,
                                        marginBottom: theme.spacing[1],
                                    }}
                                >
                                    Delete Account
                                </h3>
                                <p
                                    style={{
                                        fontSize: theme.typography.fontSize.sm,
                                        color: theme.colors.text.secondary,
                                    }}
                                >
                                    Permanently delete your account and all associated data
                                </p>
                            </div>

                            <Button variant="danger" size="sm">
                                Delete Account
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};
