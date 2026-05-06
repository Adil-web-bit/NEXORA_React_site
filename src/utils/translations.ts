/**
 * Translations
 * English and Arabic translations for the application
 */

export const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            features: 'Features',
            pricing: 'Pricing',
            login: 'Login',
            getStarted: 'Get Started',
        },
        // Home Page
        home: {
            badge: '🎉 New: AI-powered insights now available',
            headline: 'Transform Your Business with NEXORA',
            subheading: 'The all-in-one platform that empowers teams to collaborate, automate workflows, and scale effortlessly. Join thousands of companies already transforming their operations.',
            cta: 'Start Free Trial',
            ctaDemo: 'Watch Demo',
            ctaNote: '✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime',
            
            // Stats
            stats: {
                users: 'Active Users',
                uptime: 'Uptime SLA',
                countries: 'Countries',
                rating: 'User Rating',
            },
            
            // Features Section
            featuresTitle: 'Everything You Need to Succeed',
            featuresSubtitle: 'Powerful features designed to streamline your workflow and boost productivity',
            
            features: [
                {
                    icon: '⚡',
                    title: 'Lightning Fast Performance',
                    description: 'Experience blazing-fast load times and seamless interactions powered by cutting-edge technology.',
                },
                {
                    icon: '🔒',
                    title: 'Enterprise-Grade Security',
                    description: 'Bank-level encryption, SOC 2 compliance, and advanced security features to protect your data.',
                },
                {
                    icon: '📊',
                    title: 'Advanced Analytics',
                    description: 'Make data-driven decisions with real-time insights and comprehensive reporting dashboards.',
                },
                {
                    icon: '🔗',
                    title: 'Seamless Integrations',
                    description: 'Connect with 100+ tools and services through our extensive integration ecosystem.',
                },
            ],
            
            // How It Works
            howTitle: 'How It Works',
            howSubtitle: 'Get started in minutes with our simple, intuitive process',
            
            howSteps: [
                {
                    number: '01',
                    title: 'Sign Up in Seconds',
                    description: 'Create your account with just an email. No credit card required for the 14-day trial.',
                },
                {
                    number: '02',
                    title: 'Customize Your Workspace',
                    description: 'Set up your team, configure preferences, and integrate your favorite tools effortlessly.',
                },
                {
                    number: '03',
                    title: 'Start Collaborating',
                    description: 'Invite team members and start working together in real-time with powerful collaboration features.',
                },
                {
                    number: '04',
                    title: 'Scale with Confidence',
                    description: 'Grow your business without limits. Our platform scales seamlessly as your needs evolve.',
                },
            ],
            
            // Testimonials
            testimonialsTitle: 'Loved by Teams Worldwide',
            testimonialsSubtitle: 'See what our customers have to say about their experience',
            
            testimonials: [
                {
                    quote: 'NEXORA transformed how our team collaborates. We\'ve seen a 40% increase in productivity since switching.',
                    author: 'Sarah Johnson',
                    role: 'CEO, TechStart Inc.',
                    avatar: 'SJ',
                },
                {
                    quote: 'The best investment we made this year. The ROI was evident within the first month of implementation.',
                    author: 'Michael Chen',
                    role: 'CTO, DataFlow Systems',
                    avatar: 'MC',
                },
                {
                    quote: 'Intuitive, powerful, and reliable. NEXORA has become an indispensable part of our daily workflow.',
                    author: 'Emily Rodriguez',
                    role: 'Product Manager, CloudScale',
                    avatar: 'ER',
                },
            ],
            
            // CTA Section
            ctaFinal: 'Ready to Transform Your Business?',
            ctaFinalSubtitle: 'Join thousands of teams already using NEXORA to accelerate their growth.',
            ctaButton: 'Start Your Free Trial',
        },

        // Features Page
        features: {
            title: 'Powerful Features',
            subtitle: 'Everything you need to succeed',
            description: 'Our comprehensive suite of features is designed to help you work smarter and faster.',
            features: [
                {
                    title: 'Real-Time Collaboration',
                    description: 'Work together seamlessly with real-time updates and instant notifications.',
                },
                {
                    title: 'Advanced Security',
                    description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.',
                },
                {
                    title: 'Powerful Analytics',
                    description: 'Get insights into your data with powerful analytics and reporting tools.',
                },
                {
                    title: 'API Integration',
                    description: 'Integrate with 100+ tools and services through our extensive API.',
                },
            ],
        },

        // Pricing Page
        pricing: {
            title: 'Simple, Transparent Pricing',
            subtitle: 'Choose the plan that works for you',
            description: 'No hidden fees, no surprise charges. Scale up or down anytime.',
            popular: 'Popular',
            plans: [
                {
                    name: 'Starter',
                    price: '$29',
                    period: '/month',
                    description: 'Perfect for individuals and small teams',
                    features: [
                        'Up to 5 team members',
                        'Basic analytics',
                        'Email support',
                        'Core features',
                    ],
                },
                {
                    name: 'Professional',
                    price: '$99',
                    period: '/month',
                    description: 'For growing teams',
                    features: [
                        'Up to 50 team members',
                        'Advanced analytics',
                        'Priority support',
                        'All Starter features',
                        'Custom integrations',
                    ],
                    popular: true,
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    period: 'pricing',
                    description: 'For large organizations',
                    features: [
                        'Unlimited team members',
                        'Custom analytics',
                        'Dedicated support',
                        'All Professional features',
                        'Custom deployment',
                    ],
                },
            ],
            cta: 'Start your free trial',
        },

        // Auth Pages
        auth: {
            login: {
                title: 'Welcome back',
                subtitle: 'Sign in to your account',
                email: 'Email',
                password: 'Password',
                rememberMe: 'Remember me',
                forgotPassword: 'Forgot password?',
                button: 'Sign In',
                signingIn: 'Signing in...',
                noAccount: "Don't have an account?",
                signupLink: 'Sign up for free',
            },
            signup: {
                title: 'Create your account',
                subtitle: 'Join thousands of teams using NEXORA',
                name: 'Full Name',
                email: 'Email',
                password: 'Password',
                confirmPassword: 'Confirm Password',
                agreeToTerms: 'I agree to the',
                termsOfService: 'Terms of Service',
                button: 'Create Account',
                creating: 'Creating account...',
                alreadyHaveAccount: 'Already have an account?',
                loginLink: 'Sign in',
            },
        },

        // Dashboard
        dashboard: {
            title: 'Dashboard',
            welcome: 'Welcome to your dashboard',
            overview: 'Overview',
            analytics: 'Analytics',
            settings: 'Settings',
            profile: 'Profile',
            projects: 'Projects',
            tasks: 'Tasks',
            stats: {
                totalUsers: 'Total Users',
                activeProjects: 'Active Projects',
                revenue: 'Revenue',
                pendingTasks: 'Pending Tasks',
            },
            charts: {
                revenueGrowth: 'Revenue & User Growth',
                projectsByCategory: 'Projects by Category',
                taskDistribution: 'Task Distribution',
                revenue: 'Revenue ($)',
                users: 'Users',
                completed: 'Completed',
                inProgress: 'In Progress',
            },
            recentActivity: 'Recent Activity',
            recentProjectActivities: 'Recent Project Activities',
        },

        // Common
        common: {
            loading: 'Loading...',
            error: 'Error',
            success: 'Success',
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            edit: 'Edit',
            back: 'Back',
            logOut: 'Log Out',
            or: 'OR',
            passwordStrength: {
                weak: 'Weak',
                medium: 'Medium',
                strong: 'Strong',
            },
        },
    },
    ar: {
        // Navigation
        nav: {
            home: 'الرئيسية',
            features: 'الميزات',
            pricing: 'الأسعار',
            login: 'دخول',
            getStarted: 'ابدأ الآن',
        },
        // Home Page
        home: {
            badge: '🎉 جديد: رؤى تعتمد على الذكاء الاصطناعي متاحة الآن',
            headline: 'حول عملك باستخدام NEXORA',
            subheading: 'المنصة الشاملة التي تمكن الفرق من التعاون والعمل بكفاءة وتحقيق النمو بسهولة. انضم إلى آلاف الشركات التي تحول عملياتها بالفعل.',
            cta: 'ابدأ الفترة التجريبية المجانية',
            ctaDemo: 'اعرض العرض التوضيحي',
            ctaNote: '✓ لا توجد بطاقة ائتمان مطلوبة • ✓ فترة تجريبية لمدة 14 يوماً • ✓ الإلغاء في أي وقت',
            
            // Stats
            stats: {
                users: 'مستخدمون نشطون',
                uptime: 'ضمان التوافر',
                countries: 'دول',
                rating: 'تقييم المستخدمين',
            },
            
            // Features Section
            featuresTitle: 'كل ما تحتاجه للنجاح',
            featuresSubtitle: 'ميزات قوية مصممة لتبسيط سير العمل وزيادة الإنتاجية',
            
            features: [
                {
                    icon: '⚡',
                    title: 'أداء سريع البرق',
                    description: 'استمتع بأوقات تحميل سريعة جداً وتفاعلات سلسة مدعومة بتكنولوجيا متقدمة.',
                },
                {
                    icon: '🔒',
                    title: 'أمان على مستوى المؤسسة',
                    description: 'تشفير على مستوى البنك والامتثال لـ SOC 2 وميزات أمان متقدمة لحماية بيانات',
                },
                {
                    icon: '📊',
                    title: 'تحليلات متقدمة',
                    description: 'اتخذ قرارات تعتمد على البيانات بفضل الرؤى الفورية ولوحات التقارير الشاملة.',
                },
                {
                    icon: '🔗',
                    title: 'تكاملات سلسة',
                    description: 'ربط مع أكثر من 100 أداة وخدمة من خلال نظام التكامل الشامل.',
                },
            ],
            
            // How It Works
            howTitle: 'كيف يعمل',
            howSubtitle: 'ابدأ في دقائق مع عملية بسيطة وبديهية',
            
            howSteps: [
                {
                    number: '01',
                    title: 'التسجيل في ثوانٍ',
                    description: 'أنشئ حسابك برسالة بريد إلكتروني فقط. لا توجد بطاقة ائتمان مطلوبة للفترة التجريبية لمدة 14 يوماً.',
                },
                {
                    number: '02',
                    title: 'تخصيص مساحة العمل الخاصة بك',
                    description: 'أنشئ فريقك وعرّف التفضيلات وادمج أدواتك المفضلة بسهولة.',
                },
                {
                    number: '03',
                    title: 'ابدأ التعاون',
                    description: 'قم بدعوة أعضاء الفريق والعمل معاً في الوقت الفعلي بميزات تعاون قوية.',
                },
                {
                    number: '04',
                    title: 'النمو بثقة',
                    description: 'طوّر عملك بدون حدود. تتسع منصتنا بسلاسة مع تطور احتياجاتك.',
                },
            ],
            
            // Testimonials
            testimonialsTitle: 'موثوق من قبل الفرق حول العالم',
            testimonialsSubtitle: 'اقرأ ما يقوله عملاؤنا عن تجربتهم',
            
            testimonials: [
                {
                    quote: 'غيّرت NEXORA طريقة تعاون فريقنا. لقد شهدنا زيادة بنسبة 40% في الإنتاجية منذ الانتقال إليها.',
                    author: 'سارة جونسون',
                    role: 'الرئيس التنفيذي، TechStart Inc.',
                    avatar: 'SJ',
                },
                {
                    quote: 'أفضل استثمار قمنا به هذا العام. كان العائد على الاستثمار واضحاً في الشهر الأول من التنفيذ.',
                    author: 'مايكل تشن',
                    role: 'مدير التكنولوجيا، DataFlow Systems',
                    avatar: 'MC',
                },
                {
                    quote: 'بديهية وقوية وموثوقة. أصبحت NEXORA جزءاً لا غنى عنه من سير عملنا اليومي.',
                    author: 'إميلي رودريغيز',
                    role: 'مدير المنتج، CloudScale',
                    avatar: 'ER',
                },
            ],
            
            // CTA Section
            ctaFinal: 'هل أنت مستعد لتحويل عملك؟',
            ctaFinalSubtitle: 'انضم إلى آلاف الفرق التي تستخدم NEXORA بالفعل لتسريع نموها.',
            ctaButton: 'ابدأ فترتك التجريبية المجانية',
        },

        // Features Page
        features: {
            title: 'ميزات قوية',
            subtitle: 'كل ما تحتاجه للنجاح',
            description: 'مجموعتنا الشاملة من الميزات مصممة لمساعدتك على العمل بذكاء وسرعة.',
            features: [
                {
                    title: 'التعاون في الوقت الفعلي',
                    description: 'العمل معاً بسلاسة مع التحديثات الفورية والإخطارات الفوري.',
                },
                {
                    title: 'أمان متقدم',
                    description: 'أمان على مستوى المؤسسة مع التشفير من طرف إلى طرف وشهادات الامتثال.',
                },
                {
                    title: 'تحليلات قوية',
                    description: 'احصل على رؤى حول بيانات باستخدام تحليلات قوية وأدوات تقارير.',
                },
                {
                    title: 'تكامل API',
                    description: 'التكامل مع 100+ أداة وخدمة من خلال API الشامل.',
                },
            ],
        },

        // Pricing Page
        pricing: {
            title: 'تسعير بسيط وشفاف',
            subtitle: 'اختر الخطة المناسبة لك',
            description: 'بدون رسوم مخفية، بدون تكاليف مفاجئة. يمكنك التوسع أو التقليل في أي وقت.',
            popular: 'مميزة',
            plans: [
                {
                    name: 'المبتدئ',
                    price: '29$',
                    period: '/شهر',
                    description: 'مثالي للأفراد والفرق الصغيرة',
                    features: [
                        'حتى 5 أعضاء فريق',
                        'تحليلات أساسية',
                        'دعم عبر البريد الإلكتروني',
                        'الميزات الأساسية',
                    ],
                },
                {
                    name: 'احترافي',
                    price: '99$',
                    period: '/شهر',
                    description: 'للفرق النامية',
                    features: [
                        'حتى 50 عضو فريق',
                        'تحليلات متقدمة',
                        'دعم الأولوية',
                        'جميع ميزات المبتدئ',
                        'التكاملات المخصصة',
                    ],
                    popular: true,
                },
                {
                    name: 'مؤسسي',
                    price: 'مخصص',
                    period: 'التسعير',
                    description: 'للمنظمات الكبيرة',
                    features: [
                        'عدد غير محدود من أعضاء الفريق',
                        'تحليلات مخصصة',
                        'دعم مخصص',
                        'جميع ميزات الاحترافي',
                        'نشر مخصص',
                    ],
                },
            ],
            cta: 'ابدأ فترتك التجريبية المجانية',
        },

        // Auth Pages
        auth: {
            login: {
                title: 'أهلا بعودتك',
                subtitle: 'قم بتسجيل الدخول إلى حسابك',
                email: 'البريد الإلكتروني',
                password: 'كلمة المرور',
                rememberMe: 'تذكرني',
                forgotPassword: 'هل نسيت كلمة المرور؟',
                button: 'دخول',
                signingIn: 'جارٍ تسجيل الدخول...',
                noAccount: 'ليس لديك حساب؟',
                signupLink: 'قم بالتسجيل مجاناً',
            },
            signup: {
                title: 'إنشاء حسابك',
                subtitle: 'انضم إلى آلاف الفرق التي تستخدم NEXORA',
                name: 'الاسم الكامل',
                email: 'البريد الإلكتروني',
                password: 'كلمة المرور',
                confirmPassword: 'تأكيد كلمة المرور',
                agreeToTerms: 'أوافق على',
                termsOfService: 'شروط الخدمة',
                button: 'إنشاء حساب',
                creating: 'جارٍ إنشاء الحساب...',
                alreadyHaveAccount: 'هل لديك حساب بالفعل؟',
                loginLink: 'تسجيل الدخول',
            },
        },

        // Dashboard
        dashboard: {
            title: 'لوحة التحكم',
            welcome: 'مرحبا بك في لوحة التحكم الخاصة بك',
            overview: 'نظرة عامة',
            analytics: 'التحليلات',
            settings: 'الإعدادات',
            profile: 'الملف الشخصي',
            projects: 'المشاريع',
            tasks: 'المهام',
            stats: {
                totalUsers: 'إجمالي المستخدمين',
                activeProjects: 'المشاريع النشطة',
                revenue: 'الإيرادات',
                pendingTasks: 'المهام المعلقة',
            },
            charts: {
                revenueGrowth: 'الإيرادات ونمو المستخدمين',
                projectsByCategory: 'المشاريع حسب الفئة',
                taskDistribution: 'توزيع المهام',
                revenue: 'الإيرادات ($)',
                users: 'المستخدمون',
                completed: 'مكتملة',
                inProgress: 'قيد التنفيذ',
            },
            recentActivity: 'النشاط الأخير',
            recentProjectActivities: 'أنشطة المشروع الأخيرة',
        },

        // Common
        common: {
            loading: 'جارٍ التحميل...',
            error: 'خطأ',
            success: 'نجح',
            cancel: 'إلغاء',
            save: 'حفظ',
            delete: 'حذف',
            edit: 'تحرير',
            back: 'رجوع',
            logOut: 'تسجيل الخروج',
            or: 'أو',
            passwordStrength: {
                weak: 'ضعيفة',
                medium: 'متوسطة',
                strong: 'قوية',
            },
        },
    },
};
