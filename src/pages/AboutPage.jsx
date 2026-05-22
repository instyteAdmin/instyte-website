import React, { useState, useEffect, useRef } from 'react';
import {
    Target, GraduationCap, BookOpen, DollarSign, CalendarDays, School,
    Ticket, BrainCircuit, LayoutDashboard, Smartphone, UserCircle, Globe,
    Cpu, ShieldCheck, Building2, Zap, Lock, Globe2, ArrowRight,
    Check, X, AlertTriangle, ChevronRight, Menu, LogIn, Star,
    Users, TrendingUp, Clock, Award, BarChart3, Sparkles,
    ClipboardList, Bell, Upload, Activity, BookMarked, Timer,
    Calendar, FileText, Table2, PenLine, Library, UserCheck,
    CreditCard, Receipt, Wallet, AlarmClock, PieChart, Landmark,
    QrCode, ScanLine, MessageSquare, UserPlus, BarChart2, CalendarCheck,
    MonitorPlay, CircleDot, Send, BookCopy, BarChartHorizontal, HeartPulse,
    BotMessageSquare, FlaskConical, LineChart, AlertCircle, Funnel,
    ServerCrash, Database, KeyRound, Eye, Network, Link,
    HelpCircle, Info, Leaf,
} from 'lucide-react';
import './AboutPage.css';

const LOGO = '/logo.png';

const APP_URL = 'https://app.instyte.com';
const API_URL = process.env.REACT_APP_API_URL || '';

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
    { label: 'Platform',    href: '#platform' },
    { label: 'Modules',     href: '#modules'  },
    { label: 'Why Instyte', href: '#why'      },
    { label: 'Pricing',     href: '#pricing'  },
    { label: 'Contact',     href: '#contact'  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
    { Icon: Building2, color: 'emerald', value: '50+',   label: 'Institutions'     },
    { Icon: Users,     color: 'blue',    value: '1L+',   label: 'Students Managed' },
    { Icon: Clock,     color: 'violet',  value: '99.9%', label: 'Uptime SLA'       },
    { Icon: Star,      color: 'amber',   value: '4.9',   label: 'Customer Rating'  },
];

// ─── Modules ──────────────────────────────────────────────────────────────────

