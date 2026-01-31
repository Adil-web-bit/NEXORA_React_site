/**
 * DataTable Component
 * Reusable table with sorting, pagination, and row hover animations
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { EmptyState } from '../feedback';

interface Column {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
    title: string;
    columns: Column[];
    data: any[];
    pageSize?: number;
    emptyMessage?: string;
}

export const DataTable = ({
    title,
    columns,
    data,
    pageSize = 5,
    emptyMessage = 'No data available',
}: DataTableProps) => {
    const { theme } = useTheme();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    // Sorting logic
    const sortedData = [...data].sort((a, b) => {
        if (!sortConfig) return 0;

        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Pagination logic
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

    const handleSort = (key: string) => {
        setSortConfig((current) => {
            if (!current || current.key !== key) {
                return { key, direction: 'asc' };
            }
            if (current.direction === 'asc') {
                return { key, direction: 'desc' };
            }
            return null;
        });
    };

    return (
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
                }}
            >
                <h3
                    style={{
                        fontSize: theme.typography.fontSize.lg,
                        fontWeight: theme.typography.fontWeight.semibold,
                        color: theme.colors.text.primary,
                    }}
                >
                    {title}
                </h3>
            </div>

            {/* Table Content */}
            {sortedData.length === 0 ? (
                <EmptyState
                    icon={
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={theme.colors.neutral[400]}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    }
                    title={emptyMessage}
                    description="There are no items to display at this time."
                />
            ) : (
                <>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: theme.colors.neutral[50] }}>
                                    {columns.map((column) => (
                                        <th
                                            key={column.key}
                                            onClick={() => column.sortable && handleSort(column.key)}
                                            style={{
                                                padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
                                                textAlign: 'left',
                                                fontSize: theme.typography.fontSize.sm,
                                                fontWeight: theme.typography.fontWeight.semibold,
                                                color: theme.colors.text.secondary,
                                                cursor: column.sortable ? 'pointer' : 'default',
                                                userSelect: 'none',
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing[2] }}>
                                                {column.label}
                                                {column.sortable && (
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                                        {sortConfig?.key === column.key ? (
                                                            sortConfig.direction === 'asc' ? (
                                                                <path d="M8 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zM7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" />
                                                            ) : (
                                                                <path d="M8 12.5a.5.5 0 01-.5-.5V4a.5.5 0 011 0v8a.5.5 0 01-.5.5zM7.646 13.354a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3z" />
                                                            )
                                                        ) : (
                                                            <path d="M8 3a.5.5 0 01.5.5v9a.5.5 0 01-1 0v-9A.5.5 0 018 3zm0 10a.5.5 0 01-.354-.146l-3-3a.5.5 0 01.708-.708L8 11.793l2.646-2.647a.5.5 0 01.708.708l-3 3A.5.5 0 018 13z" />
                                                        )}
                                                    </svg>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((row, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{
                                            backgroundColor: theme.colors.neutral[50],
                                        }}
                                        style={{
                                            borderBottom: `1px solid ${theme.colors.neutral[200]}`,
                                            transition: `background-color ${theme.transitions.duration.fast}`,
                                        }}
                                    >
                                        {columns.map((column) => (
                                            <td
                                                key={column.key}
                                                style={{
                                                    padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
                                                    fontSize: theme.typography.fontSize.sm,
                                                    color: theme.colors.text.primary,
                                                }}
                                            >
                                                {column.render ? column.render(row[column.key], row) : row[column.key]}
                                            </td>
                                        ))}
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div
                            style={{
                                padding: theme.spacing[4],
                                borderTop: `1px solid ${theme.colors.neutral[200]}`,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: theme.typography.fontSize.sm,
                                    color: theme.colors.text.secondary,
                                }}
                            >
                                Showing {startIndex + 1} to {Math.min(startIndex + pageSize, data.length)} of {data.length} entries
                            </div>

                            <div style={{ display: 'flex', gap: theme.spacing[2] }}>
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    style={{
                                        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                                        border: `1px solid ${theme.colors.neutral[300]}`,
                                        borderRadius: theme.borderRadius.md,
                                        backgroundColor: theme.colors.background.paper,
                                        color: currentPage === 1 ? theme.colors.neutral[400] : theme.colors.text.primary,
                                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                        fontSize: theme.typography.fontSize.sm,
                                        fontFamily: theme.typography.fontFamily.primary,
                                    }}
                                >
                                    Previous
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        style={{
                                            padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                                            border: `1px solid ${theme.colors.neutral[300]}`,
                                            borderRadius: theme.borderRadius.md,
                                            backgroundColor:
                                                currentPage === page ? theme.colors.primary[500] : theme.colors.background.paper,
                                            color: currentPage === page ? theme.colors.text.inverse : theme.colors.text.primary,
                                            cursor: 'pointer',
                                            fontSize: theme.typography.fontSize.sm,
                                            fontFamily: theme.typography.fontFamily.primary,
                                            minWidth: '36px',
                                        }}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    style={{
                                        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
                                        border: `1px solid ${theme.colors.neutral[300]}`,
                                        borderRadius: theme.borderRadius.md,
                                        backgroundColor: theme.colors.background.paper,
                                        color: currentPage === totalPages ? theme.colors.neutral[400] : theme.colors.text.primary,
                                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                        fontSize: theme.typography.fontSize.sm,
                                        fontFamily: theme.typography.fontFamily.primary,
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
