import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Plus, Target, UserPlus, GitMerge, FileText, XCircle } from 'lucide-react';
import './DemoLeads.css';
import { DEMO_LEADS } from '../DemoData';
import { DemoToast } from '../DemoShell';

const STATUS_LABELS = {
  NEW: 'New', INTERESTED: 'Interested', CONTACTED: 'Contacted',
  FOLLOW_UP_DUE: 'Follow-up Due', NOT_CONTACTED: 'Not Contacted',
  CONVERTED: 'Converted', LOST: 'Lost',
};

const ALL_STATUSES = ['', ...Object.keys(STATUS_LABELS)];
const ALL_SOURCES  = ['', 'Website', 'Referral', 'Walk-in', 'Social Media', 'Event', 'Google Ads', 'Cold Call'];
const ALL_HEATS    = ['', 'HOT', 'WARM', 'COLD'];

export default function DemoLeads({ showToast }) {
  const [search,     setSearch]     = useState('');
  const [statusF,    setStatusF]    = useState('');
  const [sourceF,    setSourceF]    = useState('');
  const [heatF,      setHeatF]      = useState('');
  const [menuOpen,   setMenuOpen]   = useState(null);
  const [menuPos,    setMenuPos]    = useState({ top: 0, left: 0 });
  const [toast,      setToast]      = useState(false);
  const [page,       setPage]       = useState(0);
  const PER_PAGE = 10;

  const triggerToast = () => {
    setToast(true);
    if (showToast) showToast();
    setTimeout(() => setToast(false), 3000);
  };

  const openMenu = (e, id) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const menuH = 200;
    setMenuPos({
      top:  spaceBelow > menuH ? rect.bottom + 4 : rect.top - menuH - 4,
      left: rect.left - 140,
    });
    setMenuOpen(id);
  };

  const closeMenu = () => setMenuOpen(null);

  useEffect(() => {
    const handler = () => closeMenu();
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  const filtered = DEMO_LEADS.filter(l => {
    const q = search.toLowerCase();
    const matchSearch = !q || `${l.firstName} ${l.lastName} ${l.displayId} ${l.email} ${l.phone}`.toLowerCase().includes(q);
    const matchStatus = !statusF || l.status === statusF;
    const matchSource = !sourceF || l.source === sourceF;
    const matchHeat   = !heatF   || l.heat   === heatF;
    return matchSearch && matchStatus && matchSource && matchHeat;
  });

  const totalPages  = Math.ceil(filtered.length / PER_PAGE);
  const paged       = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  useEffect(() => { setPage(0); }, [search, statusF, sourceF, heatF]);

  return (
    <div className="leads-page">

      {/* Toolbar */}
      <div className="leads-toolbar-wrapper">
        <input
          className="leads-search-input"
          placeholder="Search leads..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="leads-filter-select" value={statusF} onChange={e => setStatusF(e.target.value)}>
          {ALL_STATUSES.map(s => <option key={s} value={s}>{s || 'All Status'}</option>)}
        </select>
        <select className="leads-filter-select" value={sourceF} onChange={e => setSourceF(e.target.value)}>
          {ALL_SOURCES.map(s => <option key={s} value={s}>{s || 'All Sources'}</option>)}
        </select>
        <select className="leads-filter-select" value={heatF} onChange={e => setHeatF(e.target.value)}>
          {ALL_HEATS.map(h => <option key={h} value={h}>{h || 'All Heat'}</option>)}
        </select>
        <button className="leads-add-btn" onClick={triggerToast}>
          <Plus size={14} /> Add Lead
        </button>
      </div>

      {/* Count row */}
      <div className="leads-count-row">
        <Target size={14} color="#5c6bc0" />
        <span>Leads ({filtered.length})</span>
      </div>

      {/* Table */}
      <div className="leads-table-container">
        <div className="leads-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Source</th>
                <th>Status</th>
                <th>Heat</th>
                <th>Counsellor</th>
                <th>Created</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.map(lead => (
                <tr key={lead.id}>
                  <td className={`leadid-cell ${lead.counsellor ? 'leadid-assigned' : 'leadid-not-assigned'}`}>
                    {lead.displayId}
                  </td>
                  <td>
                    <div className="user-name-with-avatar">
                      <div className="avatar-circle">
                        {lead.firstName[0]}{lead.lastName[0]}
                      </div>
                      {lead.firstName} {lead.lastName}
                    </div>
                  </td>
                  <td>{lead.phone}</td>
                  <td>{lead.program}</td>
                  <td>{lead.source}</td>
                  <td>
                    <div className="lead-status-wrapper">
                      <div className="lead-status-line">
                        <span className={`lead-status-pill lead-status-${lead.status.toLowerCase().replace(/_/g,'-')}`} />
                        <span className="lead-status-text">{STATUS_LABELS[lead.status] || lead.status}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`heat-badge heat-${lead.heat}`}>{lead.heat}</span>
                  </td>
                  <td>{lead.counsellor}</td>
                  <td>{lead.createdDate}</td>
                  <td>
                    <div className="actions-wrapper">
                      <button
                        className="actions-button"
                        onClick={e => openMenu(e, lead.id)}
                      >
                        ⋮
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-wrapper">
        <div>Showing {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, filtered.length)} of {filtered.length}</div>
        <div className="pagination">
          <button className="page-btn" disabled={page === 0} onClick={() => setPage(p => p - 1)}>←</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={`page-btn${page === i ? ' active' : ''}`} onClick={() => setPage(i)}>{i + 1}</button>
          ))}
          <button className="page-btn" disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>→</button>
        </div>
      </div>

      {/* Action menu */}
      {menuOpen !== null && ReactDOM.createPortal(
        <div
          className="action-menu"
          style={{ position: 'fixed', top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
          onClick={e => e.stopPropagation()}
        >
          <div onClick={() => { triggerToast(); closeMenu(); }}><UserPlus size={14} /> Assign to Me</div>
          <div onClick={() => { triggerToast(); closeMenu(); }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> Convert to Student</div>
          <div onClick={() => { triggerToast(); closeMenu(); }}><GitMerge size={14} /> Merge Duplicate</div>
          <div onClick={() => { triggerToast(); closeMenu(); }}><FileText size={14} /> Add Note</div>
          <div onClick={() => { triggerToast(); closeMenu(); }} style={{ color: '#ef4444' }}><XCircle size={14} style={{ color: '#ef4444' }} /> Mark as Lost</div>
        </div>,
        document.body
      )}

      {/* Toast */}
      {toast && <DemoToast onDismiss={() => setToast(false)} />}
    </div>
  );
}
