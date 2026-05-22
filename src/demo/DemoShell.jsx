import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, Target, GraduationCap, CreditCard,
  Bell, ChevronDown, X, ChevronRight, Building2
} from 'lucide-react';
import './DemoShell.css';
import DemoDashboard from './pages/DemoDashboard';
import DemoLeads from './pages/DemoLeads';
import DemoStudents from './pages/DemoStudents';
import DemoFinance from './pages/DemoFinance';
import { DEMO_USER } from './DemoData';

// ─── Sidebar groups ──────────────────────────────────────────
const SIDEBAR_GROUPS = [
  {
    key: 'administration',
    title: 'Administration',
    groupColor: '#6366f1',
    groupColorBg: 'rgba(99,102,241,0.12)',
    groupIcon: <Building2 size={14} />,
    items: [
      { name: 'Dashboard', icon: <LayoutDashboard size={15} />, className: 'icon-dashboard', path: '/demo/dashboard' },
      { name: 'Users',     icon: <Users size={15} />,           className: 'icon-users',     path: null },
    ],
  },
  {
    key: 'crm',
    title: 'CRM',
    groupColor: '#14b8a6',
    groupColorBg: 'rgba(20,184,166,0.11)',
    groupIcon: <Target size={14} />,
    items: [
      { name: 'Leads', icon: <Target size={15} />, className: 'icon-leads', path: '/demo/leads' },
    ],
  },
  {
    key: 'academics',
    title: 'Academics',
    groupColor: '#8b5cf6',
    groupColorBg: 'rgba(139,92,246,0.11)',
    groupIcon: <GraduationCap size={14} />,
    items: [
      { name: 'Students', icon: <GraduationCap size={15} />, className: 'icon-students', path: '/demo/students' },
    ],
  },
  {
    key: 'finance',
    title: 'Finance',
    groupColor: '#f59e0b',
    groupColorBg: 'rgba(245,158,11,0.11)',
    groupIcon: <CreditCard size={14} />,
    items: [
      { name: 'Finance', icon: <CreditCard size={15} />, className: 'icon-fees', path: '/demo/finance' },
    ],
  },
];

// ─── Tab config ───────────────────────────────────────────────
const TAB_META = {
  '/demo/dashboard': { title: 'Dashboard', icon: <LayoutDashboard size={16} />, closeable: false },
  '/demo/leads':     { title: 'Leads',     icon: <Target size={16} />,          closeable: true  },
  '/demo/students':  { title: 'Students',  icon: <GraduationCap size={16} />,   closeable: true  },
  '/demo/finance':   { title: 'Finance',   icon: <CreditCard size={16} />,      closeable: true  },
};

// ─── Demo Toast ───────────────────────────────────────────────
export function DemoToast({ onDismiss }) {
  return (
    <div className="demo-toast">
      <span>This is a demo account.</span>
      <button
        className="demo-toast-btn"
        onClick={() => window.open('https://www.instyte.com/#contact', '_blank')}
      >
        Get Started →
      </button>
      <button
        onClick={onDismiss}
        style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0 2px', display:'flex', alignItems:'center' }}
      >
        <X size={16} />
      </button>
    </div>
  );
}