const MODULES = [
    {
        Icon: DollarSign,
        color: 'amber',
        badge: 'Our Superpower',
        title: 'Finance & Fee Management',
        subtitle: 'The module most EdTech tools simply skip',
        description:
            'Most education management tools stop at admissions. Instyte goes all the way to the bank. Define multi-tier fee structures per program, batch, or scholarship category — generate invoices automatically, collect online or at the counter, issue receipts instantly, and send WhatsApp reminders before dues go overdue. Every rupee earned, waived, or pending is visible in real time across every branch.',
        features: [
            { Icon: FileText,   text: 'Multi-tier fee structures per program & batch'     },
            { Icon: CreditCard, text: 'Online + counter payment collection in one system' },
            { Icon: Receipt,    text: 'Instant digital receipts & GST-ready invoices'     },
            { Icon: AlarmClock, text: 'Automated WhatsApp & email overdue reminders'      },
            { Icon: PieChart,   text: 'Branch-wise revenue & collection dashboards'       },
            { Icon: Wallet,     text: 'Scholarship, concession & instalment tracking'     },
        ],
    },
    {
        Icon: BrainCircuit,
        color: 'indigo',
        badge: 'AI-Powered',
        title: 'AI Assistant & Analytics',
        subtitle: 'Your institution\'s always-on intelligent co-pilot',
        description:
            'Instyte AI goes far beyond a dashboard. Ask it anything in plain language — "Which leads haven\'t been followed up in 3 days?", "Show me this month\'s fee collection vs last month", "Which students are at risk of dropping out?" — and get instant answers. Behind the scenes, our AI scores every lead the moment it comes in, auto-summarises counsellor notes, and connects to external tools your team already uses (WhatsApp, calendars, CRMs) so your data flows without manual copy-paste.',
        features: [
            { Icon: BotMessageSquare, text: 'Ask anything in plain language — AI answers instantly'      },
            { Icon: HeartPulse,       text: 'Real-time lead heat scoring (who is most likely to join?)'  },
            { Icon: Sparkles,         text: 'AI auto-summarises lead notes & counsellor conversations'   },
            { Icon: Link,             text: 'Connects Instyte to tools you already use — no code needed' },
            { Icon: AlertCircle,      text: 'Student at-risk alerts before dropout happens'              },
            { Icon: LineChart,        text: 'Quick analytics: fee trends, admission funnel, attendance'  },
        ],
    },
    {
        Icon: Target,
        color: 'emerald',
        title: 'Lead Management',
        subtitle: 'Convert enquiries to admissions',
        description:
            'Full-funnel CRM built for education. Capture leads from web forms, WhatsApp, walk-ins, and referrals. AI heat scoring ranks every lead the moment it arrives, auto-assigns the right counsellor, and tracks every demo, call, and follow-up — so no prospect slips through while your team is busy.',
        features: [
            { Icon: Sparkles,      text: 'AI heat-score ranks leads by conversion likelihood' },
            { Icon: Network,       text: 'Capture from web, WhatsApp, walk-in & referral'    },
            { Icon: UserCheck,     text: 'Auto-assignment with smart round-robin rules'       },
            { Icon: CalendarCheck, text: 'Demo scheduling & multi-stage status pipeline'      },
            { Icon: Upload,        text: 'Bulk import from CSV / XLS / XLSX'                 },
            { Icon: Activity,      text: 'Full activity timeline & counsellor audit trail'   },
        ],
    },
    {
        Icon: GraduationCap,
        color: 'blue',
        title: 'Student Management',
        subtitle: 'Every student, every detail, one place',
        description:
            'Most platforms give admins a login. Instyte gives everyone one — admin, teacher, counsellor, parent, and student each get a dedicated portal tailored to exactly what they need. Manage full student profiles, guardian contacts, ID documents, medical info, communication preferences, program assignments, and track from admission through to graduation.',
        features: [
            { Icon: Users,           text: 'Dedicated portals for every role — not just admins' },
            { Icon: UserCircle,      text: 'Complete profile: guardian, medical, ID & address'  },
            { Icon: ClipboardList,   text: 'Admission workflow with quota & TC handling'        },
            { Icon: LayoutDashboard, text: 'Student self-service: marks, fees, attendance'      },
            { Icon: Upload,          text: 'Bulk enrolment via CSV / XLS / XLSX'               },
            { Icon: Award,           text: 'Graduation tracking & alumni management'            },
        ],
    },
    {
        Icon: BookOpen,
        color: 'violet',
        title: 'Academics',
        subtitle: 'Curriculum, timetable & assessments',
        description:
            'Structure academic years, define programs and batches, build timetables without clashes, schedule exams, and publish results — all in one place. Teachers mark attendance, post grades, and share resources from the same system students view their progress in, eliminating the disconnect that plagues most institutions.',
        features: [
            { Icon: CalendarDays, text: 'Academic year & term configuration'        },
            { Icon: BookCopy,     text: 'Program, course & subject catalogue'       },
            { Icon: Table2,       text: 'Timetable builder with conflict detection' },
            { Icon: PenLine,      text: 'Exam scheduling & result publishing'       },
            { Icon: Library,      text: 'Assignment & resource library'             },
            { Icon: UserCheck,    text: 'Teacher portal with attendance marking'    },
        ],
    },
    {
        Icon: School,
        color: 'cyan',
        title: 'Classroom & Learning Circles',
        subtitle: 'Where staff and students grow together',
        description:
            'Learning Circles are Instyte\'s most unique feature — collaborative groups that work for both staff and students. Teachers form subject circles to co-create lesson plans; students form study circles to share notes and solve problems together. Pair this with live class sessions, a rich study material repository, and engagement tracking, and you have a campus that learns as a community — not just a collection of individuals.',
        features: [
            { Icon: Users,              text: 'Learning Circles for staff collaboration & student study groups' },
            { Icon: MonitorPlay,        text: 'Live class session scheduling & management'                      },
            { Icon: BookOpen,           text: 'Shared study material & resource repository'                     },
            { Icon: PenLine,            text: 'Assignment submission, grading & feedback'                       },
            { Icon: Landmark,           text: 'Classroom & seating resource management'                         },
            { Icon: BarChartHorizontal, text: 'Staff & student engagement analytics'                            },
        ],
    },
    {
        Icon: CalendarDays,
        color: 'rose',
        title: 'Events & Scheduling',
        subtitle: 'Open days, demos & workshops',
        description:
            'Plan and execute institutional events end-to-end. Create public registration pages that require no login, manage RSVPs with QR wristbands, publish live session schedules, collect post-event feedback, and automatically create follow-up leads from interested attendees — turning every event into a pipeline opportunity.',
        features: [
            { Icon: Globe,         text: 'Public event registration — no login needed'   },
            { Icon: QrCode,        text: 'QR-code wristband check-in'                    },
            { Icon: CalendarCheck, text: 'Live session schedule & timetable display'     },
            { Icon: MessageSquare, text: 'Post-event feedback collection'                },
            { Icon: UserPlus,      text: 'Auto lead creation from attendee registrations'},
            { Icon: BarChart2,     text: 'Attendance, capacity & conversion reporting'   },
        ],
    },
    {
        Icon: Ticket,
        color: 'orange',
        title: 'Support Tickets',
        subtitle: 'Professional helpdesk for your institution',
        description:
            'Students, parents, and staff all get a structured channel to raise issues — from fee queries to academic complaints. Assign tickets to the right team member, set resolution SLAs, track every conversation, and escalate priority issues automatically. Turn reactive firefighting into a transparent, measurable support operation.',
        features: [
            { Icon: ClipboardList, text: 'Students, parents & staff can all raise tickets'  },
            { Icon: UserCheck,     text: 'Staff assignment with SLA timers'                 },
            { Icon: CircleDot,     text: 'Status pipeline: Open → In Progress → Resolved'  },
            { Icon: MessageSquare, text: 'Internal notes & full conversation history'       },
            { Icon: Bell,          text: 'Automatic priority escalation rules'              },
            { Icon: Timer,         text: 'Resolution-time reporting & SLA compliance'       },
        ],
    },
];

