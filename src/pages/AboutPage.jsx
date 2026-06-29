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

const LOGO = '/Instyte_dark-removebg-preview.png';

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
const API_URL = process.env.REACT_APP_API_URL || '';

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
    { label: 'What We Build',      href: '#what-we-build' },
    { label: 'Instyte Education',  href: '#products', openEdu: true },
    { label: 'Contact',            href: '#contact'       },
];

// ─── What We Build ────────────────────────────────────────────────────────────

const WHAT_WE_BUILD = [
    {
        Icon: Globe,
        color: 'indigo',
        title: 'SaaS Products',
        body: 'We design and ship multi-tenant SaaS platforms with modern stacks — Spring Boot, React, Flutter. Instyte Education is our own SaaS product. We can build yours too.',
    },
    {
        Icon: Cpu,
        color: 'emerald',
        title: 'On-Premise Software',
        body: 'Not everything belongs in the cloud. We build self-hosted software deployed via Docker — running on your hardware, under your control, with no cloud dependency.',
    },
    {
        Icon: Smartphone,
        color: 'blue',
        title: 'Mobile Apps',
        body: 'Cross-platform mobile apps in Flutter. Role-based, offline-capable, and production-grade — not prototypes. Instyte Education ships a Flutter app to real users every day.',
    },
    {
        Icon: BrainCircuit,
        color: 'violet',
        title: 'AI & Automation',
        body: 'ML-powered lead scoring, conversational AI assistants, workflow automation, and third-party integrations. We build AI that actually works in production — not just demos.',
    },
    {
        Icon: Briefcase,
        color: 'amber',
        title: 'Custom Development',
        body: 'From small business tools to medium enterprise systems — if you have a problem that off-the-shelf software doesn\'t solve, we build it for you from scratch.',
    },
    {
        Icon: Building2,
        color: 'teal',
        title: 'Integrations & APIs',
        body: 'WhatsApp, payment gateways, ERP connectors, third-party CRMs — we wire your systems together so data flows without manual work and without buying new software.',
    },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
    { Icon: Building2, color: 'emerald', value: '5+',    label: 'Institutions Live'  },
    { Icon: Users,     color: 'blue',    value: '4,200+', label: 'Active Users'      },
    { Icon: Clock,     color: 'violet',  value: '99.9%', label: 'Uptime SLA'        },
    { Icon: Star,      color: 'amber',   value: '4.9',   label: 'Customer Rating'   },
];

// ─── Products ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
    {
        id: 'cloud',
        Icon: Globe,
        color: 'indigo',
        badge: 'SaaS · Multi-tenant',
        name: 'Instyte Cloud',
        tagline: 'The full platform, fully managed — zero infrastructure to worry about',
        description:
            'Instyte Cloud is our flagship SaaS offering. Your institution gets a dedicated, schema-isolated environment on our cloud infrastructure — fully managed, always updated, and backed by our 99.9% uptime SLA. Every module, every role portal, AI, mobile app, and multi-branch support — all included, nothing to install.',
        highlights: [
            { Icon: ShieldCheck, text: 'Schema-isolated multi-tenant — your data never touches another institution' },
            { Icon: BrainCircuit, text: 'AI lead scoring + conversational assistant included' },
            { Icon: Smartphone, text: 'Native Flutter mobile app for every role' },
            { Icon: Building2, text: 'True multi-branch — one owner view across all locations' },
            { Icon: Clock, text: '99.9% uptime SLA · Managed updates · AWS infrastructure' },
            { Icon: LayoutDashboard, text: 'All 9 modules available — Finance, Leads, AI, Hostel & more' },
        ],
        cta: 'Get Started',
        ctaHref: '#contact',
        highlighted: true,
    },
    {
        id: 'onpremise',
        Icon: Cpu,
        color: 'emerald',
        badge: 'Self-hosted · On-Premise',
        name: 'Instyte OnPremise',
        tagline: 'Full Instyte power, deployed inside your own infrastructure',
        description:
            'For institutions with data sovereignty requirements or strong IT preferences. Instyte OnPremise is the same platform — Spring Boot, React, Flutter — deployed on your servers. Our Relay + Connector architecture lets you securely access it remotely without opening firewall ports, while your data stays entirely on your premises.',
        highlights: [
            { Icon: ShieldCheck, text: 'Complete data sovereignty — runs on your hardware, your network' },
            { Icon: Network, text: 'Relay + Connector: secure remote access with no open inbound ports' },
            { Icon: Globe, text: 'Full-featured: all modules identical to Instyte Cloud' },
            { Icon: Cpu, text: 'Spring Boot 3 + React 18 + Flutter — modern, maintainable stack' },
            { Icon: Building2, text: 'Docker-based deployment — runs anywhere containers run' },
            { Icon: KeyRound, text: 'Multi-tenant on your schema — isolate branches within your instance' },
        ],
        cta: 'Contact Sales',
        ctaHref: '#contact',
        highlighted: false,
    },
    {
        id: 'lite',
        Icon: Zap,
        color: 'amber',
        badge: 'Lightweight · Standalone',
        name: 'Instyte OnPremise Lite',
        tagline: 'Streamlined Finance + Student Management — simple, fast, offline-capable',
        description:
            'Built for schools that need reliable fee collection and student records without the overhead of a full platform. Instyte OnPremise Lite (powered by InfantJ) is a self-contained Java + React application delivered as pre-built Docker images — drop it on any machine, activate it once, and you\'re live. WhatsApp integration included.',
        highlights: [
            { Icon: Zap, text: 'Pre-built Docker images — up and running in under an hour' },
            { Icon: DollarSign, text: 'Full fee management: structures, invoices, receipts, overdue reminders' },
            { Icon: GraduationCap, text: 'Student management: profiles, enrollment, progress tracking' },
            { Icon: MessageSquare, text: 'WhatsApp integration for fee reminders & notifications' },
            { Icon: ShieldCheck, text: 'Runs entirely on-premise — no cloud dependency required' },
            { Icon: Building2, text: 'Ideal for single-branch schools wanting simplicity over scale' },
        ],
        cta: 'Learn More',
        ctaHref: '#contact',
        highlighted: false,
    },
];

