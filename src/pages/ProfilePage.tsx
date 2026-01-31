/**
 * Profile Page
 * User profile with edit functionality and avatar upload
 */

import { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatedPage } from '../components/animated';
import { Input, Button } from '../components/forms';

export const ProfilePage = () => {
    const { theme } = useTheme();
    // User state
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [profileData, setProfileData] = useState({
        fullName: 'John Doe',
        email: 'john.doe@nexora.com',
        phone: '+1 (555) 123-4567',
        company: 'NEXORA Inc.',
        role: 'Product Manager',
        bio: 'Passionate about building great products and leading amazing teams.',
        avatar: '',
    });

    const [editData, setEditData] = useState({ ...profileData });

    // Handle avatar upload
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditData({ ...editData, avatar: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle save
    const handleSave = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setProfileData(editData);
            setIsSaving(false);
            setIsEditing(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1500);
    };

    // Handle cancel
    const handleCancel = () => {
        setEditData(profileData);
        setIsEditing(false);
    };

    return (
        <AnimatedPage>
            {/* Page Header */}
            <div style={{ marginBottom: theme.spacing[8] }}>
                <h1
                    style={{
                        fontSize: theme.typography.fontSize['3xl'],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        marginBottom: theme.spacing[2],
                    }}
                >
                    Profile
                </h1>
                <p
                    style={{
                        color: theme.colors.text.secondary,
                        fontSize: theme.typography.fontSize.lg,
                    }}
                >
                    Manage your personal information and preferences
                </p>
            </div>

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
                        Profile updated successfully!
                    </span>
                </div>
            )}

            {/* Profile Card */}
            <div
                style={{
                    backgroundColor: theme.colors.background.paper,
                    borderRadius: theme.borderRadius.xl,
                    border: `1px solid ${theme.colors.neutral[200]}`,
                    overflow: 'hidden',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        padding: theme.spacing[6],
                        borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <h2
                        style={{
                            fontSize: theme.typography.fontSize.xl,
                            fontWeight: theme.typography.fontWeight.semibold,
                            color: theme.colors.text.primary,
                        }}
                    >
                        Personal Information
                    </h2>

                    {!isEditing && (
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z" />
                            </svg>
                            Edit Profile
                        </Button>
                    )}
                </div>

                {/* Content */}
                <div style={{ padding: theme.spacing[6] }}>
                    {/* Avatar Section */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing[6],
                            marginBottom: theme.spacing[8],
                            paddingBottom: theme.spacing[8],
                            borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                        }}
                    >
                        <div
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: theme.borderRadius.full,
                                background: editData.avatar
                                    ? `url(${editData.avatar})`
                                    : `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: theme.colors.text.inverse,
                                fontSize: theme.typography.fontSize['4xl'],
                                fontWeight: theme.typography.fontWeight.bold,
                                border: `4px solid ${theme.colors.background.paper}`,
                                boxShadow: theme.shadows.lg,
                            }}
                        >
                            {!editData.avatar && profileData.fullName.charAt(0)}
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: theme.typography.fontSize['2xl'],
                                    fontWeight: theme.typography.fontWeight.bold,
                                    color: theme.colors.text.primary,
                                    marginBottom: theme.spacing[1],
                                }}
                            >
                                {profileData.fullName}
                            </h3>
                            <p
                                style={{
                                    color: theme.colors.text.secondary,
                                    fontSize: theme.typography.fontSize.base,
                                    marginBottom: theme.spacing[4],
                                }}
                            >
                                {profileData.role} at {profileData.company}
                            </p>

                            {isEditing && (
                                <>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleAvatarChange}
                                        style={{ display: 'none' }}
                                    />
                                    <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M8.002 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            <path d="M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM4 1h8a1 1 0 011 1v8l-2.646-2.354a.5.5 0 00-.708 0L7 10.293 5.354 8.646a.5.5 0 00-.708 0L3 10.293V2a1 1 0 011-1z" />
                                        </svg>
                                        Change Avatar
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: theme.spacing[6],
                        }}
                    >
                        <Input
                            id="fullName"
                            label="Full Name"
                            value={isEditing ? editData.fullName : profileData.fullName}
                            onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                            disabled={!isEditing}
                            required
                        />

                        <Input
                            id="email"
                            label="Email Address"
                            type="email"
                            value={isEditing ? editData.email : profileData.email}
                            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                            disabled={!isEditing}
                            required
                        />

                        <Input
                            id="phone"
                            label="Phone Number"
                            type="tel"
                            value={isEditing ? editData.phone : profileData.phone}
                            onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                            disabled={!isEditing}
                        />

                        <Input
                            id="company"
                            label="Company"
                            value={isEditing ? editData.company : profileData.company}
                            onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                            disabled={!isEditing}
                        />

                        <Input
                            id="role"
                            label="Role"
                            value={isEditing ? editData.role : profileData.role}
                            onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                            disabled={!isEditing}
                        />
                    </div>

                    {/* Bio */}
                    <div style={{ marginTop: theme.spacing[6] }}>
                        <label
                            htmlFor="bio"
                            style={{
                                display: 'block',
                                fontSize: theme.typography.fontSize.sm,
                                fontWeight: theme.typography.fontWeight.medium,
                                color: theme.colors.text.primary,
                                marginBottom: theme.spacing[2],
                            }}
                        >
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            value={isEditing ? editData.bio : profileData.bio}
                            onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                            disabled={!isEditing}
                            rows={4}
                            style={{
                                width: '100%',
                                padding: theme.spacing[3],
                                border: `2px solid ${theme.colors.neutral[200]}`,
                                borderRadius: theme.borderRadius.lg,
                                fontSize: theme.typography.fontSize.base,
                                fontFamily: theme.typography.fontFamily.primary,
                                color: theme.colors.text.primary,
                                backgroundColor: isEditing ? theme.colors.background.paper : theme.colors.neutral[50],
                                resize: 'vertical',
                                outline: 'none',
                                transition: `border-color ${theme.transitions.duration.base}`,
                            }}
                            onFocus={(e) => {
                                if (isEditing) e.currentTarget.style.borderColor = theme.colors.primary[500];
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = theme.colors.neutral[200];
                            }}
                        />
                    </div>

                    {/* Action Buttons */}
                    {isEditing && (
                        <div
                            style={{
                                display: 'flex',
                                gap: theme.spacing[3],
                                marginTop: theme.spacing[8],
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button variant="secondary" onClick={handleCancel} disabled={isSaving}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleSave} loading={isSaving}>
                                Save Changes
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedPage>
    );
};
