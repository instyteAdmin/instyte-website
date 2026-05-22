import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Flame, MoreVertical, UserPlus } from 'lucide-react';
import { LEADS } from '../DemoData';
import './DemoLeads.css';

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

const STATUS_COLORS = {
  New:        { bg: '#EFF6FF', text: '#3B82F6' },
  Contacted:  { bg: '#ECFEFF', text: '#06B6D4' },
  Trial:      { bg: '#FFFBEB', text: '#D97706' },
  Converted:  { bg: '#F0FDF4', text: '#10B981' },
  Lost:       { bg: '#F8FAFC', text: '#94A3B8' },
};

const HEAT_COLORS = {
  Hot:  '#F43F5E',
  Warm: '#F59E0B',
  Cold: '#94A3B8',
};

const ALL_STATUSES = ['All', 'New', 'Contacted', 'Trial', 'Converted', 'Lost'];
const ALL_HEATS    = ['All', 'Hot', 'Warm', 'Cold'];

function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS['New'];
  return (
    <span className="dl-badge" style={{ background: c.bg, color: c.text }}>
      {status}
    </span>
  );
}

function HeatBadge({ heat }) {
  const color = HEAT_COLORS[heat] || '#94A3B8';
  return (
    <span className="dl-heat" style={{ color }}>
      <Flame size={13} fill={color} />
      {heat}
    </span>
  );
}

function ActionsMenu({ onAction }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dl-actions-wrap">
      <button
        className="dl-actions-btn"
        onClick={() => setOpen((p) => !p)}
        aria-label="Actions"
      >
        <MoreVertical size={15} />
      </button>
      {open && (
        <div className="dl-actions-menu">
          {['View Details', 'Follow Up', 'Convert to Student', 'Mark Lost'].map((item) => (
            <button
              key={item}
              className="dl-actions-item"
              onClick={() => { setOpen(false); onAction(); }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DemoLeads() {
  const [search,      setSearch]      = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [heatFilter,   setHeatFilter]   = useState('All');
  const [toast,        setToast]         = useState(false);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const filtered = useMemo(() => {
    return LEADS.filter((l) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.program.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.counsellor.toLowerCase().includes(q);
      const matchStatus = statusFilter === 'All' || l.status === statusFilter;
      const matchHeat   = heatFilter   === 'All' || l.heat   === heatFilter;
      return matchSearch && matchStatus && matchHeat;
    });
  }, [search, statusFilter, heatFilter]);

  return (
    <div className="dl-root">
      {/* ── Toolbar ──────────────────────────────────────────────────────── */}
      <div className="dl-toolbar">
        <div className="dl-toolbar-left">
          <div className="dl-search-wrap">
            <Search size={15} className="dl-search-icon" />
            <input
              type="text"
              className="dl-search"
              placeholder="Search leads…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="dl-select-wrap">
            <select
              className="dl-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {ALL_STATUSES.map((s) => (
                <option key={s} value={s}>{s === 'All' ? 'All Statuses' : s}</option>
              ))}
            </select>
            <ChevronDown size={13} className="dl-select-icon" />
          </div>
          <div className="dl-select-wrap">
            <select
              className="dl-select"
              value={heatFilter}
              onChange={(e) => setHeatFilter(e.target.value)}
            >
              {ALL_HEATS.map((h) => (
                <option key={h} value={h}>{h === 'All' ? 'All Heat' : h}</option>
              ))}
            </select>
            <ChevronDown size={13} className="dl-select-icon" />
          </div>
        </div>
        <button className="dl-add-btn" onClick={showToast}>
          <UserPlus size={15} />
          Add Lead
        </button>
      </div>

      {/* ── Table ─────────────────────────────────────────────────────────── */}
      <div className="dl-table-card">
        <div className="dl-table-meta">
          {filtered.length} lead{filtered.length !== 1 ? 's' : ''} found
        </div>
        <div className="dl-table-scroll">
          <table className="dl-table">
            <thead>
              <tr>
                <th>Lead ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Source</th>
                <th>Status</th>
                <th>Heat</th>
                <th>Counsellor</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id}>
                  <td className="dl-td-id">{lead.id}</td>
                  <td>
                    <div className="dl-name-wrap">
                      <div className="dl-avatar">{lead.name[0]}</div>
                      <div>
                        <span className="dl-name">{lead.name}</span>
                        <span className="dl-email">{lead.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="dl-td-phone">{lead.phone}</td>
                  <td className="dl-td-prog">{lead.program}</td>
                  <td className="dl-td-source">{lead.source}</td>
                  <td><StatusBadge status={lead.status} /></td>
                  <td><HeatBadge heat={lead.heat} /></td>
                  <td className="dl-td-counsel">{lead.counsellor}</td>
                  <td className="dl-td-date">{lead.createdDate}</td>
                  <td><ActionsMenu onAction={showToast} /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={10} className="dl-empty">No leads match your filters</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DemoToast show={toast} onClose={() => setToast(false)} />
    </div>
  );
}
