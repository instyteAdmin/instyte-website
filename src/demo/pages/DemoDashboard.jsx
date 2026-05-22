import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer, Legend
} from 'recharts';
import { Users, Target, GraduationCap, DollarSign } from 'lucide-react';
import './DemoDashboard.css';
import { DASHBOARD_KPI, FINANCE_MONTHLY, LEAD_STATUS_DATA, LEAD_SOURCE_DATA, DEMO_USER } from '../DemoData';

const fmt = (n) => n >= 100000 ? `₹${(n/100000).toFixed(1)}L` : `₹${n.toLocaleString('en-IN')}`;

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="adb-tooltip">
      {label && <div className="adb-tooltip-label">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="adb-tooltip-row">
          <span className="adb-tooltip-dot" style={{ background: p.color || p.fill }} />
          <span className="adb-tooltip-name">{p.name}</span>
          <span className="adb-tooltip-val">{fmt(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

const KpiCard = ({ label, value, subText, trend, icon, iconBg, iconColor }) => (
  <div className="adb-kpi-card">
    <div className="adb-kpi-top">
      <span className="adb-kpi-label">{label}</span>
      <div className="adb-kpi-icon" style={{ background: iconBg }}>
        {React.cloneElement(icon, { size: 17, color: iconColor })}
      </div>
    </div>
    <div className="adb-kpi-value">{value}</div>
    <div className="adb-kpi-sub">
      {trend > 0
        ? <span className="adb-kpi-trend-up">↑ {trend}%</span>
        : <span className="adb-kpi-trend-down">↓ {Math.abs(trend)}%</span>
      }
      <span>{subText}</span>
    </div>
  </div>
);

export default function DemoDashboard() {
  const [activeLeadIdx, setActiveLeadIdx] = useState(null);
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="adb-root">

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="adb-header">
        <div className="adb-header-left">
          <h1 className="adb-title">Dashboard</h1>
          <span className="adb-role-badge">Admin</span>
        </div>
        <span className="adb-date">{today}</span>
      </div>

      {/* ── Greeting bento row ─────────────────────────────── */}
      <div className="adb-greeting-row">
        <div className="adb-greeting-card">
          <div className="adb-greeting-title">Good day, {DEMO_USER.name.split(' ')[0]} 👋</div>
          <div className="adb-greeting-sub">{DEMO_USER.institution} · {today.split(',')[0]}</div>
        </div>
        <div className="adb-stat-chip">
          <div className="adb-stat-chip-label">Leads This Month</div>
          <div className="adb-stat-chip-value">47</div>
          <div className="adb-stat-chip-sub">↑ 12 vs last month</div>
        </div>
        <div className="adb-stat-chip">
          <div className="adb-stat-chip-label">Conversion Rate</div>
          <div className="adb-stat-chip-value">{DASHBOARD_KPI.conversionRate}%</div>
          <div className="adb-stat-chip-sub">↑ {DASHBOARD_KPI.conversionGrowth}% vs last month</div>
        </div>
      </div>

      {/* ── KPI Cards ──────────────────────────────────────── */}
      <div className="adb-kpi-grid">
        <KpiCard
          label="Total Leads"
          value={DASHBOARD_KPI.totalLeads}
          subText="vs last month"
          trend={DASHBOARD_KPI.leadsGrowth}
          icon={<Target />}
          iconBg="rgba(59,130,246,0.12)"
          iconColor="#3B82F6"
        />
        <KpiCard
          label="Active Students"
          value={DASHBOARD_KPI.activeStudents.toLocaleString()}
          subText="vs last month"
          trend={DASHBOARD_KPI.studentsGrowth}
          icon={<GraduationCap />}
          iconBg="rgba(139,92,246,0.12)"
          iconColor="#8B5CF6"
        />
        <KpiCard
          label="Conversion Rate"
          value={`${DASHBOARD_KPI.conversionRate}%`}
          subText="vs last month"
          trend={DASHBOARD_KPI.conversionGrowth}
          icon={<Users />}
          iconBg="rgba(16,185,129,0.12)"
          iconColor="#10B981"
        />
        <KpiCard
          label="Total Revenue"
          value={fmt(DASHBOARD_KPI.totalRevenue)}
          subText="vs last month"
          trend={DASHBOARD_KPI.revenueGrowth}
          icon={<DollarSign />}
          iconBg="rgba(245,158,11,0.12)"
          iconColor="#F59E0B"
        />
      </div>

      {/* ── Charts row ─────────────────────────────────────── */}
      <div className="adb-chart-row">

        {/* Bar chart — Monthly Revenue */}
        <div className="adb-chart-card">
          <div className="adb-card-header">
            <div>
              <div className="adb-card-title">Monthly Revenue vs Expenses</div>
              <div className="adb-card-subtitle">Last 6 months</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={FINANCE_MONTHLY} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={v => `₹${(v/100000).toFixed(0)}L`} tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="revenue"  name="Revenue"  fill="#3B82F6" radius={[4,4,0,0]} maxBarSize={32} />
              <Bar dataKey="expenses" name="Expenses" fill="#F59E0B" radius={[4,4,0,0]} maxBarSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart — Lead Sources */}
        <div className="adb-chart-card">
          <div className="adb-card-header">
            <div>
              <div className="adb-card-title">Lead Sources</div>
              <div className="adb-card-subtitle">Distribution by channel</div>
            </div>
          </div>
          <div className="adb-donut-wrap">
            <div className="adb-donut-chart-area">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={LEAD_SOURCE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={68}
                    paddingAngle={3}
                    dataKey="value"
                    isAnimationActive={false}
                    onMouseEnter={(_, i) => setActiveLeadIdx(i)}
                    onMouseLeave={() => setActiveLeadIdx(null)}
                    strokeWidth={0}
                  >
                    {LEAD_SOURCE_DATA.map((entry, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={entry.color}
                        opacity={activeLeadIdx !== null && activeLeadIdx !== i ? 0.3 : 0.92}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {activeLeadIdx !== null && (
                <div className="adb-donut-centre">
                  <span className="adb-donut-pct">{LEAD_SOURCE_DATA[activeLeadIdx].value}</span>
                  <span className="adb-donut-name">{LEAD_SOURCE_DATA[activeLeadIdx].name}</span>
                </div>
              )}
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {LEAD_SOURCE_DATA.map((d, i) => (
                <div key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 6px', borderRadius: 6, cursor: 'pointer',
                    background: activeLeadIdx === i ? '#F1F5F9' : 'transparent', transition: 'background 0.12s' }}
                  onMouseEnter={() => setActiveLeadIdx(i)}
                  onMouseLeave={() => setActiveLeadIdx(null)}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: '#475569', flex: 1 }}>{d.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Lead Status row ────────────────────────────────── */}
      <div className="adb-chart-card" style={{ marginBottom: 16 }}>
        <div className="adb-card-header">
          <div>
            <div className="adb-card-title">Lead Status Breakdown</div>
            <div className="adb-card-subtitle">Current pipeline overview</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {LEAD_STATUS_DATA.map((s, i) => (
            <div key={i} style={{
              flex: '1 1 130px',
              background: `${s.color}12`,
              border: `1px solid ${s.color}30`,
              borderRadius: 10,
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: s.color, textTransform: 'uppercase', letterSpacing: '.4px' }}>{s.name}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#0F172A' }}>{s.value}</div>
              <div style={{ width: '100%', height: 4, background: `${s.color}25`, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(s.value / 68) * 100}%`, background: s.color, borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
