# NEXORA - Modern SaaS Dashboard

<div align="center">
  
  **A production-ready, feature-rich SaaS dashboard built with React, TypeScript, and modern web technologies.**

  Enterprise-level frontend showcasing best practices in modern web development.
</div>

---

## 📋 Overview

NEXORA is a comprehensive SaaS dashboard application demonstrating production-ready frontend development. It features complete authentication flows, responsive design, dark/light theme support, professional animations with Framer Motion, and a rich set of interactive dashboard widgets.

This project showcases enterprise-level code quality, accessibility best practices, error handling, and a polished user experience suitable for modern SaaS applications.

---

## ✨ Features

### 🎨 **Design & UX**
- **Dual Theme System** - Seamless light/dark mode with persistent localStorage preferences
- **Fully Responsive** - Optimized layouts for mobile (< 768px), tablet (768px-1024px), and desktop (> 1024px)
- **Professional Animations** - Smooth page transitions, micro-interactions, and stagger effects using Framer Motion
- **Custom Design System** - Comprehensive theme with colors, typography, spacing, shadows, and transitions
- **Consistent Visual Language** - Unified component library with standardized styling

### 🔐 **Authentication**
- Login and Signup pages with form validation
- Protected routes with authentication context
- Persistent authentication state
- Password visibility toggle
- Form error handling with animations

### 📊 **Dashboard Components**
- **Stats Cards** - Key metrics with trend indicators, icons, and hover animations
- **Interactive Charts** - Line charts, bar charts, and area charts powered by Recharts
- **Data Tables** - Sortable, paginated tables with row hover effects and stagger animations
- **Activity Feed** - Real-time activity timeline with stagger animations and custom icons
- **Collapsible Sidebar** - Responsive navigation with active state indicators and mobile support
- **Top Navigation Bar** - User profile dropdown, notifications, search, and theme toggle

### 🎯 **Pages Implemented**
- **Marketing Pages** - Home, Features, Pricing with modern hero sections and CTAs
- **Authentication** - Login and Signup with validation and error states
- **Dashboard** - Overview with widgets, charts, and key metrics
- **Analytics** - Detailed analytics page with data visualizations
- **Projects** - Project management interface
- **Tasks** - Task tracking and management
- **Settings** - User preferences and configuration
- **Profile** - User profile management
- **404 Page** - Professional not-found page with navigation options

### 🛡️ **Error Handling & Empty States**
- **Error Boundaries** - React error boundaries with graceful fallback UI and retry functionality
- **Error States** - Reusable error display components with friendly messaging
- **Empty States** - Custom empty state components with icons for tables, feeds, and widgets
- **404 Page** - Professional not-found page with search icon and navigation CTAs

### ♿ **Accessibility**
- Keyboard navigation support across all interactive elements
- ARIA labels and semantic HTML throughout
- Visible focus indicators for keyboard users
- WCAG AA color contrast compliance (4.5:1 for normal text)
- Respects `prefers-reduced-motion` for animations

### ⚡ **Performance & Optimization**
- Vite for lightning-fast development and optimized builds
- Code splitting with React Router lazy loading
- Optimized animations using GPU-accelerated properties (transform, opacity)
- Efficient re-renders with React best practices

---

## 🛠️ Tech Stack

### **Core Technologies**
- **React 18** - Modern React with hooks, concurrent features, and Suspense
- **TypeScript** - Full type safety across the entire application
- **Vite** - Next-generation frontend tooling with instant HMR

### **Styling & Animation**
- **CSS-in-JS** - Inline styles with centralized theme system
- **Framer Motion** - Production-ready animation library for React
- **Custom Theme System** - Centralized design tokens for consistency

### **Data Visualization**
- **Recharts** - Composable charting library built on React components

### **Routing & State Management**
- **React Router v6** - Declarative routing with nested routes and layouts
- **Context API** - Global state management for theme and authentication

### **Development Tools**
- **ESLint** - Code linting and style enforcement
- **TypeScript Compiler** - Static type checking
- **Vite Dev Server** - Fast refresh and instant updates

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ and npm installed
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nexora-frontend.git
   cd nexora-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

---

## 📂 Project Structure

