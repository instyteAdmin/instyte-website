import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Plus, GraduationCap, UserCheck, MoveRight, FileText, UserMinus } from 'lucide-react';
import './DemoStudents.css';
import { DEMO_STUDENTS } from '../DemoData';
import { DemoToast } from '../DemoShell';

const STATUS_LABELS = { ACTIVE: 'Active', GRADUATED: 'Graduated', WITHDRAWN: 'Withdrawn', SUSPENDED: 'Suspended' };
const ALL_STATUSES  = ['', ...Object.keys(STATUS_LABELS)];
const ALL_PROGRAMS  = ['', ...Array.from(new Set(DEMO_STUDENTS.map(s => s.program)))];

export default function DemoStudents({ showToast }) {
  const [search,   setSearch]   = useState('');
  const [statusF,  setStatusF]  = useState('');
  const [programF, setProgramF] = useState('');
  const [menuOpen, setMenuOpen] = useState(null);
  const [menuPos,  setMenuPos]  = useState({ top: 0, left: 0 });
  const [toast,    setToast]    = useState(false);
  const [page,     setPage]     = useState(0);
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
    setMenuPos({ top: spaceBelow > 200 ? rect.bottom + 4 : rect.top - 170, left: rect.left - 150 });
    setMenuOpen(id);
  };

  const closeMenu = () => setMenuOpen(null);

  useEffect(() => {
    const h = () => closeMenu();
    window.addEventListener('click', h);
    return () => window.removeEventListener('click', h);
  }, []);

  const filtered = DEMO_STUDENTS.filter(s => {
    const q = search.toLowerCase();
    const matchS = !q || `${s.firstName} ${s.lastName} ${s.displayId} ${s.email}`.toLowerCase().includes(q);
    const matchSt = !statusF  || s.status  === statusF;
    const matchPr = !programF || s.program === programF;
    return matchS && matchSt && matchPr;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged      = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  useEffect(() => { setPage(0); }, [search, statusF, programF]);

  const feesBadgeClass = (f) => f === 'PAID' ? 'paid' : f === 'PENDING' ? 'pending' : 'overdue';
  const statusClass    = (s) => s.toLowerCase();

  return (
    <div className="stu-page">

      {/* Toolbar */}
      <div className="stu-toolbar-wrapper">
        <input
          className="stu-search-input"
          placeholder="Search students..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="stu-filter-select" value={statusF} onChange={e => setStatusF(e.target.value)}>
          {ALL_STATUSES.map(s => <option key={s} value={s}>{s || 'All Status'}</option>)}
        </select>
        <select className="stu-filter-select" value={programF} onChange={e => setProgramF(e.target.value)}>
          {ALL_PROGRAMS.map(p => <option key={p} value={p}>{p || 'All Programs'}</option>)}
        </select>
        <button className="stu-add-btn" onClick={triggerToast}>
          <Plus size={14} /> Add Student
        </button>
      </div>

      {/* Count row */}
      <div className="stu-count-row">
        <GraduationCap size={14} color="#059669" />
        <span>Students ({filtered.length})</span>
      </div>

      {/* Table */}
      <div className="stu-table-container">
        <div className="stu-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Batch</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Fees</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.map(student => (
                <tr key={student.id}>
                  <td className={`stu-id-cell ${student.status === 'ACTIVE' ? 'stu-id-enrolled' : 'stu-id-not-enrolled'}`}>
                    {student.displayId}
                  </td>
                  <td>
                    <div className="stu-name-with-avatar">
                      <div className="stu-avatar">
                        {student.firstName[0]}{student.lastName[0]}
                      </div>
                      {student.firstName} {student.lastName}
                    </div>
                  </td>
                  <td>{student.phone}</td>
                  <td>{student.program}</td>
                  <td>{student.batch}</td>
                  <td>{student.enrollmentDate}</td>
                  <td>
                    <span className={`stu-status-badge ${statusClass(student.status)}`}>
                      {STATUS_LABELS[student.status] || student.status}
                    </span>
                  </td>
                  <td>
                    <span className={`stu-fees-badge ${feesBadgeClass(student.feesStatus)}`}>
                      {student.feesStatus}
                    </span>
                  </td>
                  <td>
                    <div className="stu-actions-wrapper">
                      <button className="stu-actions-btn" onClick={e => openMenu(e, student.id)}>⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="stu-pagination-wrapper">
        <div>Showing {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, filtered.length)} of {filtered.length}</div>
        <div className="stu-pagination">
          <button className="stu-page-btn" disabled={page === 0} onClick={() => setPage(p => p - 1)}>←</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={`stu-page-btn${page === i ? ' active' : ''}`} onClick={() => setPage(i)}>{i + 1}</button>
          ))}
          <button className="stu-page-btn" disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>→</button>
        </div>
      </div>

      {/* Action menu */}
      {menuOpen !== null && ReactDOM.createPortal(
        <div
          className="stu-action-menu"
          style={{ position: 'fixed', top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
          onClick={e => e.stopPropagation()}
        >
          <div onClick={() => { triggerToast(); closeMenu(); }}><UserCheck size={14} /> Activate</div>
          <div onClick={() => { triggerToast(); closeMenu(); }}><MoveRight size={14} /> Enroll to Group</div>
          <div onClick={() => { triggerToast(); closeMenu(); }}><FileText size={14} /> Add Note</div>
          <div onClick={() => { triggerToast(); closeMenu(); }} style={{ color: '#ef4444' }}><UserMinus size={14} style={{ color: '#ef4444' }} /> Mark as Withdrawn</div>
        </div>,
        document.body
      )}

      {/* Toast */}
      {toast && <DemoToast onDismiss={() => setToast(false)} />}
    </div>
  );
}
