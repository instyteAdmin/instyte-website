import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { DollarSign, TrendingUp, AlertCircle, CreditCard } from 'lucide-react';
import './DemoFinance.css';
import { FINANCE_MONTHLY, FINANCE_SUMMARY, RECENT_PAYMENTS } from '../DemoData';

const fmt = (n) => `₹${n.toLocaleString('en-IN')}`;
const fmtL = (n) => n >= 100000 ? `₹${(n/100000).toFixed(1)}L` : fmt(n);

const FinTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="fin-tooltip">
      {label && <div className="fin-tooltip-label">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="fin-tooltip-row">
          <span className="fin-tooltip-dot" style={{ background: p.color }} />
          <span className="fin-tooltip-name">{p.name}</span>
          <span className="fin-tooltip-val">{fmtL(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

const KPI_CONFIG = [
  { key: 'totalRevenue',  label: 'Total Revenue',    icon: DollarSign,    iconBg: 'rgba(59,130,246,0.12)',  iconColor: '#3B82F6' },
  { key: 'totalExpenses', label: 'Total Expenses',   icon: TrendingUp,    iconBg: 'rgba(245,158,11,0.12)',  iconColor: '#F59E0B' },
  { key: 'netProfit',     label: 'Net Profit',        icon: CreditCard,    iconBg: 'rgba(16,185,129,0.12)',  iconColor: '#10B981' },
  { key: 'pendingFees',   label: 'Pending Fees',      icon: AlertCircle,   iconBg: 'rgba(244,63,94,0.12)',   iconColor: '#F43F5E' },
];

export default function DemoFinance() {
  const badgeClass = (s) => s.toLowerCase();

  return (
    <div className="finance-page">

      {/* Header */}
      <div className="fin-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h1 className="fin-title">Finance</h1>
          <span className="fin-badge">Admin</span>
        </div>
      </div>

      {/* KPI row */}
      <div className="fin-kpi-row">
        {KPI_CONFIG.map(({ key, label, icon: Icon, iconBg, iconColor }) => (
          <div className="fin-kpi" key={key}>
            <div className="fin-kpi-label">
              <span>{label}</span>
              <div className="fin-kpi-icon" style={{ background: iconBg }}>
                <Icon size={16} color={iconColor} />
              </div>
            </div>
            <div className="fin-kpi-value">{fmtL(FINANCE_SUMMARY[key])}</div>
            <div className="fin-kpi-sub">Last 6 months</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="fin-chart-card">
        <div style={{ marginBottom: 14 }}>
          <div className="fin-card-title">Monthly Revenue vs Expenses</div>
          <div className="fin-card-subtitle">6-month trend</div>
        </div>
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={FINANCE_MONTHLY} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={v => `₹${(v/100000).toFixed(0)}L`} tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <Tooltip content={<FinTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="revenue"  name="Revenue"  fill="#3B82F6" radius={[4,4,0,0]} maxBarSize={36} />
            <Bar dataKey="expenses" name="Expenses" fill="#F59E0B" radius={[4,4,0,0]} maxBarSize={36} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent payments table */}
      <div className="fin-table-card">
        <div className="fin-table-header">Recent Payments</div>
        <div className="fin-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Receipt ID</th>
                <th>Student</th>
                <th>Program</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_PAYMENTS.map(p => (
                <tr key={p.id}>
                  <td style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 12 }}>{p.id}</td>
                  <td>{p.student}</td>
                  <td>{p.program}</td>
                  <td style={{ fontWeight: 600 }}>{fmt(p.amount)}</td>
                  <td>{p.method}</td>
                  <td>{p.date}</td>
                  <td>
                    <span className={`pay-badge ${badgeClass(p.status)}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