// ─── Customers ────────────────────────────────────────────────────────────────

const CUSTOMERS = [
    {
        id: 'fathima',
        type: 'text',
        name: 'Fathima EM High School',
        initials: 'FH',
        color: 'emerald',
    },
    {
        id: 'infantjesus',
        type: 'text',
        name: 'Infant Jesus EM School',
        initials: 'IJ',
        color: 'blue',
    },
    {
        id: 'muzigal',
        type: 'text',
        name: 'Muzigal Nellore',
        initials: 'MN',
        color: 'violet',
    },
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
    { Icon: Smartphone,      color: 'blue',    title: 'Mobile App',               body: 'Native Flutter app for counsellors and teachers. Attend to leads, mark attendance, and collect fees on the go — purpose-built for every role.' },
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
    { key: 'enrollment', label: 'Enrollment',        desc: 'Student list with enrollment status & progress',  src: '/screens/enrollment-students.png',color: 'violet'  },
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

function PricingCalculator({ onSelectPlan, onBook }) {
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
        onBook();
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
                    <p className="tc-modal-footer-note">© {new Date().getFullYear()} Instyte Labs. All rights reserved.</p>
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
                        students track their journey — all in real-time, from anywhere.
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

// ─── Demo Booking Modal ───────────────────────────────────────────────────────

function DemoModal({ onClose, onBook }) {
    const today = new Date();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [org, setOrg] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM', '06:00 PM',
    ];

    /* generate next 7 days as selectable pills */
    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        const val  = d.toISOString().split('T')[0];
        const day  = d.toLocaleDateString('en-IN', { weekday: 'short' });
        const num  = d.getDate();
        const mon  = d.toLocaleDateString('en-IN', { month: 'short' });
        return { val, day, num, mon };
    });

    const handleBook = async (e) => {
        e.preventDefault();
        if (!date || !time || !name || !phone) return;
        setSubmitting(true);
        const message = `Demo Request — Preferred slot: ${date} at ${time}`;
        try {
            await fetch(`${process.env.REACT_APP_API_URL || ''}/instyte/api/v1/public/customer-enquiry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, organization: org, email: '', message, source: 'www.instyte.com' }),
            });
        } catch { /* fail silently */ }
        setSubmitted(true);
        setSubmitting(false);
        onBook && onBook({ date, time, name });
    };

    return (
        <div className="demo-modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="demo-modal">
                <button className="demo-modal-close" onClick={onClose}><X size={18} /></button>
                {submitted ? (
                    <div className="demo-modal-success">
                        <div className="demo-modal-success-icon"><Check size={32} /></div>
                        <h3>Demo booked!</h3>
                        <p>We'll confirm your slot for <strong>{date} at {time}</strong> and reach out to <strong>{name}</strong> shortly.</p>
                        <button className="about-btn-primary" onClick={onClose}>Done</button>
                    </div>
                ) : (
                    <>
                        <div className="demo-modal-header">
                            <div className="demo-modal-icon"><CalendarDays size={22} /></div>
                            <div>
                                <h3 className="demo-modal-title">Book a Demo</h3>
                                <p className="demo-modal-sub">Pick a date and time — we'll walk you through Instyte Education live.</p>
                            </div>
                        </div>
                        <form className="demo-modal-form" onSubmit={handleBook}>
                            <div className="demo-modal-row">
                                <div className="demo-modal-field">
                                    <label>Your name *</label>
                                    <input type="text" required placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="demo-modal-field">
                                    <label>Phone *</label>
                                    <input type="tel" required placeholder="+91 98765 43210" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="demo-modal-field">
                                <label>School / Organisation</label>
                                <input type="text" placeholder="Your institution name" value={org} onChange={e => setOrg(e.target.value)} />
                            </div>

                            {/* Date pill strip */}
                            <div className="demo-modal-field">
                                <label>Preferred date *</label>
                                <div className="demo-date-strip">
                                    {days.map(d => (
                                        <button type="button" key={d.val}
                                            className={`demo-date-pill ${date === d.val ? 'demo-date-pill--active' : ''}`}
                                            onClick={() => setDate(d.val)}>
                                            <span className="demo-date-day">{d.day}</span>
                                            <span className="demo-date-num">{d.num}</span>
                                            <span className="demo-date-mon">{d.mon}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time slot grid */}
                            <div className="demo-modal-field">
                                <label>Preferred time *</label>
                                <div className="demo-time-grid">
                                    {timeSlots.map(t => (
                                        <button type="button" key={t}
                                            className={`demo-time-pill ${time === t ? 'demo-time-pill--active' : ''}`}
                                            onClick={() => setTime(t)}>
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button type="submit" className="about-btn-primary demo-modal-submit"
                                disabled={submitting || !date || !time || !name || !phone}>
                                {submitting ? 'Booking…' : <><CalendarDays size={15} /> Confirm Demo Slot</>}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default function AboutPage() {
    const [scrolled,       setScrolled]       = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeModule,   setActiveModule]   = useState(0);
    const [activeGallery,  setActiveGallery]  = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedPlan,   setSelectedPlan]   = useState('');
    const [termsOpen,      setTermsOpen]      = useState(false);
    const [pricingRevealed, setPricingRevealed] = useState(false);
    const [eduOpen,         setEduOpen]         = useState(false);
    const [inkOrigin,       setInkOrigin]       = useState({ x: '50%', y: '50%' });
    const [inkPhase,        setInkPhase]        = useState('idle'); // idle | expanding | revealing | open
    const [demoOpen,        setDemoOpen]        = useState(false);
    const [contactForm,    setContactForm]    = useState({ name: '', email: '', phone: '', organization: '', message: '' });
    const [contactState,   setContactState]   = useState('idle');
    const heroRef   = useRef(null);
    const galleryTimer = useRef(null);
    const eduPanelRef = useRef(null);

    const openEdu = (e) => {
        const rect = e?.currentTarget?.getBoundingClientRect();
        const x = rect ? `${rect.left + rect.width / 2}px` : '50%';
        const y = rect ? `${rect.top + rect.height / 2}px` : '50%';
        setInkOrigin({ x, y });
        setInkPhase('expanding');
        setTimeout(() => {
            setEduOpen(true);
            if (eduPanelRef.current) eduPanelRef.current.scrollTop = 0;
            setInkPhase('revealing');
        }, 320);
        setTimeout(() => setInkPhase('open'), 480);
    };

    const closeEdu = () => {
        setEduOpen(false);
        setInkPhase('idle');
    };

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

    /* re-observe newly revealed pricing elements after gate is clicked */
    useEffect(() => {
        if (!pricingRevealed) return;
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
        // small delay so the DOM has rendered the new elements
        const t = setTimeout(() => {
            document.querySelectorAll('[data-animate]:not(.in-view)').forEach(el => observer.observe(el));
        }, 50);
        return () => { clearTimeout(t); observer.disconnect(); };
    }, [pricingRevealed]);

    /* lock body scroll when edu panel is open; re-observe its elements */
    useEffect(() => {
        document.body.style.overflow = eduOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [eduOpen]);

    useEffect(() => {
        if (!eduOpen) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target); }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );
        const t = setTimeout(() => {
            document.querySelectorAll('.edu-panel [data-animate]:not(.in-view)').forEach(el => observer.observe(el));
        }, 80);
        return () => { clearTimeout(t); observer.disconnect(); };
    }, [eduOpen]);

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
                        <img src={LOGO} alt="Instyte Labs" className="about-nav-logo"
                            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <span className="about-nav-name" style={{ display: 'none' }}>Instyte Labs</span>
                    </a>

                    <ul className={`about-nav-links ${mobileMenuOpen ? 'about-nav-links--open' : ''}`}>
                        {NAV_LINKS.map(l => (
                            <li key={l.label}>
                                <a href={l.href} className={`about-nav-link ${l.openEdu ? 'about-nav-link--edu' : ''}`}
                                    onClick={e => { e.preventDefault(); if (l.openEdu) { openEdu(e); setMobileMenuOpen(false); } else scrollTo(l.href); }}>
                                    {l.openEdu && <GraduationCap size={13} />}
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="about-nav-demo-cta" onClick={() => setDemoOpen(true)}>
                        <CalendarDays size={14} /> Get a Demo
                    </button>

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
                        Instyte Labs · Software &amp; Product Studio
                    </div>
                    <h1 className="about-hero-heading hero-fade-up" style={{ animationDelay: '0.22s' }}>
                        We build software products<br />
                        <span className="about-hero-gradient">for real businesses</span>
                    </h1>
                    <p className="about-hero-sub hero-fade-up" style={{ animationDelay: '0.34s' }}>
                        SaaS platforms, on-premise tools, mobile apps, and custom software —
                        from small businesses to medium enterprises. Our own product, <strong style={{ color: '#e2e8f0' }}>Instyte Education</strong>,
                        is already running in schools across India.
                    </p>
                    <div className="about-hero-actions hero-fade-up" style={{ animationDelay: '0.46s' }}>
                        <button className="about-btn-primary" onClick={() => scrollTo('#what-we-build')}>
                            What we build <ArrowRight size={16} />
                        </button>
                        <button className="about-btn-ghost" onClick={openEdu}>
                            Instyte Education <GraduationCap size={16} />
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
                        <img src="/screens/invoices.png" alt="Instyte Dashboard" className="about-hero-screen-img" />
                    </div>
                    <div className="about-hero-screen-glow" />
                </div>
            </section>

            {/* ── What We Build ─────────────────────────────────────────── */}
            <section id="what-we-build" className="about-section about-section--alt">
                <div className="about-section-inner">
                    <div className="about-section-label" data-animate="fade-up">
                        <Briefcase size={13} /> Instyte Labs
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">
                        We build software. Any software.
                    </h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        From small business tools to medium enterprise platforms — SaaS, on-premise, mobile, AI, or custom.
                        If your business has a problem software can solve, we build it. Instyte Education is what we built for ourselves.
                        Your product could be next.
                    </p>
                    <div className="about-arch-grid">
                        {WHAT_WE_BUILD.map(({ Icon: WI, color, title, body }, i) => (
                            <div key={title} className="about-arch-card" data-animate="fade-up" style={{ '--delay': `${i * 0.07}s` }}>
                                <div className={`about-arch-icon-wrap about-icon-bg--${color}`}>
                                    <WI size={22} />
                                </div>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </div>
                        ))}
                    </div>
                    <div className="about-whatwebuild-cta" data-animate="fade-up">
                        <p>Have a project in mind? We work with businesses of all sizes — from a single founder to a 200-person company.</p>
                        <button className="about-btn-primary" onClick={scrollToContact}>
                            Tell us what you need <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Instyte Education product suite ───────────────────────── */}
            <section id="products" className="about-section about-products-section">
                <div className="about-section-inner">
                    <div className="about-section-label" data-animate="fade-up">
                        <GraduationCap size={13} /> Instyte Education
                    </div>
                    <h2 className="about-section-heading" data-animate="fade-up">Our flagship product — built for schools &amp; institutions</h2>
                    <p className="about-section-sub" data-animate="fade-up">
                        Instyte Education is a complete Educational Operating System — leads, admissions, finance, AI, academics, hostel —
                        available as SaaS, on-premise, or lightweight standalone. Already running in schools across India.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} data-animate="fade-up">
                        <button className="about-btn-primary" onClick={openEdu}>
                            Explore Instyte Education <GraduationCap size={15} />
                        </button>
                    </div>

                    <div className="about-products-grid">
                        {PRODUCTS.map(({ id, Icon: PI, color, badge, name, tagline, description, highlights, cta, ctaHref, highlighted }, i) => (
                            <div
                                key={id}
                                className={`about-product-card about-product-card--${color} ${highlighted ? 'about-product-card--highlighted' : ''}`}
                                data-animate="fade-up"
                                style={{ '--delay': `${i * 0.1}s` }}
                            >
                                {highlighted && (
                                    <div className="about-product-card-badge-top">
                                        <Star size={11} /> Flagship Product
                                    </div>
                                )}
                                <div className="about-product-card-header">
                                    <div className={`about-product-card-icon about-icon-bg--${color}`}>
                                        <PI size={24} />
                                    </div>
                                    <div>
                                        <div className="about-product-badge-inline">{badge}</div>
                                        <h3 className="about-product-name">{name}</h3>
                                    </div>
                                </div>
                                <p className="about-product-tagline">{tagline}</p>
                                <p className="about-product-desc">{description}</p>
                                <ul className="about-product-highlights">
                                    {highlights.map(({ Icon: HI, text }) => (
                                        <li key={text}>
                                            <HI size={13} className={`about-product-hi-icon about-product-hi-icon--${color}`} />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="about-product-card-actions">
                                    <button
                                        className={`about-product-cta ${highlighted ? 'about-btn-primary' : `about-product-cta--${color}`}`}
                                        onClick={openEdu}
                                    >
                                        {cta} <ArrowRight size={14} />
                                    </button>
                                    <button
                                        className="about-product-cta-demo"
                                        onClick={() => setDemoOpen(true)}
                                    >
                                        Get a Demo <CalendarDays size={13} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Trusted By ────────────────────────────────────────────── */}
            <section className="about-customers-section">
                <div className="about-customers-inner">
                    <div className="about-customers-label" data-animate="fade-up">
                        <Award size={13} /> Trusted By
                    </div>
                    <p className="about-customers-sub" data-animate="fade-up">
                        Schools already running on Instyte Education
                    </p>
                    <div className="about-customers-marquee-wrap" data-animate="fade-up">
                        <div className="about-customers-marquee-fade about-customers-marquee-fade--left" />
                        <div className="about-customers-marquee-fade about-customers-marquee-fade--right" />
                        <div className="about-customers-track">
                            {[...CUSTOMERS, ...CUSTOMERS, ...CUSTOMERS].map((c, i) => (
                                <div key={`${c.id}-${i}`} className={`about-customer-tile about-customer-tile--${c.color}`}>
                                    {c.type === 'logo' ? (
                                        <img
                                            src={c.logoFile}
                                            alt={c.name}
                                            className="about-customer-logo-img"
                                            onError={e => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className="about-customer-text-tile"
                                        style={{ display: c.type === 'logo' ? 'none' : 'flex' }}
                                    >
                                        <div className={`about-customer-initials about-customer-initials--${c.color}`}>
                                            {c.initials}
                                        </div>
                                        <span className="about-customer-name">{c.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Platform Overview ─────────────────────────────────────── */}
            {/* MOVED TO EDU PANEL */}

            {/* ── Screenshot Gallery ────────────────────────────────────── */}
            {/* MOVED TO EDU PANEL */}

            {/* ── Mobile App Showcase ───────────────────────────────────── */}
            {/* MOVED TO EDU PANEL */}

            {/* ── Spotlight: Finance + AI ───────────────────────────────── */}
            {/* MOVED TO EDU PANEL */}

            {/* ── Modules ───────────────────────────────────────────────── */}
            {/* MOVED TO EDU PANEL */}

            {/* ── Why Instyte ───────────────────────────────────────────── */}
            {/* MOVED TO EDU PANEL */}

            {/* ── Ink transition overlay ────────────────────────────────── */}
            <div
                className={`edu-ink ${inkPhase !== 'idle' ? `edu-ink--${inkPhase}` : ''}`}
                style={{ '--ink-x': inkOrigin.x, '--ink-y': inkOrigin.y }}
            />

            {/* ── Education Detail Panel ────────────────────────────────── */}
            <div className={`edu-panel ${eduOpen ? 'edu-panel--open' : ''}`} ref={eduPanelRef}>

                {/* Back bar */}
                <div className="edu-back-bar">
                    <button className="edu-back-btn" onClick={closeEdu}>
                        <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                        Back to Instyte Labs
                    </button>
                    <span className="edu-back-title">Instyte Education</span>
                    <button className="about-btn-primary edu-back-demo" onClick={() => setDemoOpen(true)}>
                        <CalendarDays size={14} /> Get a Demo
                    </button>
                </div>

                {/* Education Hero */}
                <section className="edu-hero">
                    <div className="edu-hero-bg" />
                    <div className="edu-hero-inner">
                        <div className="edu-hero-eyebrow">
                            <GraduationCap size={14} /> Instyte Education · Educational Operating System
                        </div>
                        <h1 className="edu-hero-heading">
                            The complete operating system<br />
                            <span className="edu-hero-gradient">for modern institutions</span>
                        </h1>
                        <p className="edu-hero-sub">
                            Most schools run on a patchwork of spreadsheets, WhatsApp groups, and disconnected tools.
                            Instyte Education replaces all of it — leads, admissions, academics, finance, AI, hostel,
                            mobile apps — in one platform, available as cloud or on-premise.
                        </p>
                        <div className="edu-hero-pills">
                            <span className="edu-hero-pill"><Check size={12} /> 10 integrated modules</span>
                            <span className="edu-hero-pill"><Check size={12} /> Role portals for every stakeholder</span>
                            <span className="edu-hero-pill"><Check size={12} /> Flutter mobile app included</span>
                            <span className="edu-hero-pill"><Check size={12} /> AI assistant + lead scoring</span>
                            <span className="edu-hero-pill"><Check size={12} /> Cloud or self-hosted</span>
                        </div>
                        <div className="edu-hero-actions">
                            <button className="about-btn-primary" onClick={() => setDemoOpen(true)}>
                                <CalendarDays size={16} /> Get a Demo
                            </button>
                            <button className="about-btn-ghost" onClick={() => window.open('/demo', '_blank')}>
                                Try Live Demo <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Platform Overview */}
                <section id="edu-platform" className="about-section about-section--alt">
                    <div className="about-section-inner">
                        <div className="about-section-label" data-animate="fade-up">
                            <LayoutDashboard size={13} /> Platform
                        </div>
                        <h2 className="about-section-heading" data-animate="fade-up">Every tool your institution needs, in one place</h2>
                        <p className="about-section-sub" data-animate="fade-up">
                            Instyte Cloud is a schema-isolated multi-tenant SaaS platform built on Spring Boot and React.
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

                {/* Modules */}
                <section id="edu-modules" className="about-section">
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
                                        <button key={m.title}
                                            className={`about-module-tab ${activeModule === i ? `about-module-tab--active about-module-tab--${m.color}` : ''}`}
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

                {/* Screenshot Gallery */}
                <section className="about-gallery">
                    <div className="about-section-inner">
                        <div className="about-section-label" data-animate="fade-up">
                            <MonitorPlay size={13} /> See It In Action
                        </div>
                        <h2 className="about-section-heading" data-animate="fade-up">A closer look at what you're getting</h2>
                        <p className="about-section-sub" data-animate="fade-up">
                            Real screens your team, students, and counsellors will use every day.
                        </p>
                        <div className="about-gallery-wrap">
                            <div className="about-gallery-tabs">
                                {GALLERY_TABS.map((t, i) => (
                                    <button key={t.key}
                                        className={`about-gallery-tab about-gallery-tab--${t.color} ${activeGallery === i ? 'about-gallery-tab--active' : ''}`}
                                        onClick={() => goGallery(i)}>
                                        {t.label}
                                    </button>
                                ))}
                            </div>
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
                                            <img key={t.key} src={t.src} alt={t.label}
                                                className={`about-gallery-img ${activeGallery === i ? 'about-gallery-img--active' : ''}`} />
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

                {/* Mobile App */}
                <MobileAppSection />

                {/* Spotlight: Finance + AI */}
                <section className="about-spotlight">
                    <div className="about-section-inner">
                        <div className="about-spotlight-grid">
                            <div className="about-spotlight-card about-spotlight-card--amber" data-animate="fade-right">
                                <div className="about-spotlight-card-icon about-icon-bg--amber"><DollarSign size={28} /></div>
                                <div className="about-spotlight-label"><Sparkles size={12} /> Most EdTech tools skip this</div>
                                <h3 className="about-spotlight-title">Finance is not an afterthought</h3>
                                <p className="about-spotlight-body">
                                    Many education management tools handle admissions beautifully — then leave you with a spreadsheet for fees.
                                    Instyte includes a complete fee lifecycle: flexible structures, automated invoicing, online and counter payments,
                                    digital receipts, and WhatsApp reminders before dues go overdue.
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
                                <div className="about-spotlight-card-icon about-icon-bg--indigo"><BrainCircuit size={28} /></div>
                                <div className="about-spotlight-label"><Sparkles size={12} /> AI that works for you</div>
                                <h3 className="about-spotlight-title">AI you can talk to — and that talks back to your tools</h3>
                                <p className="about-spotlight-body">
                                    Ask in plain language: <em>"Which leads haven't been called in 3 days?"</em> or <em>"How much fee is overdue?"</em>
                                    — and get real answers. Instyte's AI also connects to WhatsApp, calendars, Google Sheets, or your CRM automatically.
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

                {/* Why Instyte */}
                <section className="about-section about-section--alt">
                    <div className="about-section-inner">
                        <div className="about-section-label" data-animate="fade-up"><Award size={13} /> Why Instyte</div>
                        <h2 className="about-section-heading" data-animate="fade-up">What every other EdTech tool is missing</h2>
                        <p className="about-section-sub" data-animate="fade-up">
                            We focused on the gaps most education platforms leave open — and built tools that actually close them.
                        </p>
                        <div className="about-diff-grid">
                            {DIFFERENTIATORS.map(({ Icon: DI, color, title, body }, i) => (
                                <div key={title} className="about-diff-card" data-animate="fade-up" style={{ '--delay': `${i * 0.07}s` }}>
                                    <div className={`about-diff-icon-wrap about-icon-bg--${color}`}><DI size={22} /></div>
                                    <h3 className="about-diff-title">{title}</h3>
                                    <p className="about-diff-body">{body}</p>
                                </div>
                            ))}
                        </div>
                        <div className="about-compare" data-animate="fade-up">
                            <h3 className="about-compare-heading">Instyte vs. the alternatives</h3>
                            <div className="about-compare-scroll">
                                <table className="about-compare-table">
                                    <thead><tr>
                                        <th>Capability</th>
                                        <th className="about-compare-us">Instyte</th>
                                        <th>Generic CRM</th>
                                        <th>Spreadsheets</th>
                                    </tr></thead>
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

                {/* Pricing */}
                <section id="edu-pricing" className="about-section about-section--alt">
                    <div className="about-section-inner">
                        <div className="about-section-label" data-animate="fade-up">
                            <CreditCard size={13} /> Pricing
                        </div>
                        <h2 className="about-section-heading" data-animate="fade-up">
                            Transparent pricing — no sales call required
                        </h2>
                        <p className="about-section-sub" data-animate="fade-up">
                            Instyte Cloud has fixed monthly plans — pay only for the modules you use.
                            On-Premise products are priced based on your institution's size. <strong>Every number is public.</strong>
                        </p>

                        {/* Radical Transparency Banner */}
                        <div className="about-pricing-transparency" data-animate="fade-up">
                            <div className="about-pricing-transparency-left">
                                <div className="about-pricing-transparency-eyebrow">
                                    <Zap size={13} /> Why we show prices publicly
                                </div>
                                <h3 className="about-pricing-transparency-heading">
                                    Nobody in this market shows their prices before a call.<br />
                                    <span>We do — because we have nothing to hide.</span>
                                </h3>
                                <p className="about-pricing-transparency-body">
                                    Every competitor will make you book a demo, sit through a pitch, and wait for a "customised quote"
                                    before they whisper a number. That number is always inflated — because they're padding for negotiation room.
                                    We don't play that game.
                                </p>
                                <p className="about-pricing-transparency-body">
                                    Instyte delivers <strong>200% of what the market offers</strong> at <strong>70% of what they charge</strong>.
                                    Our pricing is public because our product earns it.
                                </p>
                                <div className="about-pricing-transparency-pills">
                                    <span className="about-pricing-tp-pill about-pricing-tp-pill--green"><Check size={12} /> 70% lower than market rate</span>
                                    <span className="about-pricing-tp-pill about-pricing-tp-pill--indigo"><Sparkles size={12} /> 200% more features included</span>
                                    <span className="about-pricing-tp-pill about-pricing-tp-pill--amber"><ShieldCheck size={12} /> Zero hidden fees</span>
                                </div>
                            </div>
                            <div className="about-pricing-transparency-right">
                                <div className="about-pricing-vs-card">
                                    <div className="about-pricing-vs-row about-pricing-vs-row--them">
                                        <span className="about-pricing-vs-label">Typical EdTech platform</span>
                                        <div className="about-pricing-vs-price">
                                            <span className="about-pricing-vs-amount">₹10k–25k</span>
                                            <span className="about-pricing-vs-period">/month</span>
                                        </div>
                                        <ul className="about-pricing-vs-points">
                                            <li><X size={11} /> Full bundle forced — pay for everything</li>
                                            <li><X size={11} /> Prices hidden until sales call</li>
                                            <li><X size={11} /> Annual contract required</li>
                                            <li><X size={11} /> No AI, no finance module</li>
                                        </ul>
                                    </div>
                                    <div className="about-pricing-vs-divider"><span>VS</span></div>
                                    <div className="about-pricing-vs-row about-pricing-vs-row--us">
                                        <span className="about-pricing-vs-label">Instyte</span>
                                        <div className="about-pricing-vs-price">
                                            <span className="about-pricing-vs-amount">₹6,999</span>
                                            <span className="about-pricing-vs-period">/month base</span>
                                        </div>
                                        <ul className="about-pricing-vs-points">
                                            <li><Check size={11} /> Pay only for modules you use</li>
                                            <li><Check size={11} /> Prices fully public — no calls needed</li>
                                            <li><Check size={11} /> Month-to-month, cancel anytime</li>
                                            <li><Check size={11} /> AI + Finance + Hostel all available</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Reveal Gate */}
                        {!pricingRevealed ? (
                            <div className="about-pricing-gate" data-animate="fade-up">
                                <div className="about-pricing-gate-inner">
                                    <div className="about-pricing-gate-icon"><CreditCard size={28} /></div>
                                    <h3 className="about-pricing-gate-title">Full pricing — right here, no sales call needed</h3>
                                    <p className="about-pricing-gate-sub">Plans start at <strong>₹6,999/month</strong>. Every rupee visible. No surprises.</p>
                                    <button className="about-pricing-gate-btn" onClick={() => setPricingRevealed(true)}>
                                        <Sparkles size={15} /> Show me the pricing
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                            {/* Unified product pricing card */}
                            <div className="about-pricing-unified" data-animate="fade-up">
                                <div className="about-pricing-unified-col about-pricing-unified-col--cloud">
                                    <div className="about-pricing-unified-header">
                                        <div className="about-pricing-unified-icon about-pricing-unified-icon--indigo"><Globe size={18} /></div>
                                        <div>
                                            <div className="about-pricing-unified-name">Instyte Cloud</div>
                                            <div className="about-pricing-unified-tagline">SaaS · Hosted · Monthly</div>
                                        </div>
                                    </div>
                                    <div className="about-pricing-unified-plans">
                                        {PRICING_PLANS.map((plan) => (
                                            <div key={plan.name} className={`about-pricing-unified-plan ${plan.highlighted ? 'about-pricing-unified-plan--popular' : ''}`}>
                                                {plan.highlighted && <span className="about-pricing-unified-popular-tag"><Star size={9} /> Popular</span>}
                                                <div className="about-pricing-unified-plan-name">{plan.name}</div>
                                                <div className="about-pricing-unified-plan-price">
                                                    {plan.price ? <>₹{plan.price.toLocaleString('en-IN')}<span>/mo</span></> : <span className="about-pricing-unified-custom">Custom</span>}
                                                </div>
                                                <div className="about-pricing-unified-plan-users">{plan.userLimit}</div>
                                                <ul className="about-pricing-unified-features">
                                                    {plan.features.map(f => <li key={f}><Check size={11} />{f}</li>)}
                                                </ul>
                                                <button
                                                    className={`about-pricing-unified-btn ${plan.highlighted ? 'about-pricing-unified-btn--solid' : ''}`}
                                                    onClick={() => { setSelectedPlan(plan.name); setDemoOpen(true); }}>
                                                    {plan.cta} <ArrowRight size={13} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="about-pricing-unified-note">Add-ons: Leads +₹2,199 · Finance +₹2,599 · AI +₹1,999 · Hostel +₹2,599 · Prices negotiable</p>
                                </div>
                                <div className="about-pricing-unified-divider" />
                                <div className="about-pricing-unified-col about-pricing-unified-col--onprem">
                                    <div className="about-pricing-unified-header">
                                        <div className="about-pricing-unified-icon about-pricing-unified-icon--emerald"><Cpu size={18} /></div>
                                        <div>
                                            <div className="about-pricing-unified-name">On-Premise</div>
                                            <div className="about-pricing-unified-tagline">Self-hosted · Your servers · One-time</div>
                                        </div>
                                    </div>
                                    <div className="about-pricing-unified-plans">
                                        <div className="about-pricing-unified-plan about-pricing-unified-plan--onprem">
                                            <div className="about-pricing-unified-plan-name">Instyte OnPremise</div>
                                            <div className="about-pricing-unified-plan-price about-pricing-unified-custom">Discuss</div>
                                            <div className="about-pricing-unified-plan-users">Full platform · All modules · Docker</div>
                                            <ul className="about-pricing-unified-features">
                                                <li><Check size={11} />Identical to Cloud — every module</li>
                                                <li><Check size={11} />Data stays on your premises</li>
                                                <li><Check size={11} />Remote access via Relay + Connector</li>
                                                <li><Check size={11} />One-time licence + support contract</li>
                                            </ul>
                                            <button className="about-pricing-unified-btn about-pricing-unified-btn--emerald"
                                                onClick={() => { setSelectedPlan('Instyte OnPremise'); setDemoOpen(true); }}>
                                                Get a Quote <ArrowRight size={13} />
                                            </button>
                                        </div>
                                        <div className="about-pricing-unified-plan about-pricing-unified-plan--onprem">
                                            <div className="about-pricing-unified-plan-name">OnPremise Lite</div>
                                            <div className="about-pricing-unified-plan-price about-pricing-unified-custom">Discuss</div>
                                            <div className="about-pricing-unified-plan-users">Lightweight · Java + React · WhatsApp</div>
                                            <ul className="about-pricing-unified-features">
                                                <li><Check size={11} />Student records & fee collection</li>
                                                <li><Check size={11} />WhatsApp integration included</li>
                                                <li><Check size={11} />Self-contained, no cloud needed</li>
                                                <li><Check size={11} />One-time activation · minimal infra</li>
                                            </ul>
                                            <button className="about-pricing-unified-btn about-pricing-unified-btn--amber"
                                                onClick={() => { setSelectedPlan('Instyte OnPremise Lite'); setDemoOpen(true); }}>
                                                Get a Quote <ArrowRight size={13} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="about-pricing-unified-note">Pricing based on number of users — contact us for a tailored quote</p>
                                </div>
                            </div>

                            {/* Interactive calculator */}
                            <PricingCalculator onSelectPlan={(plan) => { setSelectedPlan(plan); }} onBook={() => setDemoOpen(true)} />

                            {/* Why this price */}
                            <div className="about-pricing-why" data-animate="fade-up">
                                <h3 className="about-pricing-why-heading"><DollarSign size={16} /> Why does Instyte cost what it costs?</h3>
                                <p className="about-pricing-why-body">
                                    Running a serious SaaS platform for education isn't cheap — here's what your subscription actually pays for:
                                </p>
                                <div className="about-pricing-why-grid">
                                    <div className="about-pricing-why-item">
                                        <span className="about-pricing-why-dot about-pricing-why-dot--emerald" />
                                        <div><strong>Cloud infrastructure</strong><p>Dedicated database schema per tenant on AWS RDS, S3 for document storage, CloudFront CDN, and auto-scaling compute.</p></div>
                                    </div>
                                    <div className="about-pricing-why-item">
                                        <span className="about-pricing-why-dot about-pricing-why-dot--indigo" />
                                        <div><strong>AI & ML compute</strong><p>Every lead is scored by a real ML model. The AI assistant runs on a dedicated gRPC microservice — real inference, running continuously.</p></div>
                                    </div>
                                    <div className="about-pricing-why-item">
                                        <span className="about-pricing-why-dot about-pricing-why-dot--amber" />
                                        <div><strong>WhatsApp & communication APIs</strong><p>Automated fee reminders, admission confirmations, and event notifications — every message has a real cost we absorb.</p></div>
                                    </div>
                                    <div className="about-pricing-why-item">
                                        <span className="about-pricing-why-dot about-pricing-why-dot--blue" />
                                        <div><strong>Product & support team</strong><p>Instyte is actively developed — new modules ship regularly. Your subscription funds continued development and onboarding support.</p></div>
                                    </div>
                                </div>
                            </div>

                            {/* Competitor comparison */}
                            <div className="about-pricing-cmp" data-animate="fade-up">
                                <h3 className="about-pricing-cmp-heading">How does our pricing compare?</h3>
                                <p className="about-pricing-cmp-sub">Most education management tools charge more, deliver less — and bundle everything whether you want it or not.</p>
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
                                <p className="about-pricing-cmp-note">* Competitor pricing based on publicly available market research. All prices approximate and subject to change.</p>
                            </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Contact inside panel */}
                <section className="about-contact edu-panel-contact">
                    <div className="about-contact-inner">
                        <div className="about-contact-left" data-animate="fade-right">
                            <h2 className="about-section-label">Get in Touch</h2>
                            <p className="about-contact-heading">Ready to see Instyte in action?</p>
                            <p className="about-contact-body">
                                Drop us a message and we'll set up a personalised demo for your institution within one business day.
                            </p>
                            <div className="about-contact-info">
                                <div className="about-contact-info-item">
                                    <div className="about-icon-bg about-icon-bg--emerald" style={{ width: 34, height: 34, borderRadius: 8 }}><Send size={16} /></div>
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
                                    <button className="about-btn-secondary" onClick={() => setContactState('idle')}>Send another message</button>
                                </div>
                            ) : (
                                <form className="about-contact-form" onSubmit={submitEnquiry}>
                                    <div className="about-contact-row">
                                        <div className="about-contact-field">
                                            <label>Your name *</label>
                                            <input type="text" required placeholder="Jane Smith" value={contactForm.name}
                                                onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} />
                                        </div>
                                        <div className="about-contact-field">
                                            <label>Organization</label>
                                            <input type="text" placeholder="Your school / institute name" value={contactForm.organization}
                                                onChange={e => setContactForm(f => ({ ...f, organization: e.target.value }))} />
                                        </div>
                                    </div>
                                    <div className="about-contact-row">
                                        <div className="about-contact-field">
                                            <label>Email</label>
                                            <input type="email" placeholder="you@example.com" value={contactForm.email}
                                                onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} />
                                        </div>
                                        <div className="about-contact-field">
                                            <label>Phone</label>
                                            <input type="tel" placeholder="+91 98765 43210" value={contactForm.phone}
                                                onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))} />
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
                                        <textarea rows={4} placeholder="Tell us about your institution and what you're looking for…"
                                            value={contactForm.message}
                                            onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} />
                                    </div>
                                    {contactState === 'error' && (
                                        <p className="about-contact-error"><AlertTriangle size={14} /> Something went wrong — please try again or email us directly.</p>
                                    )}
                                    <button type="submit" className="about-btn-primary about-contact-submit" disabled={contactState === 'submitting'}>
                                        {contactState === 'submitting' ? 'Sending…' : <><Send size={16} /> Send message</>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

            </div>{/* end .edu-panel */}

            {/* ── Contact Us ────────────────────────────────────────────── */}
            <section id="contact" className="about-contact">
                <div className="about-contact-inner">
                    <div className="about-contact-left" data-animate="fade-right">
                        <h2 className="about-section-label">Get in Touch</h2>
                        <p className="about-contact-heading">Let's build something together</p>
                        <p className="about-contact-body">
                            Whether you're a school looking for Instyte Education, or a business that needs
                            custom software built — drop us a message and we'll get back within one business day.
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
                        Join schools already using Instyte Education — or talk to us about building something new for your business.
                    </p>
                    <div className="about-cta-actions">
                        <button className="about-btn-primary" onClick={() => window.open('/demo', '_blank')}>
                            Try Instyte Education Demo <ArrowRight size={16} />
                        </button>
                        <button className="about-btn-ghost about-btn-ghost--light" onClick={scrollToContact}>
                            Discuss a project <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Footer ────────────────────────────────────────────────── */}
            <footer className="about-footer">
                <div className="about-footer-inner">
                    <div className="about-footer-brand">
                        <img src={LOGO} alt="Instyte Labs" className="about-footer-logo"
                            onError={e => e.target.style.display = 'none'} />
                        <div className="about-footer-brand-text">
                            <span className="about-footer-name">Instyte Labs</span>
                            <span className="about-footer-tagline">SaaS &amp; Software Products</span>
                        </div>
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
                        &copy; {new Date().getFullYear()} Instyte Labs. All rights reserved. &nbsp;·&nbsp;
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
            {demoOpen  && <DemoModal  onClose={() => setDemoOpen(false)} />}

        </div>
    );
}