// ─── Why / Differentiators ────────────────────────────────────────────────────

const DIFFERENTIATORS = [
    {
        Icon: DollarSign,
        color: 'amber',
        title: 'Finance Built In — Not Bolted On',
        body: 'Most education management tools end at admissions. Instyte includes a full fee lifecycle — structures, invoices, collections, receipts, and overdue reminders — in the same system. No separate accounting tool. No reconciliation nightmare.',
    },
    {
        Icon: BrainCircuit,
        color: 'indigo',
        title: 'AI You Can Actually Talk To',
        body: 'Other platforms show you dashboards and expect you to interpret them. Instyte\'s AI lets you ask questions in plain English and get real answers instantly — "who are my top 10 hot leads?", "how much fee is overdue this month?", "which students missed class 3 days in a row?" — no training required.',
    },
    {
        Icon: Users,
        color: 'blue',
        title: 'A Login for Everyone, Not Just Admins',
        body: 'Most tools give admins and teachers access and leave everyone else out. Instyte gives every person in your institution their own tailored portal — admins, branch managers, counsellors, teachers, students, and parents all log in to see exactly what they need and nothing more.',
    },
    {
        Icon: School,
        color: 'cyan',
        title: 'Learning Circles — Unique to Instyte',
        body: 'No other platform offers Learning Circles. Teachers form subject circles to co-create lesson plans and share teaching strategies. Students form study circles to collaborate on assignments. Both staff growth and student peer learning happen inside the same platform.',
    },
    {
        Icon: Building2,
        color: 'emerald',
        title: 'True Multi-Branch, Multi-Tenant',
        body: 'Each institution runs in a completely isolated database schema — no shared tables, no data bleed between tenants. Branch managers see only their branch. Owners see everything. Scale from 1 branch to 100 without re-architecting anything.',
    },
    {
        Icon: ShieldCheck,
        color: 'rose',
        title: 'Security That Enterprise Clients Demand',
        body: 'JWT-based authentication, schema-level data isolation, granular role-based access, and a full audit log on every change. Every login, every edit, every deletion is traceable — meeting compliance requirements that institutions increasingly face.',
    },
];