```
nexora-frontend/
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable components
│   │   ├── animated/          # Animation wrappers (AnimatedPage)
│   │   ├── dashboard/         # Dashboard components (Sidebar, Topbar)
│   │   ├── feedback/          # Error boundaries, empty states
│   │   ├── forms/             # Form components (Button, Input, Checkbox, Toggle)
│   │   ├── navigation/        # Navbar, Footer
│   │   ├── theme/             # Theme toggle component
│   │   └── widgets/           # Dashboard widgets (StatsCard, DataTable, Charts)
│   ├── config/                # Configuration files
│   │   ├── router.tsx         # React Router configuration
│   │   └── theme.ts           # Global theme tokens and design system
│   ├── contexts/              # React contexts
│   │   ├── AuthContext.tsx    # Authentication state management
│   │   └── ThemeContext.tsx   # Theme state management
│   ├── layouts/               # Layout components
│   │   ├── DashboardLayout.tsx  # Authenticated pages layout
│   │   └── PublicLayout.tsx     # Public pages layout
│   ├── pages/                 # Page components
│   │   ├── HomePage.tsx
│   │   ├── FeaturesPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── TasksPage.tsx
│   │   ├── SettingsPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── utils/                 # Utility functions
│   │   └── animations.ts      # Framer Motion animation variants
│   ├── App.tsx                # Root component with router
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and CSS reset
├── package.json
├── tsconfig.json
├── vite.config.ts
├── ARCHITECTURE.md            # Detailed architecture documentation
└── README.md
```

---

## 🎨 Key Implementation Highlights

### 1. **Custom Theme System**
Centralized design tokens in `src/config/theme.ts`:
- **Colors**: Primary, secondary, neutral, semantic (success, warning, error, info)
- **Typography**: Font families, sizes (xs to 6xl), weights, line heights
- **Spacing**: 4px grid system (spacing[1] = 4px, spacing[2] = 8px, etc.)
- **Shadows**: sm, md, lg, xl for depth and elevation
- **Transitions**: Consistent duration and easing functions
- **Breakpoints**: Mobile, tablet, desktop
- **Dark/Light Mode**: Persistent theme preference with smooth transitions

### 2. **Professional Animations**
Using Framer Motion for production-ready animations:
- **Page Transitions**: Fade and slide effects on route changes
- **Component Animations**: Hover, focus, loading states
- **Stagger Effects**: Sequential animations for lists and grids
- **Micro-interactions**: Button taps, input focus, toggle switches
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **Performance**: GPU-accelerated properties only (transform, opacity)

### 3. **Responsive Design**
Mobile-first approach with breakpoints:
- **Mobile (< 768px)**: Stacked layouts, hamburger menu, full-width components
- **Tablet (768px - 1024px)**: 2-column grids, collapsible sidebar
- **Desktop (> 1024px)**: 3-4 column grids, expanded sidebar, generous spacing

### 4. **Error Handling**
Production-ready error handling:
- **Error Boundaries**: Catch React errors and display fallback UI
- **Empty States**: Friendly messages when no data is available
- **404 Page**: Professional not-found page with navigation options
- **Form Validation**: Real-time validation with error messages

---

## 🌐 Available Routes

### Public Routes
- `/` - Home page with hero section and features
- `/features` - Features overview with detailed descriptions
- `/pricing` - Pricing plans with comparison table
- `/login` - User login with form validation
- `/signup` - User registration with password strength indicator

### Dashboard Routes (Authenticated)
- `/dashboard` - Main dashboard with widgets and charts
- `/dashboard/analytics` - Detailed analytics and metrics
- `/dashboard/projects` - Project management interface
- `/dashboard/tasks` - Task tracking and management
- `/dashboard/settings` - User preferences and configuration
- `/dashboard/profile` - User profile management

### Error Pages
- `*` - 404 Not Found page with navigation options

---

## 📸 Screenshots

*Screenshots will be added here showcasing:*
- Dashboard (Light & Dark mode)
- Homepage
- Mobile responsive views
- Component library

---

## 🎯 Future Enhancements

- [ ] Backend API integration with REST/GraphQL
- [ ] Real-time updates with WebSockets
- [ ] Advanced filtering and search functionality
- [ ] Export functionality (PDF, CSV, Excel)
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics and custom reports
- [ ] Team collaboration features
- [ ] Role-based access control (RBAC)
- [ ] Email notifications
- [ ] File upload and management

---

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow functional component patterns with hooks
- Keep components focused and single-responsibility
- Use meaningful variable and function names
- Add concise comments for complex logic

### File Naming Conventions
- **Components**: PascalCase (e.g., `HomePage.tsx`, `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `animations.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Component Organization
```tsx
// 1. Imports
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// 2. Types/Interfaces
interface Props {
  title: string;
  onAction: () => void;
}

// 3. Component
export const Component = ({ title, onAction }: Props) => {
  // 4. Hooks
  const { theme } = useTheme();
  const [state, setState] = useState();
  
  // 5. Handlers
  const handleClick = () => {
    onAction();
  };
  
  // 6. Render
  return (
    <div>{title}</div>
  );
};
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ using React, TypeScript, and modern web technologies.

---

<div align="center">
  
  **⭐ Star this repo if you find it helpful!**
  
  Made for learning and portfolio demonstration purposes.
</div>
