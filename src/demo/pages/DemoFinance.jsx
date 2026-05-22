import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Wallet, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { FINANCE } from '../DemoData';
import './DemoFinance.css';

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

const PAYMENT_STATUS_COLORS = {
  Completed: { bg: '#F0FDF4', text: '#10B981' },
  Pending:   { bg: '#FFFBEB', text: '#D97706' },
  Overdue:   { bg: '#FFF1F2', text: '#F43F5E' },
};

const METHOD_COLORS = {
  UPI:  { bg: '#F5F3FF', text: '#7C3AED' },
  Bank: { bg: '#EFF6FF', text: '#3B82F6' },
  Cash: { bg: '#F0FDF4', text: '#10B981' },
};

function SummaryCard({ icon: Icon, color, label, value }) {
  return (
    <div className={`df-summary-card df-summary-card--${color}`}>
      <div className={`df-summary-icon df-summary-icon--${color}`}>
        <Icon size={20} />
      </div>
      <div className="df-summary-body">
        <span className="df-summary-value">{value}</span>
        <span className="df-summary-label">{label}</span>
      </div>
    </div>
  );
}

function formatRupees(val) {
  return '₹' + (val / 100000).toFixed(1) + 'L';
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="df-tooltip">
        <p className="df-tooltip-label">{label}</p>
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

export default function DemoFinance() {
  const [toast, setToast] = useState(false);

  return (
    <div className="df-root">
      {/* ── Summary cards ─────────────────────────────────────────────────── */}
      <div className="df-summary-grid">
        <SummaryCard icon={Wallet}      color="green"  label="Total Collected"  value={FINANCE.summary.totalCollected} />
        <SummaryCard icon={Clock}       color="amber"  label="Pending"          value={FINANCE.summary.pending} />
        <SummaryCard icon={AlertCircle} color="rose"   label="Overdue"          value={FINANCE.summary.overdue} />
        <SummaryCard icon={TrendingUp}  color="violet" label="This Month"       value={FINANCE.summary.thisMonth} />
      </div>

      {/* ── Chart ─────────────────────────────────────────────────────────── */}
      <div className="df-chart-card">
        <h3 className="df-chart-title">Monthly Collection</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={FINANCE.monthlyChart} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatRupees} tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="collected" fill="#10B981" radius={[4, 4, 0, 0]} name="collected" />
            <Bar dataKey="pending"   fill="#FDE68A" radius={[4, 4, 0, 0]} name="pending" />
          </BarChart>
        </ResponsiveContainer>
        <div className="df-chart-legend">
          <span><span className="df-legend-dot" style={{ background: '#10B981' }} /> Collected</span>
          <span><span className="df-legend-dot" style={{ background: '#FDE68A' }} /> Pending</span>
        </div>
      </div>

      {/* ── Recent Payments table ─────────────────────────────────────────── */}
      <div className="df-table-card">
        <div className="df-table-header">
          <h3 className="df-table-title">Recent Payments</h3>
          <button className="df-record-btn" onClick={() => { setToast(true); setTimeout(() => setToast(false), 3000); }}>
            + Record Payment
          </button>
        </div>
        <div className="df-table-scroll">
          <table className="df-table">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Student</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {FINANCE.recentPayments.map((p) => {
                const sc = PAYMENT_STATUS_COLORS[p.status] || PAYMENT_STATUS_COLORS['Pending'];
                const mc = METHOD_COLORS[p.method] || METHOD_COLORS['Cash'];
                return (
                  <tr key={p.id}>
                    <td className="df-td-id">{p.id}</td>
                    <td>
                      <div className="df-student-wrap">
                        <div className="df-avatar">{p.student[0]}</div>
                        <span className="df-student-name">{p.student}</span>
                      </div>
                    </td>
                    <td className="df-td-amount">{p.amount}</td>
                    <td className="df-td-date">{p.date}</td>
                    <td>
                      <span className="df-badge" style={{ background: mc.bg, color: mc.text }}>
                        {p.method}
                      </span>
                    </td>
                    <td>
                      <span className="df-badge" style={{ background: sc.bg, color: sc.text }}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <DemoToast show={toast} onClose={() => setToast(false)} />
    </div>
  );
}