// ─── Platform arch cards ──────────────────────────────────────────────────────

const ARCH_CARDS = [
    { Icon: LayoutDashboard, color: 'emerald', title: 'Admin & Branch Dashboard', body: 'Full-control web app for admins and branch managers — leads, students, finance, staff, and analytics in one pane of glass.' },
    { Icon: Smartphone,      color: 'blue',    title: 'Mobile App',               body: 'Native Flutter app for counsellors and teachers. Attend to leads, mark attendance, and collect fees on the go — works even with spotty connectivity.' },
    { Icon: GraduationCap,   color: 'violet',  title: 'Student & Parent Portal',  body: 'Students check marks, attendance, fee dues, and class schedules. Parents track their child\'s progress and raise support tickets — all without calling the office.' },
    { Icon: Globe,           color: 'cyan',    title: 'Public Landing Pages',     body: 'No-login pages for lead capture, event registration, demo booking, and post-event feedback. Every visitor is a potential admission.' },
    { Icon: Cpu,             color: 'indigo',  title: 'AI Microservice',          body: 'Dedicated AI engine running XGBoost lead scoring and a conversational assistant — answers questions, surfaces insights, and connects to external tools automatically.' },
    { Icon: KeyRound,        color: 'amber',   title: 'Owner Console',            body: 'Super-admin portal for onboarding institutions, managing tenant settings, syncing value mappings, and monitoring system health across all clients.' },
];

// ─── Comparison table ─────────────────────────────────────────────────────────

const CMP_ROWS = [
    ['Built-in finance & fee collection',                            'yes', 'no',      'partial'],
    ['AI chat — ask questions in plain language',                    'yes', 'no',      'no'     ],
    ['AI lead heat scoring on every new lead',                       'yes', 'no',      'no'     ],
    ['Dedicated login for every role (incl. parents & students)',    'yes', 'partial', 'no'     ],
    ['Learning Circles for staff & students',                        'yes', 'no',      'no'     ],
    ['Student lifecycle (Admission → Alumni)',                        'yes', 'partial', 'no'     ],
    ['Multi-branch with schema-level isolation',                     'yes', 'partial', 'no'     ],
    ['Native mobile app (Flutter)',                                  'yes', 'partial', 'no'     ],
    ['Public no-login lead capture & event pages',                   'yes', 'partial', 'no'     ],
    ['Support ticket system for students & parents',                 'yes', 'partial', 'no'     ],
];

