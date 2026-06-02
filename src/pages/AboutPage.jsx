import React, { useState, useEffect, useRef } from 'react';
import {
    Target, GraduationCap, BookOpen, DollarSign, CalendarDays, School,
    Ticket, BrainCircuit, LayoutDashboard, Smartphone, UserCircle, Globe,
    Cpu, ShieldCheck, Building2, ArrowRight,
    Check, X, AlertTriangle, ChevronRight, Menu, Star,
    Users, Clock, Award, Sparkles,
    ClipboardList, Bell, Upload, Activity, Timer,
    FileText, Table2, PenLine, Library, UserCheck,
    CreditCard, Receipt, Wallet, AlarmClock, PieChart, Landmark,
    QrCode, MessageSquare, UserPlus, BarChart2, CalendarCheck,
    MonitorPlay, CircleDot, Send, BookCopy, BarChartHorizontal, HeartPulse,
    BotMessageSquare, LineChart, AlertCircle,
    KeyRound, Network, Link,
    ThumbsUp, CalendarOff, TrendingUp, BadgeCheck, ClipboardCheck, Briefcase,
    BedDouble, Calculator, Tag, Zap, ScrollText,
} from 'lucide-react';
import './AboutPage.css';

const LOGO = '/logo.png';

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
    { Icon: Users,     color: 'blue',    value: '10k+',  label: 'Users'            },
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
    {
        Icon: Briefcase,
        color: 'teal',
        title: 'Teacher & Staff Management',
        subtitle: 'Know your team — track presence, performance & feedback',
        description:
            'Instyte keeps teacher and staff management firmly in the CRM lane — no payroll, no HR bloat. What it does cover is everything that matters for running a tight academic operation: who\'s present, who\'s on leave, how each class is rated by students, and how individual teachers are performing over time. Every class a teacher conducts can collect student feedback automatically, giving you a consistent, bias-free picture of teaching quality that\'s hard to get any other way.',
        features: [
            { Icon: CalendarCheck,   text: 'Daily attendance marking for teaching & non-teaching staff' },
            { Icon: CalendarOff,     text: 'Leave requests, approvals & leave balance tracking'         },
            { Icon: ThumbsUp,        text: 'Per-class student feedback collected automatically'         },
            { Icon: TrendingUp,      text: 'Teacher performance dashboard — ratings over time'          },
            { Icon: BadgeCheck,      text: 'Staff profiles: qualifications, subjects, assigned batches' },
            { Icon: ClipboardCheck,  text: 'Class completion tracking & session notes'                  },
        ],
    },
    {
        Icon: BedDouble,
        color: 'teal',
        badge: 'Paid Add-on',
        title: 'Hostel Management',
        subtitle: 'Full hostel & PG operations — buildings, rooms, residents & more',
        description:
            'Instyte Hostel Management is built for both institutional hostels (boarding schools, college hostels) and standalone PGs. Manage multiple buildings, floors, rooms, and beds. Track resident allocations with full history, automate monthly fee generation, issue keys, and run onboarding checklists. Feature-flagged activities — daily attendance, outings/gate pass, mess, visitors, complaints, warden inspections — can be switched on or off per institution type. For PG businesses, adds vacating workflows, notice periods, security deposit handling, and resident document management.',
        features: [
            { Icon: Building2,    text: 'Multi-building, multi-room, bed-level allocation with history' },
            { Icon: Users,        text: 'Resident profiles linked to IAM — works for students & PG tenants' },
            { Icon: DollarSign,   text: 'Auto monthly fee generation via existing finance module'       },
            { Icon: KeyRound,     text: 'Key / access card issuance, lost key & replacement tracking'  },
            { Icon: ClipboardList,text: 'Onboarding checklist — ID, deposit, agreement, room condition' },
            { Icon: Sparkles,     text: 'Feature-flagged: attendance, outings, mess, visitors, complaints' },
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

// ─── Screenshot gallery ────────────────────────────────────────────────────

const GALLERY_TABS = [
    { key: 'dashboard',  label: 'AI Dashboard',     desc: 'Finance AI answers questions in plain language', src: '/screens/dashboard-ai.png',      color: 'indigo'  },
    { key: 'finance',    label: 'Finance Overview',  desc: 'Branch-wise revenue & collection in real time',  src: '/screens/finance-dashboard.png', color: 'amber'   },
    { key: 'invoices',   label: 'Invoices',          desc: 'Full fee lifecycle — every rupee tracked',        src: '/screens/invoices.png',          color: 'emerald' },
    { key: 'invoice',    label: 'Invoice Detail',    desc: 'GST-ready invoices with instalment schedule',    src: '/screens/invoice-detail.png',    color: 'orange'  },
    { key: 'student',    label: 'Student Profile',   desc: 'Complete record — enrollment, fees, academics',  src: '/screens/student-profile.png',   color: 'blue'    },
    { key: 'enrollment', label: 'Enrollment',        desc: 'Academic config, timetable, subjects in one view',src: '/screens/student-enrollment.png',color: 'violet'  },
    { key: 'enr-detail', label: 'Enrollment Detail', desc: 'Classroom details, faculty, schedule & dates',   src: '/screens/enrollment-detail.png', color: 'cyan'    },
];

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

// ─── Paid add-on modules (used in calculator + pricing hero) ─────────────────

const PAID_ADDONS = [
    {
        id: 'leads',
        Icon: Target,
        color: 'emerald',
        label: 'Lead Management',
        price: 2199,
        desc: 'CRM, enquiry pipeline, demo scheduling, counsellor assignment',
    },
    {
        id: 'finance',
        Icon: DollarSign,
        color: 'amber',
        label: 'Finance & Fees',
        price: 2599,
        desc: 'Fee structures, invoicing, payments, receipts, overdue reminders',
    },
    {
        id: 'ai',
        Icon: BrainCircuit,
        color: 'indigo',
        label: 'AI Assistant',
        price: 1999,
        desc: 'Conversational AI, lead heat scoring, at-risk alerts, integrations',
    },
    {
        id: 'hostel',
        Icon: BedDouble,
        color: 'teal',
        label: 'Hostel Management',
        price: 2599,
        desc: 'Buildings, rooms, beds, allocations, fee automation & feature-flagged activities',
        badge: 'New',
    },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────

const PRICING_PLANS = [
    {
        name: 'Foundation',
        tagline: 'For single-branch institutions getting started',
        price: 6999,
        period: '/month',
        color: 'emerald',
        description: 'Everything a running institution needs — student records, academics, classes, events, and support. Out of the box, on day one.',
        userLimit: 'Up to 100 active users',
        features: [
            'Up to 100 active users',
            'Student & teacher portal',
            'Academics & timetable',
            'Classroom & Learning Circles',
            'Events & scheduling',
            'Support ticket system',
            'Email & WhatsApp notifications',
            'Standard support',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Momentum',
        tagline: 'For growing institutions with multi-branch needs',
        price: 8999,
        period: '/month',
        color: 'blue',
        description: 'Everything in Foundation plus multi-branch management. Add the modules you need — Leads, Finance, AI, Hostel — only when you\'re ready.',
        userLimit: 'Up to 500 active users',
        features: [
            'Up to 500 active users',
            'Everything in Foundation',
            'Multi-branch management',
            'Priority support',
            'Advanced analytics & reporting',
        ],
        cta: 'Get Started',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        tagline: 'For large groups, universities & complex requirements',
        price: null,
        period: '',
        color: 'violet',
        description: 'Unlimited scale. Custom integrations. Dedicated onboarding and SLA-backed uptime. Built around your institution.',
        userLimit: 'Unlimited users',
        features: [
            'Unlimited users & branches',
            'Everything in Momentum',
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

// ─── Interactive Pricing Calculator ──────────────────────────────────────────

function PricingCalculator({ onSelectPlan }) {
    const [basePlan, setBasePlan] = useState('foundation');
    const [selectedAddons, setSelectedAddons] = useState(new Set());
    const [open, setOpen] = useState(false);

    const BASE_PLANS = [
        { id: 'foundation', name: 'Foundation', price: 6999, users: '100 users',  color: 'emerald', bundleTarget: 12999 },
        { id: 'momentum',   name: 'Momentum',   price: 8999, users: '500 users',  color: 'blue',    bundleTarget: 14999 },
    ];

    const toggleAddon = (id) => {
        setSelectedAddons(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const base = BASE_PLANS.find(p => p.id === basePlan);
    const addons = PAID_ADDONS.filter(a => selectedAddons.has(a.id));
    const addonTotal = addons.reduce((s, a) => s + a.price, 0);

    // When all 4 addons selected, discount is exactly (base + addonTotal - bundleTarget)
    // For fewer addons, scale the discount proportionally: 2=15%, 3=25%, 4=exact bundle saving
    const allAddonTotal = PAID_ADDONS.reduce((s, a) => s + a.price, 0); // 9396
    const maxSaving = base.price + allAddonTotal - base.bundleTarget;    // exact bundle saving

    let discountAmt = 0;
    if (addons.length === 4) {
        discountAmt = maxSaving; // exact — guaranteed to hit bundleTarget
    } else if (addons.length === 3) {
        discountAmt = Math.round(addonTotal * 0.25);
    } else if (addons.length === 2) {
        discountAmt = Math.round(addonTotal * 0.15);
    }
    const discountPct = addonTotal > 0 && discountAmt > 0
        ? Math.round(discountAmt / addonTotal * 100)
        : 0;
    const finalTotal = base.price + addonTotal - discountAmt;

    const planLabel = [
        base.name,
        ...addons.map(a => a.label),
    ].join(' + ');

    const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`;

    const handleContact = () => {
        onSelectPlan(planLabel);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="calc-wrap" data-animate="fade-up">
            <button className="calc-header" onClick={() => setOpen(o => !o)}>
                <div className="calc-header-icon"><Calculator size={18} /></div>
                <div className="calc-header-text">
                    <h3 className="calc-title">Build your own plan</h3>
                    <p className="calc-subtitle">Pick a base plan, add only what you need, see your price instantly.</p>
                </div>
                <ChevronRight size={18} className={`calc-header-chevron ${open ? 'calc-header-chevron--open' : ''}`} />
            </button>

            {open && (
            <div className="calc-body">
                {/* Step 1 — Base plan */}
                <div className="calc-step">
                    <div className="calc-step-label"><span>1</span> Choose your base plan</div>
                    <div className="calc-base-options">
                        {BASE_PLANS.map(p => (
                            <button
                                key={p.id}
                                className={`calc-base-card ${basePlan === p.id ? `calc-base-card--active calc-base-card--${p.color}` : ''}`}
                                onClick={() => setBasePlan(p.id)}
                            >
                                <div className="calc-base-card-top">
                                    <div className="calc-base-name">{p.name}</div>
                                    {basePlan === p.id && <Check size={14} className="calc-base-check" />}
                                </div>
                                <div className="calc-base-price">{formatINR(p.price)}<span>/mo</span></div>
                                <div className="calc-base-users">{p.users}</div>
                                <div className="calc-base-includes">
                                    5 core modules included
                                    {p.id === 'momentum' && ' · Multi-branch'}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Step 2 — Add-ons */}
                <div className="calc-step">
                    <div className="calc-step-label">
                        <span>2</span> Add paid modules
                        <em>Only pay for what you turn on</em>
                    </div>
                    <div className="calc-addons">
                        {PAID_ADDONS.map(a => {
                            const active = selectedAddons.has(a.id);
                            return (
                                <button
                                    key={a.id}
                                    className={`calc-addon ${active ? `calc-addon--active calc-addon--${a.color}` : ''}`}
                                    onClick={() => toggleAddon(a.id)}
                                >
                                    <div className={`calc-addon-icon about-icon-bg--${a.color}`}>
                                        <a.Icon size={14} />
                                    </div>
                                    <div className="calc-addon-info">
                                        <div className="calc-addon-name">
                                            {a.label}
                                            {a.badge && <span className="calc-addon-badge">{a.badge}</span>}
                                        </div>
                                        <div className="calc-addon-desc">{a.desc}</div>
                                    </div>
                                    <div className="calc-addon-price">
                                        {active
                                            ? <><Check size={12} /> {formatINR(a.price)}/mo</>
                                            : <>+ {formatINR(a.price)}/mo</>
                                        }
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                            {discountPct > 0 && (
                                <div className="calc-offer-banner">
                                    <Zap size={14} />
                                    {addons.length >= 4
                                        ? <><strong>All 4 modules — 36% bundle discount</strong> applied. You save {formatINR(discountAmt)}/mo.</>
                                        : addons.length === 3
                                        ? <><strong>3 modules — 25% discount</strong> applied. Add one more for 36%. You save {formatINR(discountAmt)}/mo.</>
                                        : <><strong>2 modules — 15% discount</strong> applied. Add more to unlock bigger savings. You save {formatINR(discountAmt)}/mo.</>
                                    }
                                </div>
                            )}
                </div>

                {/* Step 3 — Summary */}
                <div className="calc-step calc-step--summary">
                    <div className="calc-step-label"><span>3</span> Your price</div>
                    <div className="calc-summary">
                        <div className="calc-summary-rows">
                            <div className="calc-summary-row">
                                <span>{base.name} base plan ({base.users})</span>
                                <strong>{formatINR(base.price)}/mo</strong>
                            </div>
                            {addons.map(a => (
                                <div key={a.id} className="calc-summary-row calc-summary-row--addon">
                                    <span>+ {a.label}</span>
                                    <strong>{formatINR(a.price)}/mo</strong>
                                </div>
                            ))}
                            {discountAmt > 0 && (
                                <div className="calc-summary-row calc-summary-row--save">
                                    <span>Bundle discount ({discountPct}% on add-ons)</span>
                                    <strong>− {formatINR(discountAmt)}/mo</strong>
                                </div>
                            )}
                            <div className="calc-summary-divider" />
                            <div className="calc-summary-row calc-summary-row--total">
                                <span>Total per month</span>
                                <strong className="calc-total-price">{formatINR(finalTotal)}</strong>
                            </div>
                        </div>
                        <div className="calc-summary-actions">
                            <button className="about-btn-primary" onClick={handleContact}>
                                Get this plan <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

// ─── Terms & Conditions Modal ─────────────────────────────────────────────────

const TC_SECTIONS = [
    {
        title: '1. Acceptance of Terms',
        body: `By accessing or using the Instyte platform ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Service. These terms apply to all users including administrators, teachers, students, parents, and any other person who accesses the platform.`,
    },
    {
        title: '2. Description of Service',
        body: `Instyte is a cloud-based educational institution management platform that provides tools for lead management, student management, academics, finance, hostel management, and related services. The Service is provided on a subscription basis and is subject to the plan and modules selected by the institution.`,
    },
    {
        title: '3. Subscription & Pricing',
        body: `Subscription fees are charged monthly based on the plan selected. Pricing is subject to change with 30 days' prior notice. Add-on modules (Lead Management, Finance, AI Assistant, Hostel Management, etc.) are billed in addition to the base plan price. Bundling all add-on modules qualifies for a 10% discount on those modules. All prices are exclusive of applicable taxes (GST as per Indian law). Instyte reserves the right to negotiate pricing on a case-by-case basis — any such arrangement must be confirmed in writing.`,
    },
    {
        title: '4. Payment Terms',
        body: `Payment is due at the beginning of each billing cycle. Failure to pay within 7 days of the due date may result in suspension of service. Instyte is not responsible for any loss of data or business arising from service suspension due to non-payment. Refunds are not provided for partial months except at Instyte's sole discretion.`,
    },
    {
        title: '5. Data Ownership & Privacy',
        body: `All data entered into Instyte by your institution remains your property. Instyte will not sell, share, or disclose your institution's data to any third party except as required by law or as necessary to operate the Service (e.g., cloud infrastructure providers). Each institution is isolated in its own database schema — no data is shared between tenants. Instyte stores data on AWS infrastructure in compliance with applicable data protection regulations.`,
    },
    {
        title: '6. Data Security',
        body: `Instyte employs industry-standard security practices including JWT-based authentication, schema-level data isolation, role-based access control, and audit logging. However, no system can guarantee absolute security. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.`,
    },
    {
        title: '7. Acceptable Use',
        body: `You agree not to use the Service for any unlawful purpose, to transmit any harmful or offensive content, to attempt to gain unauthorised access to any part of the Service, or to interfere with the operation of the Service. Instyte reserves the right to terminate accounts that violate these conditions without notice.`,
    },
    {
        title: '8. Uptime & Service Availability',
        body: `Instyte targets 99.9% uptime. However, the Service may be unavailable during scheduled maintenance windows or due to circumstances beyond Instyte's control (force majeure, third-party infrastructure outages, etc.). Enterprise plan customers are entitled to SLA-backed uptime guarantees as specified in their individual contracts. Standard and Momentum plan customers do not have contractual uptime guarantees.`,
    },
    {
        title: '9. Intellectual Property',
        body: `All software, designs, algorithms, and content comprising the Instyte platform are the intellectual property of Instyte and its licensors. You may not copy, reproduce, modify, distribute, or create derivative works from any part of the Service without prior written permission. Your institution's data remains your property as stated in Section 5.`,
    },
    {
        title: '10. Termination',
        body: `Either party may terminate the subscription with 30 days' written notice. Upon termination, you may request an export of your institution's data within 30 days. After that period, Instyte reserves the right to delete the data. Instyte may terminate accounts immediately for violation of these terms or non-payment.`,
    },
    {
        title: '11. Limitation of Liability',
        body: `To the maximum extent permitted by law, Instyte shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service. Instyte's total liability shall not exceed the fees paid by you in the 3 months prior to the claim.`,
    },
    {
        title: '12. Modifications to Terms',
        body: `Instyte reserves the right to update these Terms and Conditions at any time. Users will be notified of material changes via email or an in-app notice at least 14 days before the changes take effect. Continued use of the Service after changes are in effect constitutes acceptance of the new terms.`,
    },
    {
        title: '13. Governing Law',
        body: `These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.`,
    },
    {
        title: '14. Contact',
        body: `For questions about these Terms and Conditions, please contact us at hello@instyte.com or through the contact form on this website.`,
    },
];

function TermsModal({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [onClose]);

    return (
        <div className="tc-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="tc-modal">
                <div className="tc-modal-header">
                    <div className="tc-modal-header-left">
                        <div className="tc-modal-icon"><ScrollText size={20} /></div>
                        <div>
                            <h2 className="tc-modal-title">Terms &amp; Conditions</h2>
                            <p className="tc-modal-meta">Instyte Platform · Last updated: May 2026 · <em>Full legal terms will be updated shortly</em></p>
                        </div>
                    </div>
                    <button className="tc-modal-close" onClick={onClose}><X size={18} /></button>
                </div>
                <div className="tc-modal-body">
                    <div className="tc-notice">
                        <AlertTriangle size={14} />
                        These are preliminary terms. Complete, legally reviewed Terms &amp; Conditions will be published shortly. By using Instyte, you acknowledge these interim terms.
                    </div>
                    {TC_SECTIONS.map(s => (
                        <div key={s.title} className="tc-section">
                            <h3 className="tc-section-title">{s.title}</h3>
                            <p className="tc-section-body">{s.body}</p>
                        </div>
                    ))}
                </div>
                <div className="tc-modal-footer">
                    <p className="tc-modal-footer-note">© {new Date().getFullYear()} Instyte. All rights reserved.</p>
                    <button className="about-btn-primary" onClick={onClose}>
                        Close <X size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Mobile App Section ───────────────────────────────────────────────────────

const MOBILE_ROLES = [
    {
        key: 'admin',
        label: 'Admin',
        color: 'amber',
        headline: 'Fee & Finance — right in your pocket',
        description: 'Admins get a dedicated mobile view for everything money-related: track invoices, see outstanding dues, record payments, and fire bulk reminders to defaulters — all without opening a laptop.',
        features: ['Invoice list with totals & outstanding', 'One-tap bulk payment reminders', 'Per-student fee breakdown', 'Overdue alerts at a glance'],
        screens: [
            { file: 'Screenshot_20260602-191533.png', caption: 'Invoice list with totals' },
            { file: 'Screenshot_20260602-191557.png', caption: 'Bulk send reminders' },
        ],
    },
    {
        key: 'teacher',
        label: 'Staff / Teacher',
        color: 'emerald',
        headline: 'Classes & Attendance — wherever you teach',
        description: 'Teachers and staff get a purpose-built home screen: view their scheduled classes, mark student attendance per session, track curriculum progress, upload class resources, and receive instant notifications — all from their phone.',
        features: ['Upcoming classes & schedule', 'Per-class attendance marking', 'Student progress tracking', 'Class resources & notes upload', 'Instant notifications for next class'],
        screens: [
            { file: 'Screenshot_20260602-190632.png', caption: 'Classes schedule' },
            { file: 'Screenshot_20260602-190655.png', caption: 'Attendance calendar' },
            { file: 'Screenshot_20260602-190957.png', caption: 'Mark attendance' },
            { file: 'Screenshot_20260602-190926.png', caption: 'Student list' },
            { file: 'Screenshot_20260602-191006.png', caption: 'Class resources' },
        ],
    },
    {
        key: 'student',
        label: 'Student',
        color: 'indigo',
        headline: 'My Journey — track every milestone',
        description: 'Students see a personalised journey view: their enrollment timeline, upcoming classes, attendance percentage, curriculum completion, and fee payment history — all in one clean screen.',
        features: ['My Journey timeline', 'Attendance % & streaks', 'Curriculum progress', 'Fee & payment history'],
        screens: [
            { file: 'Screenshot_20260602-190618.png', caption: 'Student journey & overview' },
            { file: 'Screenshot_20260602-190730.png', caption: 'Profile & payments menu' },
        ],
    },
];

function MobileAppSection() {
    const [activeRole, setActiveRole] = useState(0);
    const [activeScreen, setActiveScreen] = useState(0);
    const role = MOBILE_ROLES[activeRole];

    const switchRole = (idx) => {
        setActiveRole(idx);
        setActiveScreen(0);
    };

    return (
        <section className="about-mobile-section" id="mobile-app">
            <div className="about-mobile-inner">
                <div className="about-mobile-header" data-animate="fade-up">
                    <div className="about-mobile-badge">
                        <Smartphone size={14} />
                        Native Mobile App
                    </div>
                    <h2 className="about-mobile-title">
                        Everything Instyte can do — <span className="about-mobile-title-accent">now in your hands</span>
                    </h2>
                    <p className="about-mobile-subtitle">
                        A single Flutter app built for every role. Admins manage fees, teachers run classes,
                        students track their journey — all offline-capable, all real-time.
                    </p>
                </div>

                <div className="about-mobile-role-tabs">
                    {MOBILE_ROLES.map((r, i) => (
                        <button
                            key={r.key}
                            className={`about-mobile-role-tab about-mobile-role-tab--${r.color} ${activeRole === i ? 'about-mobile-role-tab--active' : ''}`}
                            onClick={() => switchRole(i)}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>

                <div className="about-mobile-body">
                    <div className="about-mobile-info" data-animate="fade-right">
                        <h3 className={`about-mobile-info-title about-mobile-info-title--${role.color}`}>
                            {role.headline}
                        </h3>
                        <p className="about-mobile-info-desc">{role.description}</p>
                        <ul className="about-mobile-features">
                            {role.features.map(f => (
                                <li key={f}>
                                    <Check size={13} className={`about-mobile-check--${role.color}`} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="about-mobile-phones" data-animate="fade-left">
                        {role.screens.map((s, i) => (
                            <button
                                key={s.file}
                                className={`about-mobile-phone-frame ${activeScreen === i ? 'about-mobile-phone-frame--active' : ''}`}
                                onClick={() => setActiveScreen(i)}
                                title={s.caption}
                            >
                                <div className="about-mobile-phone-notch" />
                                <img
                                    src={`/mobile/${s.file}`}
                                    alt={s.caption}
                                    className="about-mobile-phone-img"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="about-mobile-screen-dots">
                    {role.screens.map((s, i) => (
                        <button
                            key={i}
                            className={`about-mobile-dot ${activeScreen === i ? `about-mobile-dot--${role.color}` : ''}`}
                            onClick={() => setActiveScreen(i)}
                            title={s.caption}
                        />
                    ))}
                    {role.screens[activeScreen] && (
                        <span className="about-mobile-caption">{role.screens[activeScreen].caption}</span>
                    )}
                </div>
            </div>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
    const [scrolled,       setScrolled]       = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeModule,   setActiveModule]   = useState(0);
    const [activeGallery,  setActiveGallery]  = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedPlan,   setSelectedPlan]   = useState('');
    const [termsOpen,      setTermsOpen]      = useState(false);
    const [contactForm,    setContactForm]    = useState({ name: '', email: '', phone: '', organization: '', message: '' });
    const [contactState,   setContactState]   = useState('idle');
    const heroRef   = useRef(null);
    const galleryTimer = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
            const el = document.documentElement;
            const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
            setScrollProgress(Math.min(pct, 100));
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* scroll-reveal: anything with data-animate becomes visible when in viewport */
    useEffect(() => {
        const els = document.querySelectorAll('[data-animate]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in-view');
                        observer.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* gallery auto-cycle */
    useEffect(() => {
        galleryTimer.current = setInterval(() => {
            setActiveGallery(g => (g + 1) % GALLERY_TABS.length);
        }, 3200);
        return () => clearInterval(galleryTimer.current);
    }, []);

    const goGallery = (idx) => {
        clearInterval(galleryTimer.current);
        setActiveGallery(idx);
        galleryTimer.current = setInterval(() => {
            setActiveGallery(g => (g + 1) % GALLERY_TABS.length);
        }, 3200);
    };

    const scrollTo = (href) => {
        setMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    const submitEnquiry = async (e) => {
        e.preventDefault();
        setContactState('submitting');
        const fullMessage = selectedPlan
            ? `${selectedPlan} — ${contactForm.message}`
            : contactForm.message;
        try {
            await fetch(`${API_URL}/instyte/api/v1/public/customer-enquiry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...contactForm, message: fullMessage, source: 'www.instyte.com' }),
            });
            setContactState('success');
            setContactForm({ name: '', email: '', phone: '', organization: '', message: '' });
            setSelectedPlan('');
        } catch {
            setContactState('error');
        }
    };

    const ActiveModIcon = MODULES[activeModule].Icon;

    return (
        <div className="about-root">
            <div className="about-scroll-progress" style={{ width: `${scrollProgress}%` }} />

            {/* ── Nav ───────────────────────────────────────────────────── */}
            <nav className={`about-nav ${scrolled ? 'about-nav--scrolled' : ''}`}>
                <div className="about-nav-inner">
                    <a href="#hero" className="about-nav-brand"
                        onClick={e => { e.preventDefault(); scrollTo('#hero'); }}>
                        <img src={LOGO} alt="Instyte" className="about-nav-logo"
                            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <span className="about-nav-name" style={{ display: 'none' }}>Instyte</span>
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
                    <div className="about-hero-badge hero-fade-up" style={{ animationDelay: '0.1s' }}>
                        <Sparkles size={13} />
                        Purpose-built for education
                    </div>
                    <h1 className="about-hero-heading hero-fade-up" style={{ animationDelay: '0.22s' }}>
                        The complete operating system<br />
                        <span className="about-hero-gradient">for modern educational institutions</span>
                    </h1>
                    <p className="about-hero-sub hero-fade-up" style={{ animationDelay: '0.34s' }}>
                        Most EdTech tools handle admissions — and stop there. Instyte goes further: built-in finance,
                        AI you can talk to, Learning Circles for staff and students, and a dedicated login for every
                        person in your organisation. One platform. Zero gaps.
                    </p>
                    <div className="about-hero-actions hero-fade-up" style={{ animationDelay: '0.46s' }}>
                        <button className="about-btn-primary" onClick={() => window.open('/demo', '_blank')}>
                            Try Demo <ArrowRight size={16} />
                        </button>
                        <button className="about-btn-ghost" onClick={() => scrollTo('#modules')}>
                            Explore modules <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className="about-stats hero-fade-up" style={{ animationDelay: '0.58s' }}>
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

                {/* hero product screenshot */}
                <div className="about-hero-screenshot hero-fade-up" style={{ animationDelay: '0.72s' }}>
                    <div className="about-hero-screen-frame">
                        <div className="about-hero-screen-bar">
                            <span className="about-screen-dot--red" />
                            <span className="about-screen-dot--yellow" />
                            <span className="about-screen-dot--green" />
                            <span className="about-hero-screen-url">app.instyte.com</span>
                        </div>
                        <img src="/screens/dashboard-ai.png" alt="Instyte Dashboard" className="about-hero-screen-img" />
                    </div>
                    <div className="about-hero-screen-glow" />
                </div>
            </section>

            {/* ── Platform Overview ─────────────────────────────────────── */}
            <section id="platform" className="about-section about-section--alt">
                <div className="about-section-inner">
                    <div className="about-section-label" data-animate="fade-up">
                        <LayoutDashboard size={13} /> The Platform
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">Every tool your institution needs, in one place</h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        Instyte is a schema-isolated multi-tenant SaaS platform built on Spring Boot and React.
                        Each institution gets its own isolated data environment, role-based access, and a mobile app —
                        without any of the complexity of managing infrastructure.
                    </p>

                    <div className="about-arch-grid">
                        {ARCH_CARDS.map(({ Icon: AI, color, title, body }, i) => (
                            <div key={title} className="about-arch-card" data-animate="fade-up" style={{ '--delay': `${i * 0.08}s` }}>
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

            {/* ── Screenshot Gallery ────────────────────────────────────── */}
            <section className="about-gallery">
                <div className="about-section-inner">
                    <div className="about-section-label" data-animate="fade-up">
                        <MonitorPlay size={13} /> See It In Action
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">A closer look at what you're getting</h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        We believe the product should speak for itself. Here's a walkthrough of the actual screens
                        your team, students, and counsellors will use every day.
                    </p>

                    <div className="about-gallery-wrap">
                        {/* tab pills */}
                        <div className="about-gallery-tabs">
                            {GALLERY_TABS.map((t, i) => (
                                <button
                                    key={t.key}
                                    className={`about-gallery-tab about-gallery-tab--${t.color} ${activeGallery === i ? 'about-gallery-tab--active' : ''}`}
                                    onClick={() => goGallery(i)}>
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {/* screenshot display */}
                        <div className="about-gallery-display">
                            <div className="about-gallery-browser">
                                <div className="about-gallery-browser-bar">
                                    <span className="about-screen-dot--red" />
                                    <span className="about-screen-dot--yellow" />
                                    <span className="about-screen-dot--green" />
                                    <span className="about-gallery-url">app.instyte.com · {GALLERY_TABS[activeGallery].label}</span>
                                    <div className="about-gallery-progress">
                                        {GALLERY_TABS.map((_, i) => (
                                            <span key={i} className={`about-gallery-pip ${activeGallery === i ? 'about-gallery-pip--active' : ''}`} onClick={() => goGallery(i)} />
                                        ))}
                                    </div>
                                </div>
                                <div className="about-gallery-img-wrap">
                                    {GALLERY_TABS.map((t, i) => (
                                        <img
                                            key={t.key}
                                            src={t.src}
                                            alt={t.label}
                                            className={`about-gallery-img ${activeGallery === i ? 'about-gallery-img--active' : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="about-gallery-caption">
                                <span className={`about-gallery-caption-dot about-gallery-caption-dot--${GALLERY_TABS[activeGallery].color}`} />
                                {GALLERY_TABS[activeGallery].desc}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mobile App Showcase ───────────────────────────────────── */}
            <MobileAppSection />

            {/* ── Spotlight: Finance + AI ───────────────────────────────── */}
            <section className="about-spotlight">
                <div className="about-section-inner">
                    <div className="about-spotlight-grid">
                        <div className="about-spotlight-card about-spotlight-card--amber" data-animate="fade-right">
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
                            <div className="about-spotlight-screens">
                                <img src="/screens/invoices.png" alt="Invoices" className="about-spotlight-ss about-spotlight-ss--main" />
                                <img src="/screens/invoice-detail.png" alt="Invoice Detail" className="about-spotlight-ss about-spotlight-ss--float" />
                            </div>
                        </div>

                        <div className="about-spotlight-card about-spotlight-card--indigo" data-animate="fade-left">
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
                            <div className="about-spotlight-screens">
                                <img src="/screens/finance-dashboard.png" alt="Finance Dashboard" className="about-spotlight-ss about-spotlight-ss--main" />
                                <img src="/screens/student-profile.png" alt="Student Profile" className="about-spotlight-ss about-spotlight-ss--float" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Modules ───────────────────────────────────────────────── */}
            <section id="modules" className="about-section">
                <div className="about-section-inner">
                    <div className="about-section-label" data-animate="fade-up">
                        <BookOpen size={13} /> Modules
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">Ten modules. Zero gaps.</h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        From the first enquiry to the last receipt — and every class, exam, hostel check-in, and support ticket in between.
                        Everything is connected, so your team never has to re-enter data or switch tools.
                    </p>

                    <div className="about-modules-layout" data-animate="fade-up">
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
                    <div className="about-section-label" data-animate="fade-up">
                        <Award size={13} /> Why Instyte
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">What every other EdTech tool is missing</h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        We focused on the gaps that most education platforms leave open —
                        and built tools that actually close them.
                    </p>

                    <div className="about-diff-grid">
                        {DIFFERENTIATORS.map(({ Icon: DI, color, title, body }, i) => (
                            <div key={title} className="about-diff-card" data-animate="fade-up" style={{ '--delay': `${i * 0.07}s` }}>
                                <div className={`about-diff-icon-wrap about-icon-bg--${color}`}>
                                    <DI size={22} />
                                </div>
                                <h3 className="about-diff-title">{title}</h3>
                                <p className="about-diff-body">{body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="about-compare" data-animate="fade-up">
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
                    <div className="about-section-label" data-animate="fade-up">
                        <CreditCard size={13} /> Pricing
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">
                        The first EdTech platform that lets you pay for only what you use
                    </h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        Every other platform forces you into a full bundle — you pay for modules you'll never touch.
                        Instyte is different. Start with what you need. Add modules as you grow. Pay nothing for what you don't use.
                        <strong> Nobody else in this market does this.</strong>
                    </p>

                    {/* Hero modular message */}
                    <div className="about-pricing-hero" data-animate="fade-up">
                        <div className="about-pricing-hero-left">
                            <div className="about-pricing-hero-tag">Industry first</div>
                            <h3 className="about-pricing-hero-title">Don't need Leads, Finance, or Hostel? Don't pay for them.</h3>
                            <p className="about-pricing-hero-body">
                                Every other EdTech platform forces you into a bundle — you pay for every module
                                whether you use it or not. We don't. <strong>Foundation</strong> and <strong>Momentum</strong> cover
                                everything your institution needs to operate: student records, academics, classes, events, and support.
                                Lead Management, Finance, AI, and Hostel Management are <strong>completely optional</strong> — activate
                                them only when you're ready, and only then does the price change.
                            </p>
                            <div className="about-pricing-hero-addons">
                                {PAID_ADDONS.map(a => (
                                    <div key={a.id} className={`about-pricing-addon about-pricing-addon--${a.color}`}>
                                        <a.Icon size={14} />
                                        <div>
                                            <span>
                                                {a.label}
                                                {a.badge && <span className="about-pricing-addon-new">{a.badge}</span>}
                                            </span>
                                            <small>{a.desc}</small>
                                        </div>
                                        <strong>+ ₹{a.price.toLocaleString('en-IN')}<small>/mo</small></strong>
                                    </div>
                                ))}
                            </div>
                            <div className="about-pricing-hero-math">
                                <div className="about-pricing-math-row">
                                    <span>Foundation (5 core modules, 100 users)</span>
                                    <strong>₹6,999</strong>
                                </div>
                                <div className="about-pricing-math-row about-pricing-math-row--opt">
                                    <span>+ Lead Management</span>
                                    <strong>₹2,199</strong>
                                </div>
                                <div className="about-pricing-math-row about-pricing-math-row--opt">
                                    <span>+ Finance & Fees</span>
                                    <strong>₹2,599</strong>
                                </div>
                                <div className="about-pricing-math-row about-pricing-math-row--opt">
                                    <span>+ AI Assistant</span>
                                    <strong>₹1,999</strong>
                                </div>
                                <div className="about-pricing-math-row about-pricing-math-row--opt about-pricing-math-row--new">
                                    <span>+ Hostel Management</span>
                                    <strong>₹2,599</strong>
                                </div>
                                <div className="about-pricing-math-row about-pricing-math-subtotal">
                                    <span>If all add-ons bought separately</span>
                                    <strong>₹16,395</strong>
                                </div>
                                <div className="about-pricing-math-divider" />
                                <div className="about-pricing-math-row about-pricing-math-row--total">
                                    <span>Foundation + all 4 add-ons (36% bundle discount)</span>
                                    <strong>₹12,999</strong>
                                </div>
                                <div className="about-pricing-math-row about-pricing-math-row--save">
                                    <span>You save with bundle</span>
                                    <strong>₹3,396/mo</strong>
                                </div>
                            </div>
                            <p className="about-pricing-hero-note">
                                * Prices are negotiable. Use the calculator below to build your exact plan.
                            </p>
                        </div>
                        <div className="about-pricing-hero-right">
                            <div className="about-pricing-module-grid">
                                {[
                                    { label: 'Student Management',   included: true,  Icon: GraduationCap, color: 'blue'    },
                                    { label: 'Academics',            included: true,  Icon: BookOpen,      color: 'violet'  },
                                    { label: 'Classroom & Circles',  included: true,  Icon: School,        color: 'cyan'    },
                                    { label: 'Events & Scheduling',  included: true,  Icon: CalendarDays,  color: 'rose'    },
                                    { label: 'Support Tickets',      included: true,  Icon: Ticket,        color: 'orange'  },
                                    { label: 'Lead Management',      included: false, Icon: Target,        color: 'emerald', price: '+ ₹2,199' },
                                    { label: 'Finance & Fees',       included: false, Icon: DollarSign,    color: 'amber',   price: '+ ₹2,599' },
                                    { label: 'AI Assistant',         included: false, Icon: BrainCircuit,  color: 'indigo',  price: '+ ₹1,999' },
                                    { label: 'Hostel Management',    included: false, Icon: BedDouble,     color: 'teal',    price: '+ ₹2,599', badge: 'New' },
                                ].map(({ label, included, Icon: MI, color, price, badge }) => (
                                    <div key={label} className={`about-pricing-module-pill ${included ? 'about-pricing-module-pill--in' : 'about-pricing-module-pill--addon'}`}>
                                        <div className={`about-pricing-module-pill-icon about-icon-bg--${color}`}>
                                            <MI size={13} />
                                        </div>
                                        <span>{label}{badge && <em className="about-pricing-pill-new">{badge}</em>}</span>
                                        {included
                                            ? <span className="about-pricing-pill-tag about-pricing-pill-tag--in">Included</span>
                                            : <span className="about-pricing-pill-tag about-pricing-pill-tag--addon">{price}</span>
                                        }
                                    </div>
                                ))}
                            </div>
                            <p className="about-pricing-module-caption">Foundation plan modules — add paid modules only if you need them</p>
                        </div>
                    </div>

                    {/* Plans grid */}
                    <div className="about-pricing-grid" style={{ marginTop: '3rem' }}>
                        {PRICING_PLANS.map((plan, i) => (
                            <div key={plan.name}
                                className={`about-pricing-card ${plan.highlighted ? 'about-pricing-card--highlighted' : ''} about-pricing-card--${plan.color}`}
                                data-animate="fade-up" style={{ '--delay': `${i * 0.1}s` }}>
                                {plan.highlighted && (
                                    <div className="about-pricing-badge">
                                        <Star size={11} /> Most Popular
                                    </div>
                                )}
                                <div className="about-pricing-plan-tag">
                                    <Tag size={11} /> {plan.name}
                                </div>
                                <div className="about-pricing-price">
                                    {plan.price ? `₹${plan.price.toLocaleString('en-IN')}` : 'Custom'}
                                    {plan.period && <span className="about-pricing-period">{plan.period}</span>}
                                </div>
                                <div className="about-pricing-users">{plan.userLimit}</div>
                                <p className="about-pricing-desc">{plan.description}</p>
                                <ul className="about-pricing-features">
                                    {plan.features.map(f => (
                                        <li key={f}>
                                            <Check size={13} className="about-pricing-check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                {plan.price && (
                                    <div className="about-pricing-addons-note">
                                        <Sparkles size={12} />
                                        Leads, Finance, AI & Hostel available as add-ons
                                    </div>
                                )}
                                <button
                                    className={`about-pricing-btn about-pricing-btn--${plan.color} ${plan.highlighted ? 'about-pricing-btn--solid' : ''}`}
                                    onClick={() => {
                                        setSelectedPlan(plan.name);
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}>
                                    {plan.cta} <ArrowRight size={14} />
                                </button>
                                {plan.price && (
                                    <p className="about-pricing-tnc">*T&amp;C apply · Prices negotiable</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Interactive calculator */}
                    <PricingCalculator onSelectPlan={(plan) => { setSelectedPlan(plan); }} />

                    {/* Why this price */}
                    <div className="about-pricing-why" data-animate="fade-up">
                        <h3 className="about-pricing-why-heading">
                            <DollarSign size={16} /> Why does Instyte cost what it costs?
                        </h3>
                        <p className="about-pricing-why-body">
                            Running a serious SaaS platform for education isn't cheap — and we'd rather be honest about it
                            than hide costs in per-seat charges or annual lock-ins. Here's what your subscription actually pays for:
                        </p>
                        <div className="about-pricing-why-grid">
                            <div className="about-pricing-why-item">
                                <span className="about-pricing-why-dot about-pricing-why-dot--emerald" />
                                <div>
                                    <strong>Cloud infrastructure</strong>
                                    <p>Dedicated database schema per tenant on AWS RDS, S3 for document storage, CloudFront CDN, and auto-scaling compute — your data never shares space with another institution.</p>
                                </div>
                            </div>
                            <div className="about-pricing-why-item">
                                <span className="about-pricing-why-dot about-pricing-why-dot--indigo" />
                                <div>
                                    <strong>AI & ML compute</strong>
                                    <p>Every lead is scored by a real ML model the moment it arrives. The AI assistant runs on a dedicated gRPC microservice. This isn't a chatbot label — it's real inference, running continuously.</p>
                                </div>
                            </div>
                            <div className="about-pricing-why-item">
                                <span className="about-pricing-why-dot about-pricing-why-dot--amber" />
                                <div>
                                    <strong>WhatsApp & communication APIs</strong>
                                    <p>Automated fee reminders, admission confirmations, and event notifications go through paid messaging APIs — every message has a real cost that we absorb into your plan.</p>
                                </div>
                            </div>
                            <div className="about-pricing-why-item">
                                <span className="about-pricing-why-dot about-pricing-why-dot--blue" />
                                <div>
                                    <strong>Product & support team</strong>
                                    <p>Instyte is actively developed — new modules ship regularly. Your subscription funds continued development, onboarding support, and the team that answers your questions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Competitor comparison */}
                    <div className="about-pricing-cmp" data-animate="fade-up">
                        <h3 className="about-pricing-cmp-heading">How does our pricing compare?</h3>
                        <p className="about-pricing-cmp-sub">
                            Most education management tools charge more, deliver less — and bundle everything whether you want it or not.
                        </p>
                        <div className="about-pricing-cmp-grid">
                            <div className="about-pricing-cmp-card about-pricing-cmp-card--them">
                                <div className="about-pricing-cmp-label">Typical EdTech CRM</div>
                                <div className="about-pricing-cmp-price">₹8,000–₹15,000<span>/month</span></div>
                                <ul>
                                    <li><X size={13} className="cmp-x" /> Fixed bundle — pay for everything or nothing</li>
                                    <li><X size={13} className="cmp-x" /> Admissions only — no finance module</li>
                                    <li><X size={13} className="cmp-x" /> No AI features</li>
                                    <li><X size={13} className="cmp-x" /> Admin login only — no student/parent portal</li>
                                    <li><X size={13} className="cmp-x" /> Annual contract required</li>
                                </ul>
                            </div>
                            <div className="about-pricing-cmp-card about-pricing-cmp-card--them">
                                <div className="about-pricing-cmp-label">Generic School ERP</div>
                                <div className="about-pricing-cmp-price">₹10,000–₹25,000<span>/month</span></div>
                                <ul>
                                    <li><X size={13} className="cmp-x" /> All-or-nothing pricing, no flexibility</li>
                                    <li><X size={13} className="cmp-x" /> 3–6 month onboarding before you go live</li>
                                    <li><X size={13} className="cmp-x" /> No lead CRM or AI</li>
                                    <li><X size={13} className="cmp-x" /> Outdated mobile experience</li>
                                    <li><X size={13} className="cmp-x" /> Expensive per-module customisation</li>
                                </ul>
                            </div>
                            <div className="about-pricing-cmp-card about-pricing-cmp-card--us">
                                <div className="about-pricing-cmp-badge"><Star size={11} /> Instyte</div>
                                <div className="about-pricing-cmp-price">₹6,999–₹8,999<span>/month base</span></div>
                                <ul>
                                    <li><Check size={13} className="cmp-check" /> Pay only for modules you actually use</li>
                                    <li><Check size={13} className="cmp-check" /> Full finance + fee lifecycle as add-on</li>
                                    <li><Check size={13} className="cmp-check" /> AI lead scoring + conversational assistant</li>
                                    <li><Check size={13} className="cmp-check" /> Hostel & PG management as add-on</li>
                                    <li><Check size={13} className="cmp-check" /> Portal for every role — admin to parent</li>
                                    <li><Check size={13} className="cmp-check" /> Month-to-month · Prices negotiable</li>
                                </ul>
                            </div>
                        </div>
                        <p className="about-pricing-cmp-note">
                            * Competitor pricing based on publicly available market research. All prices approximate and subject to change.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Contact Us ────────────────────────────────────────────── */}
            <section id="contact" className="about-contact">
                <div className="about-contact-inner">
                    <div className="about-contact-left" data-animate="fade-right">
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

                    <div className="about-contact-right" data-animate="fade-left">
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
                                    {selectedPlan && (
                                        <div className="about-contact-plan-tag">
                                            <Tag size={12} />
                                            <span>Plan: <strong>{selectedPlan}</strong></span>
                                            <button onClick={() => setSelectedPlan('')}><X size={11} /></button>
                                        </div>
                                    )}
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
                <div className="about-cta-inner" data-animate="fade-up">
                    <h2 className="about-cta-heading">Ready to transform your institution?</h2>
                    <p className="about-cta-sub">
                        Join 50+ institutions already using Instyte to manage admissions, academics, and finance —
                        all in one place.
                    </p>
                    <div className="about-cta-actions">
                        <button className="about-btn-primary" onClick={() => window.open('/demo', '_blank')}>
                            Try Demo <ArrowRight size={16} />
                        </button>
                        <button className="about-btn-ghost about-btn-ghost--light" onClick={scrollToContact}>
                            Get in Touch <ChevronRight size={16} />
                        </button>
                    </div>
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
                        <button className="about-footer-link about-footer-tc-btn" onClick={() => setTermsOpen(true)}>
                            <ScrollText size={12} /> Terms &amp; Conditions
                        </button>
                    </div>
                    <div className="about-footer-copy">
                        &copy; {new Date().getFullYear()} Instyte. All rights reserved. &nbsp;·&nbsp;
                        <button className="about-footer-tc-inline" onClick={() => setTermsOpen(true)}>Terms &amp; Conditions</button>
                    </div>
                </div>
            </footer>

            {/* ── Floating Contact Us Button ─────────────────────────────── */}
            <button className="about-float-cta" onClick={scrollToContact}>
                Contact Us
            </button>

            {/* ── Terms Modal ───────────────────────────────────────────── */}
            {termsOpen && <TermsModal onClose={() => setTermsOpen(false)} />}

        </div>
    );
}
