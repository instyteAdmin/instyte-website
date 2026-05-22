import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import {
  Users, GraduationCap, Wallet, TrendingUp,
  AlertCircle, CreditCard, BookOpen,
  UserPlus, UserCheck, Receipt, CalendarCheck,
} from 'lucide-react';
import { STATS, LEADS, FINANCE, LEAD_SOURCES_CHART } from '../DemoData';
import './DemoDashboard.css';

function DemoToast({ show, onClose }) {
  if (!show) return null;
  return (
    <div className="demo-toast">
      <span>This is a demo. Sign up to use this feature.</span>
      <a
        href="https://www.instyte.com/#contact"
        target="_blank"
        rel="noopener noreferrer"
        className="demo-toast-cta"
      >
        Get Started →
      </a>
      <button className="demo-toast-close" onClick={onClose}>×</button>
    </div>
  );
}

function KpiCard({ icon: Icon, color, label, value, sub }) {
  return (
    <div className={`dd-kpi-card dd-kpi-card--${color}`}>
      <div className={`dd-kpi-icon dd-kpi-icon--${color}`}>
        <Icon size={20} />
      </div>
      <div className="dd-kpi-body">
        <span className="dd-kpi-value">{value}</span>
        <span className="dd-kpi-label">{label}</span>
        {sub && <span className="dd-kpi-sub">{sub}</span>}
      </div>
    </div>
  );
}

const STATUS_COLORS = {
  New:        '#3B82F6',
  Contacted:  '#06B6D4',
  Trial:      '#F59E0B',
  Converted:  '#10B981',
  Lost:       '#94A3B8',
};

function StatusBadge({ status }) {
  return (
    <span
      className="dd-status-badge"
      style={{ background: STATUS_COLORS[status] + '1A', color: STATUS_COLORS[status] }}
    >
      {status}
    </span>
  );
}

const QUICK_ACTIONS = [
  { Icon: UserPlus,     label: 'Add Lead',        color: 'blue'   },
  { Icon: UserCheck,    label: 'Add Student',      color: 'green'  },
  { Icon: Receipt,      label: 'Record Payment',   color: 'amber'  },
  { Icon: CalendarCheck,label: 'Schedule Class',   color: 'violet' },
];

function formatRupees(val) {
  return '₹' + (val / 100000).toFixed(1) + 'L';
}

const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="dd-tooltip">
        <p className="dd-tooltip-label">{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name === 'collected' ? 'Collected' : 'Pending'}: {formatRupees(p.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="dd-tooltip">
        <p>{payload[0].name}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function DemoDashboard() {
  const [toast, setToast] = useState(false);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const recentLeads = LEADS.slice(0, 5);

  return (
    <div className="dd-root">
      {/* ── Greeting ──────────────────────────────────────────────────────── */}
      <div className="dd-greeting-card">
        <div className="dd-greeting-left">
          <h2 className="dd-greeting-text">{greeting}, Priya 👋</h2>
          <p className="dd-greeting-date">{dateStr}</p>
        </div>
        <div className="dd-greeting-chips">
          <div className="dd-chip dd-chip--rose">
            <AlertCircle size={13} />
            Overdue Leads: {STATS.overduePayments}
          </div>
          <div className="dd-chip dd-chip--amber">
            <CreditCard size={13} />
            Overdue Payments: {STATS.overduePayments}
          </div>
          <div className="dd-chip dd-chip--green">
            <Wallet size={13} />
            Revenue: {STATS.revenueThisMonth}
          </div>
          <div className="dd-chip dd-chip--blue">
            <BookOpen size={13} />
            Classes Today: {STATS.classesToday}
          </div>
        </div>
      </div>

      {/* ── KPIs ──────────────────────────────────────────────────────────── */}
      <div className="dd-kpi-grid">
        <KpiCard icon={Users}       color="blue"   label="Total Leads"      value={STATS.totalLeads}     sub="+18 this month" />
        <KpiCard icon={GraduationCap} color="green" label="Active Students"  value={STATS.activeStudents} sub="+7 this month" />
        <KpiCard icon={Wallet}      color="violet" label="Revenue (Year)"   value="₹18.4L"               sub="Total collected" />
        <KpiCard icon={TrendingUp}  color="amber"  label="Conversion Rate"  value={STATS.conversionRate} sub="Leads to students" />
      </div>

      {/* ── Charts ────────────────────────────────────────────────────────── */}
      <div className="dd-charts-row">
        <div className="dd-chart-card">
          <h3 className="dd-chart-title">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={FINANCE.monthlyChart} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={formatRupees} tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar dataKey="collected" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="collected" />
              <Bar dataKey="pending"   fill="#E9D5FF" radius={[4, 4, 0, 0]} name="pending" />
            </BarChart>
          </ResponsiveContainer>
          <div className="dd-chart-legend">
            <span><span className="dd-legend-dot" style={{ background: '#8B5CF6' }} /> Collected</span>
            <span><span className="dd-legend-dot" style={{ background: '#E9D5FF' }} /> Pending</span>
          </div>
        </div>

        <div className="dd-chart-card">
          <h3 className="dd-chart-title">Lead Sources</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={LEAD_SOURCES_CHART}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {LEAD_SOURCES_CHART.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontSize: 12, color: '#475569' }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Recent Leads ──────────────────────────────────────────────────── */}
      <div className="dd-table-card">
        <div className="dd-table-header">
          <h3 className="dd-table-title">Recent Leads</h3>
          <a href="/demo/leads" className="dd-table-view-all">View all →</a>
        </div>
        <div className="dd-table-scroll">
          <table className="dd-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Program</th>
                <th>Status</th>
                <th>Counsellor</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <div className="dd-lead-name-wrap">
                      <div className="dd-lead-avatar">{lead.name[0]}</div>
                      <div>
                        <span className="dd-lead-name">{lead.name}</span>
                        <span className="dd-lead-id">{lead.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="dd-td-prog">{lead.program}</td>
                  <td><StatusBadge status={lead.status} /></td>
                  <td className="dd-td-counsel">{lead.counsellor}</td>
                  <td className="dd-td-date">{lead.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Quick Actions ─────────────────────────────────────────────────── */}
      <div className="dd-actions-row">
        <h3 className="dd-actions-title">Quick Actions</h3>
        <div className="dd-actions-grid">
          {QUICK_ACTIONS.map(({ Icon, label, color }) => (
            <button
              key={label}
              className={`dd-action-btn dd-action-btn--${color}`}
              onClick={showToast}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <DemoToast show={toast} onClose={() => setToast(false)} />
    </div>
  );
}