export default function DemoShell() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [openGroups, setOpenGroups]   = useState({ administration: true, crm: true, academics: true, finance: true });
  const [tabs, setTabs] = useState(['/demo/dashboard']);
  const [toast, setToast] = useState(false);

  const activePath = location.pathname;

  const toggleGroup = (key) => setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }));

  const handleNavClick = (item) => {
    if (!item.path) { showDemoToast(); return; }
    navigate(item.path);
    // Add tab if not present
    setTabs(prev => prev.includes(item.path) ? prev : [...prev, item.path]);
    setShowSidebar(false);
  };

  const closeTab = (e, path) => {
    e.stopPropagation();
    setTabs(prev => {
      const next = prev.filter(p => p !== path);
      if (activePath === path) {
        // navigate to previous tab
        const idx = prev.indexOf(path);
        navigate(next[Math.max(0, idx - 1)]);
      }
      return next;
    });
  };

  const showDemoToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  // Determine active sidebar item
  const activeItem = SIDEBAR_GROUPS
    .flatMap(g => g.items)
    .find(i => i.path === activePath)?.name || 'Dashboard';

  return (
    <div className="demo-wrapper">

      {/* ── Topbar ─────────────────────────────────────────── */}
      <header className="demo-topbar">
        <div className="demo-topbar-left">
          <button className="demo-hamburger" onClick={() => setShowSidebar(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
          <span className="demo-institution-name">{DEMO_USER.institution}</span>
        </div>
        <div className="demo-topbar-right">
          <button className="demo-icon-btn" onClick={showDemoToast} aria-label="Notifications">
            <Bell size={18} />
          </button>
          <button
            className="demo-cta-btn"
            onClick={() => window.open('https://www.instyte.com/#contact', '_blank')}
          >
            Get Started →
          </button>
        </div>
      </header>

      {/* ── Tabbar ─────────────────────────────────────────── */}
      <div className="demo-tabbar">
        {tabs.map(path => {
          const meta = TAB_META[path];
          if (!meta) return null;
          return (
            <div
              key={path}
              className={`demo-tab${activePath === path ? ' active' : ''}`}
              onClick={() => navigate(path)}
            >
              <span className="demo-tab-icon">{meta.icon}</span>
              <span className="demo-tab-title">{meta.title}</span>
              {meta.closeable && (
                <span className="demo-tab-close" onClick={e => closeTab(e, path)}>
                  <X size={13} />
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Main content ───────────────────────────────────── */}
      <main className="demo-main-panel">
        <div className="demo-content">
          <Routes>
            <Route path="dashboard" element={<DemoDashboard showToast={showDemoToast} />} />
            <Route path="leads"     element={<DemoLeads     showToast={showDemoToast} />} />
            <Route path="students"  element={<DemoStudents  showToast={showDemoToast} />} />
            <Route path="finance"   element={<DemoFinance   showToast={showDemoToast} />} />
            <Route path="*"         element={<DemoDashboard showToast={showDemoToast} />} />
          </Routes>
        </div>
      </main>

      {/* ── Sidebar overlay ────────────────────────────────── */}
      {showSidebar && (
        <div
          className="sidebar-popup-overlay"
          onClick={() => setShowSidebar(false)}
        >
          <aside className="sidebar-popup" onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="brand-toggle">
              <div className="brand">
                <img src="/logo.png" alt="Instyte Logo" className="brand-logo" onError={e => { e.target.style.display='none'; }} />
              </div>
              <button className="toggle-btn" onClick={() => setShowSidebar(false)}>
                <X size={16} />
              </button>
            </div>

            {/* Nav */}
            <div className="sidebar-nav-container">
              {SIDEBAR_GROUPS.map(({ key, title, groupColor, groupColorBg, groupIcon, items }) => (
                <div className="sb-sidebar-section" key={key}>
                  <div
                    className={`sb-section-header${openGroups[key] ? ' open' : ''}`}
                    onClick={() => toggleGroup(key)}
                    style={{ '--group-color': groupColor }}
                  >
                    <div className="sb-section-icon-pill" style={{ background: groupColorBg, color: groupColor }}>
                      {groupIcon}
                    </div>
                    <span className="sb-section-label">{title}</span>
                    <ChevronDown size={12} className="sb-section-chevron" />
                  </div>
                  <div className={`sb-section-body${openGroups[key] ? ' open' : ''}`}>
                    <ul>
                      {items.map(item => (
                        <li
                          key={item.name}
                          className={activeItem === item.name ? 'active' : ''}
                          onClick={() => handleNavClick(item)}
                        >
                          <div className={`sidebar-icon ${item.className}`}>{item.icon}</div>
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sidebar-user-profile" onClick={showDemoToast}>
              <div className="user-avatar">PS</div>
              <div className="user-info">
                <div className="user-name">{DEMO_USER.name}</div>
                <div className="user-role">{DEMO_USER.role}</div>
              </div>
              <ChevronRight size={16} style={{ color: '#94a3b8', flexShrink: 0 }} />
            </div>

            <div className="sidebar-collapse">
              <span className="demo-mode-badge">Demo Mode</span>
            </div>
          </aside>
        </div>
      )}

      {/* ── Toast ──────────────────────────────────────────── */}
      {toast && <DemoToast onDismiss={() => setToast(false)} />}
    </div>
  );
}