function CmpCell({ val }) {
    if (val === 'yes')     return <span className="cmp-yes"><Check size={14} /> Yes</span>;
    if (val === 'partial') return <span className="cmp-partial"><AlertTriangle size={14} /> Partial</span>;
    return                        <span className="cmp-no"><X size={14} /> No</span>;
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const PRICING_PLANS = [
    {
        name: 'Starter',
        price: '₹4,999',
        period: '/month',
        color: 'emerald',
        description: 'Perfect for single-branch coaching centres just getting started.',
        features: [
            'Up to 500 active students',
            'Lead CRM & admissions',
            'Basic fee management',
            'Student & teacher portal',
            'Email & WhatsApp notifications',
            'Standard support',
        ],
        cta: 'Start Free Trial',
        highlighted: false,
    },
    {
        name: 'Growth',
        price: '₹12,999',
        period: '/month',
        color: 'blue',
        description: 'For growing institutions with multiple branches and advanced needs.',
        features: [
            'Up to 3,000 active students',
            'Everything in Starter',
            'Multi-branch management',
            'AI lead scoring & insights',
            'Events & scheduling module',
            'Support ticket system',
            'Finance & fee analytics',
            'Priority support',
        ],
        cta: 'Get Started',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        color: 'violet',
        description: 'For large institutions, universities, and groups with complex requirements.',
        features: [
            'Unlimited students',
            'Everything in Growth',
            'Custom integrations & APIs',
            'Dedicated onboarding team',
            'SLA-backed uptime guarantee',
            'Custom ML model training',
            'White-labelling available',
            'Dedicated account manager',
        ],
        cta: 'Contact Sales',
        highlighted: false,
    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
    const [scrolled,       setScrolled]       = useState(false);
    const [activeModule,   setActiveModule]   = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [contactForm,    setContactForm]    = useState({ name: '', email: '', phone: '', organization: '', message: '' });
    const [contactState,   setContactState]   = useState('idle'); // idle | submitting | success | error
    const heroRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href) => {
        setMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const goToApp = () => { window.location.href = APP_URL; };

    const submitEnquiry = async (e) => {
        e.preventDefault();
        setContactState('submitting');
        try {
            await fetch(`${API_URL}/instyte/api/v1/public/customer-enquiry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...contactForm, source: 'www.instyte.com' }),
            });
            setContactState('success');
            setContactForm({ name: '', email: '', phone: '', organization: '', message: '' });
        } catch {
            setContactState('error');
        }
    };

    const ActiveModIcon = MODULES[activeModule].Icon;

    return (
        <div className="about-root">

            {/* ── Nav ───────────────────────────────────────────────────── */}
            <nav className={`about-nav ${scrolled ? 'about-nav--scrolled' : ''}`}>
                <div className="about-nav-inner">
                    <a href="#hero" className="about-nav-brand"
                        onClick={e => { e.preventDefault(); scrollTo('#hero'); }}>
                        <img src={LOGO} alt="Instyte" className="about-nav-logo"
                            onError={e => e.target.style.display = 'none'} />
                        <span className="about-nav-name">Instyte</span>
                    </a>

                    <ul className={`about-nav-links ${mobileMenuOpen ? 'about-nav-links--open' : ''}`}>
                        {NAV_LINKS.map(l => (
                            <li key={l.label}>
                                <a href={l.href} className="about-nav-link"
                                    onClick={e => { e.preventDefault(); scrollTo(l.href); }}>
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className="about-nav-cta" onClick={goToApp}>
                                <LogIn size={14} /> Log in
                            </button>
                        </li>
                    </ul>

                    <button className="about-hamburger"
                        onClick={() => setMobileMenuOpen(p => !p)}
                        aria-label="Toggle menu">
                        <Menu size={22} />
                    </button>
                </div>
            </nav>

            {/* ── Hero ──────────────────────────────────────────────────── */}
            <section id="hero" className="about-hero" ref={heroRef}>
                <div className="about-hero-bg" />
                <div className="about-hero-inner">
                    <div className="about-hero-badge">
                        <Sparkles size={13} />
                        Purpose-built for education
                    </div>
                    <h1 className="about-hero-heading">
                        The complete operating system<br />
                        <span className="about-hero-gradient">for modern educational institutions</span>
                    </h1>
                    <p className="about-hero-sub">
                        Most EdTech tools handle admissions — and stop there. Instyte goes further: built-in finance,
                        AI you can talk to, Learning Circles for staff and students, and a dedicated login for every
                        person in your organisation. One platform. Zero gaps.
                    </p>
                    <div className="about-hero-actions">
                        <button className="about-btn-primary" onClick={goToApp}>
                            <LogIn size={16} /> Log in to your institution
                        </button>
                        <button className="about-btn-ghost" onClick={() => scrollTo('#modules')}>
                            Explore modules <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className="about-stats">
                        {STATS.map(({ Icon: SI, color, value, label }) => (
                            <div key={label} className="about-stat">
                                <div className={`about-stat-icon-wrap about-icon-bg--${color}`}>
                                    <SI size={18} />
                                </div>
                                <span className={`about-stat-value about-stat-value--${color}`}>{value}</span>
                                <span className="about-stat-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Platform Overview ─────────────────────────────────────── */}
            <section id="platform" className="about-section about-section--alt">
                <div className="about-section-inner">
                    <div className="about-section-label">
                        <LayoutDashboard size={13} /> The Platform
                    </div>
                    <h2 className="about-section-heading">Every tool your institution needs, in one place</h2>
                    <p className="about-section-sub">
                        Instyte is a schema-isolated multi-tenant SaaS platform built on Spring Boot and React.
                        Each institution gets its own isolated data environment, role-based access, and a mobile app —
                        without any of the complexity of managing infrastructure.
                    </p>

                    <div className="about-arch-grid">
                        {ARCH_CARDS.map(({ Icon: AI, color, title, body }) => (
                            <div key={title} className="about-arch-card">
                                <div className={`about-arch-icon-wrap about-icon-bg--${color}`}>
                                    <AI size={22} />
                                </div>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Spotlight: Finance + AI ───────────────────────────────── */}
            <section className="about-spotlight">
                <div className="about-section-inner">
                    <div className="about-spotlight-grid">

                        <div className="about-spotlight-card about-spotlight-card--amber">
                            <div className="about-spotlight-card-icon about-icon-bg--amber">
                                <DollarSign size={28} />
                            </div>
                            <div className="about-spotlight-label">
                                <Sparkles size={12} /> Most EdTech tools skip this
                            </div>
                            <h3 className="about-spotlight-title">Finance is not an afterthought</h3>
                            <p className="about-spotlight-body">
                                Many education management tools handle admissions beautifully — then leave you
                                with a spreadsheet for fees. Instyte includes a complete fee lifecycle in the same platform:
                                flexible structures, automated invoicing, online and counter payments, digital receipts, and
                                WhatsApp reminders before dues go overdue. No reconciliation. No separate accounting tool.
                                No manual matching.
                            </p>
                            <ul className="about-spotlight-list">
                                <li><Check size={13} className="about-spotlight-check--amber" /> Multi-tier fee structures per program, batch & scholarship</li>
                                <li><Check size={13} className="about-spotlight-check--amber" /> Online + offline payment in one system</li>
                                <li><Check size={13} className="about-spotlight-check--amber" /> Auto overdue reminders via WhatsApp & email</li>
                                <li><Check size={13} className="about-spotlight-check--amber" /> Branch-wise revenue dashboards in real time</li>
                            </ul>
                        </div>

                        <div className="about-spotlight-card about-spotlight-card--indigo">
                            <div className="about-spotlight-card-icon about-icon-bg--indigo">
                                <BrainCircuit size={28} />
                            </div>
                            <div className="about-spotlight-label">
                                <Sparkles size={12} /> AI that works for you
                            </div>
                            <h3 className="about-spotlight-title">AI you can talk to — and that talks back to your tools</h3>
                            <p className="about-spotlight-body">
                                Most platforms show you dashboards and expect you to figure out the rest. Instyte's AI lets
                                you ask questions in plain language and get real answers: <em>"Which leads haven't been called
                                in 3 days?"</em>, <em>"How much fee is overdue this month?"</em>, <em>"Which students have
                                missed class twice this week?"</em> — and it acts on the answer. It also connects Instyte
                                to the tools your team already uses — WhatsApp, calendars, Google Sheets, or your CRM —
                                automatically, without writing a single line of code.
                            </p>
                            <ul className="about-spotlight-list">
                                <li><Check size={13} className="about-spotlight-check--indigo" /> Ask anything, get instant answers — no training needed</li>
                                <li><Check size={13} className="about-spotlight-check--indigo" /> AI scores every lead the moment it arrives</li>
                                <li><Check size={13} className="about-spotlight-check--indigo" /> Auto-connects to WhatsApp, calendars & external tools</li>
                                <li><Check size={13} className="about-spotlight-check--indigo" /> Student at-risk alerts before dropout happens</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Modules ───────────────────────────────────────────────── */}
            <section id="modules" className="about-section">
                <div className="about-section-inner">
                    <div className="about-section-label">
                        <BookOpen size={13} /> Modules
                    </div>
                    <h2 className="about-section-heading">Eight modules. Zero gaps.</h2>
                    <p className="about-section-sub">
                        From the first enquiry to the last receipt — and every class, exam, and support ticket in between.
                        Everything is connected, so your team never has to re-enter data or switch tools.
                    </p>

                    <div className="about-modules-layout">
                        <div className="about-modules-tabs">
                            {MODULES.map((m, i) => {
                                const MI = m.Icon;
                                return (
                                    <button
                                        key={m.title}
                                        className={`about-module-tab ${activeModule === i
                                            ? `about-module-tab--active about-module-tab--${m.color}`
                                            : ''}`}
                                        onClick={() => setActiveModule(i)}>
                                        <MI size={16} className="about-module-tab-icon" />
                                        <span className="about-module-tab-label">{m.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className={`about-module-detail about-module-detail--${MODULES[activeModule].color}`}>
                            <div className="about-module-detail-header">
                                <div className={`about-module-detail-icon-wrap about-module-icon-bg--${MODULES[activeModule].color}`}>
                                    <ActiveModIcon size={28} />
                                </div>
                                <div>
                                    {MODULES[activeModule].badge && (
                                        <span className={`about-module-badge about-module-badge--${MODULES[activeModule].color}`}>
                                            <Sparkles size={11} /> {MODULES[activeModule].badge}
                                        </span>
                                    )}
                                    <h3 className="about-module-detail-title">{MODULES[activeModule].title}</h3>
                                    <p className="about-module-detail-subtitle">{MODULES[activeModule].subtitle}</p>
                                </div>
                            </div>
                            <p className="about-module-detail-desc">{MODULES[activeModule].description}</p>
                            <ul className="about-module-features">
                                {MODULES[activeModule].features.map(({ Icon: FI, text }) => (
                                    <li key={text}>
                                        <FI size={14} className={`about-feature-icon about-feature-icon--${MODULES[activeModule].color}`} />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Instyte ───────────────────────────────────────────── */}
            <section id="why" className="about-section about-section--alt">
                <div className="about-section-inner">
                    <div className="about-section-label">
                        <Award size={13} /> Why Instyte
                    </div>
                    <h2 className="about-section-heading">What every other EdTech tool is missing</h2>
                    <p className="about-section-sub">
                        We focused on the gaps that most education platforms leave open —
                        and built tools that actually close them.
                    </p>

                    <div className="about-diff-grid">
                        {DIFFERENTIATORS.map(({ Icon: DI, color, title, body }) => (
                            <div key={title} className="about-diff-card">
                                <div className={`about-diff-icon-wrap about-icon-bg--${color}`}>
                                    <DI size={22} />
                                </div>
                                <h3 className="about-diff-title">{title}</h3>
                                <p className="about-diff-body">{body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="about-compare">
                        <h3 className="about-compare-heading">Instyte vs. the alternatives</h3>
                        <div className="about-compare-scroll">
                            <table className="about-compare-table">
                                <thead>
                                    <tr>
                                        <th>Capability</th>
                                        <th className="about-compare-us">Instyte</th>
                                        <th>Generic CRM</th>
                                        <th>Spreadsheets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CMP_ROWS.map(([cap, us, generic, sheets]) => (
                                        <tr key={cap}>
                                            <td>{cap}</td>
                                            <td className="about-compare-us"><CmpCell val={us} /></td>
                                            <td><CmpCell val={generic} /></td>
                                            <td><CmpCell val={sheets} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Pricing ───────────────────────────────────────────────── */}
            <section id="pricing" className="about-section">
                <div className="about-section-inner">
                    <div className="about-section-label">
                        <CreditCard size={13} /> Pricing
                    </div>
                    <h2 className="about-section-heading">Transparent, education-friendly pricing</h2>
                    <p className="about-section-sub">
                        No per-seat chaos. Simple plans based on student count — switch or cancel any time.
                    </p>

                    <div className="about-pricing-grid">
                        {PRICING_PLANS.map(plan => (
                            <div key={plan.name}
                                className={`about-pricing-card ${plan.highlighted ? 'about-pricing-card--highlighted' : ''} about-pricing-card--${plan.color}`}>
                                {plan.highlighted && (
                                    <div className="about-pricing-badge">
                                        <Star size={11} /> Most Popular
                                    </div>
                                )}
                                <div className="about-pricing-name">{plan.name}</div>
                                <div className="about-pricing-price">
                                    {plan.price}
                                    {plan.period && <span className="about-pricing-period">{plan.period}</span>}
                                </div>
                                <p className="about-pricing-desc">{plan.description}</p>
                                <ul className="about-pricing-features">
                                    {plan.features.map(f => (
                                        <li key={f}>
                                            <Check size={13} className="about-pricing-check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`about-pricing-btn about-pricing-btn--${plan.color} ${plan.highlighted ? 'about-pricing-btn--solid' : ''}`}
                                    onClick={goToApp}>
                                    {plan.cta} <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact Us ────────────────────────────────────────────── */}
            <section id="contact" className="about-contact">
                <div className="about-contact-inner">
                    <div className="about-contact-left">
                        <h2 className="about-section-label">Get in Touch</h2>
                        <p className="about-contact-heading">Want to see Instyte in action?</p>
                        <p className="about-contact-body">
                            We'd love to show you how Instyte can work for your institution.
                            Drop us a message and we'll get back to you within one business day.
                        </p>
                        <div className="about-contact-info">
                            <div className="about-contact-info-item">
                                <div className="about-icon-bg about-icon-bg--emerald" style={{ width: 34, height: 34, borderRadius: 8 }}>
                                    <Send size={16} />
                                </div>
                                <span>hello@instyte.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-contact-right">
                        {contactState === 'success' ? (
                            <div className="about-contact-success">
                                <Check size={32} />
                                <h3>Message received!</h3>
                                <p>We'll be in touch within one business day.</p>
                                <button className="about-btn-secondary" onClick={() => setContactState('idle')}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="about-contact-form" onSubmit={submitEnquiry}>
                                <div className="about-contact-row">
                                    <div className="about-contact-field">
                                        <label>Your name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Jane Smith"
                                            value={contactForm.name}
                                            onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                                        />
                                    </div>
                                    <div className="about-contact-field">
                                        <label>Organization</label>
                                        <input
                                            type="text"
                                            placeholder="Your school / institute name"
                                            value={contactForm.organization}
                                            onChange={e => setContactForm(f => ({ ...f, organization: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                <div className="about-contact-row">
                                    <div className="about-contact-field">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={contactForm.email}
                                            onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                                        />
                                    </div>
                                    <div className="about-contact-field">
                                        <label>Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={contactForm.phone}
                                            onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                <div className="about-contact-field">
                                    <label>Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your institution and what you're looking for…"
                                        value={contactForm.message}
                                        onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                                    />
                                </div>
                                {contactState === 'error' && (
                                    <p className="about-contact-error">
                                        <AlertTriangle size={14} /> Something went wrong — please try again or email us directly.
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    className="about-btn-primary about-contact-submit"
                                    disabled={contactState === 'submitting'}
                                >
                                    {contactState === 'submitting'
                                        ? 'Sending…'
                                        : <><Send size={16} /> Send message</>
                                    }
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ────────────────────────────────────────────── */}
            <section className="about-cta-banner">
                <div className="about-cta-inner">
                    <h2 className="about-cta-heading">Ready to transform your institution?</h2>
                    <p className="about-cta-sub">
                        Join 50+ institutions already using Instyte to manage admissions, academics, and finance —
                        all in one place.
                    </p>
                    <button className="about-btn-primary about-btn-primary--lg" onClick={goToApp}>
                        <LogIn size={18} /> Log in to your institution
                    </button>
                </div>
            </section>

            {/* ── Footer ────────────────────────────────────────────────── */}
            <footer className="about-footer">
                <div className="about-footer-inner">
                    <div className="about-footer-brand">
                        <img src={LOGO} alt="Instyte" className="about-footer-logo"
                            onError={e => e.target.style.display = 'none'} />
                        <span className="about-footer-name">Instyte</span>
                    </div>
                    <div className="about-footer-links">
                        {NAV_LINKS.map(l => (
                            <a key={l.label} href={l.href} className="about-footer-link"
                                onClick={e => { e.preventDefault(); scrollTo(l.href); }}>
                                {l.label}
                            </a>
                        ))}
                        <a href={APP_URL} className="about-footer-link">Login</a>
                    </div>
                    <div className="about-footer-copy">
                        &copy; {new Date().getFullYear()} Instyte. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
}
