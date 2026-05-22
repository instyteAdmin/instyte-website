import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, GraduationCap, Wallet,
  Bell, LogOut, Menu, X, ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { DEMO_USER } from './DemoData';
import DemoDashboard from './pages/DemoDashboard';
import DemoLeads from './pages/DemoLeads';
import DemoStudents from './pages/DemoStudents';
import DemoFinance from './pages/DemoFinance';
import './DemoShell.css';

const LOGO = '/logo.png';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/demo/dashboard', Icon: LayoutDashboard },
  { label: 'Leads',     path: '/demo/leads',     Icon: Users           },
  { label: 'Students',  path: '/demo/students',  Icon: GraduationCap   },
  { label: 'Finance',   path: '/demo/finance',   Icon: Wallet          },
];

const PAGE_TITLES = {
  '/demo/dashboard': 'Dashboard',
  '/demo/leads':     'Leads',
  '/demo/students':  'Students',
  '/demo/finance':   'Finance',
};

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function DemoShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = PAGE_TITLES[location.pathname] || 'Demo';

  const handleGetStarted = () => {
    window.open('https://www.instyte.com/#contact', '_blank');
  };

  const handleLogout = () => {
    navigate('/demo');
  };

  return (
    <div className="demo-shell">
      {/* ── Sidebar ──────────────────────────────────────────────────────────── */}
      <aside className={`demo-sidebar ${sidebarOpen ? 'demo-sidebar--open' : ''}`}>
        <div className="demo-sidebar-header">
          <div className="demo-sidebar-brand">
            <img
              src={LOGO}
              alt="Instyte"
              className="demo-sidebar-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="demo-sidebar-logo-fallback" style={{ display: 'none' }}>I</div>
            <span className="demo-sidebar-name">Instyte</span>
          </div>
          <button
            className="demo-sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="demo-mode-badge">
          <span className="demo-mode-dot" />
          Demo Mode
        </div>

        <nav className="demo-sidebar-nav">
          {NAV_ITEMS.map(({ label, path, Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `demo-nav-item ${isActive ? 'demo-nav-item--active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Icon size={18} />
              <span>{label}</span>
              <ChevronRight size={14} className="demo-nav-chevron" />
            </NavLink>
          ))}
        </nav>

        <div className="demo-sidebar-footer">
          <div className="demo-user-row">
            <div className="demo-user-avatar">
              {getInitials(DEMO_USER.name)}
            </div>
            <div className="demo-user-info">
              <span className="demo-user-name">{DEMO_USER.name}</span>
              <span className="demo-user-role">{DEMO_USER.role} · {DEMO_USER.institution}</span>
            </div>
          </div>
          <button className="demo-logout-btn" onClick={handleLogout} title="Exit Demo">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* ── Sidebar overlay (mobile) ──────────────────────────────────────── */}
      {sidebarOpen && (
        <div
          className="demo-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="demo-main">
        {/* Topbar */}
        <header className="demo-topbar">
          <div className="demo-topbar-left">
            <button
              className="demo-hamburger"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <h1 className="demo-topbar-title">{pageTitle}</h1>
          </div>
          <div className="demo-topbar-right">
            <button className="demo-topbar-bell" aria-label="Notifications">
              <Bell size={18} />
              <span className="demo-topbar-bell-dot" />
            </button>
            <button className="demo-topbar-cta" onClick={handleGetStarted}>
              Get Started <ExternalLink size={13} />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="demo-content">
          <Routes>
            <Route path="dashboard" element={<DemoDashboard />} />
            <Route path="leads"     element={<DemoLeads />}     />
            <Route path="students"  element={<DemoStudents />}  />
            <Route path="finance"   element={<DemoFinance />}   />
            <Route path="*"         element={<DemoDashboard />} />
          </Routes>
        </main>
      </div>

      {/* ── Bottom nav (mobile) ───────────────────────────────────────────── */}
      <nav className="demo-bottom-nav">
        {NAV_ITEMS.map(({ label, path, Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `demo-bottom-nav-item ${isActive ? 'demo-bottom-nav-item--active' : ''}`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
