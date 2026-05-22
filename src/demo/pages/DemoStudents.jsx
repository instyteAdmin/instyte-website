import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, MoreVertical, UserPlus } from 'lucide-react';
import { STUDENTS } from '../DemoData';
import './DemoStudents.css';

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
  Active:   { bg: '#F0FDF4', text: '#10B981' },
  Inactive: { bg: '#F8FAFC', text: '#94A3B8' },
  'On Hold': { bg: '#FFFBEB', text: '#D97706' },
};

const FEES_COLORS = {
  Paid:    { bg: '#F0FDF4', text: '#10B981' },
  Pending: { bg: '#FFFBEB', text: '#D97706' },
  Overdue: { bg: '#FFF1F2', text: '#F43F5E' },
};

const ALL_STATUSES = ['All', 'Active', 'Inactive', 'On Hold'];
const ALL_PROGRAMS = ['All', ...Array.from(new Set(STUDENTS.map((s) => s.program)))];

function StatusBadge({ status, colors }) {
  const c = colors[status] || { bg: '#F8FAFC', text: '#94A3B8' };
  return (
    <span className="dst-badge" style={{ background: c.bg, color: c.text }}>
      {status}
    </span>
  );
}

function ActionsMenu({ onAction }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dst-actions-wrap">
      <button
        className="dst-actions-btn"
        onClick={() => setOpen((p) => !p)}
        aria-label="Actions"
      >
        <MoreVertical size={15} />
      </button>
      {open && (
        <div className="dst-actions-menu">
          {['View Profile', 'Record Payment', 'Promote'].map((item) => (
            <button
              key={item}
              className="dst-actions-item"
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

export default function DemoStudents() {
  const [search,        setSearch]        = useState('');
  const [statusFilter,  setStatusFilter]  = useState('All');
  const [programFilter, setProgramFilter] = useState('All');
  const [toast,         setToast]         = useState(false);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const filtered = useMemo(() => {
    return STUDENTS.filter((s) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.program.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q) ||
        s.batch.toLowerCase().includes(q);
      const matchStatus  = statusFilter  === 'All' || s.status  === statusFilter;
      const matchProgram = programFilter === 'All' || s.program === programFilter;
      return matchSearch && matchStatus && matchProgram;
    });
  }, [search, statusFilter, programFilter]);

  return (
    <div className="dst-root">
      {/* ── Toolbar ──────────────────────────────────────────────────────── */}
      <div className="dst-toolbar">
        <div className="dst-toolbar-left">
          <div className="dst-search-wrap">
            <Search size={15} className="dst-search-icon" />
            <input
              type="text"
              className="dst-search"
              placeholder="Search students…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="dst-select-wrap">
            <select
              className="dst-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {ALL_STATUSES.map((s) => (
                <option key={s} value={s}>{s === 'All' ? 'All Statuses' : s}</option>
              ))}
            </select>
            <ChevronDown size={13} className="dst-select-icon" />
          </div>
          <div className="dst-select-wrap">
            <select
              className="dst-select"
              value={programFilter}
              onChange={(e) => setProgramFilter(e.target.value)}
            >
              {ALL_PROGRAMS.map((p) => (
                <option key={p} value={p}>{p === 'All' ? 'All Programs' : p}</option>
              ))}
            </select>
            <ChevronDown size={13} className="dst-select-icon" />
          </div>
        </div>
        <button className="dst-add-btn" onClick={showToast}>
          <UserPlus size={15} />
          Add Student
        </button>
      </div>

      {/* ── Table ─────────────────────────────────────────────────────────── */}
      <div className="dst-table-card">
        <div className="dst-table-meta">
          {filtered.length} student{filtered.length !== 1 ? 's' : ''} found
        </div>
        <div className="dst-table-scroll">
          <table className="dst-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Batch</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Fees</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id}>
                  <td className="dst-td-id">{student.id}</td>
                  <td>
                    <div className="dst-name-wrap">
                      <div className="dst-avatar">{student.name[0]}</div>
                      <div>
                        <span className="dst-name">{student.name}</span>
                        <span className="dst-email">{student.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="dst-td-phone">{student.phone}</td>
                  <td className="dst-td-prog">{student.program}</td>
                  <td className="dst-td-batch">{student.batch}</td>
                  <td className="dst-td-date">{student.enrollmentDate}</td>
                  <td><StatusBadge status={student.status} colors={STATUS_COLORS} /></td>
                  <td><StatusBadge status={student.fees} colors={FEES_COLORS} /></td>
                  <td><ActionsMenu onAction={showToast} /></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="dst-empty">No students match your filters</td>
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
