// ─── Demo User ────────────────────────────────────────────────
export const DEMO_USER = { name: 'Priya Sharma', role: 'Admin', institution: 'Sunrise Academy' };

// ─── Demo Leads ───────────────────────────────────────────────
export const DEMO_LEADS = [
  { id: 1, displayId: 'LD-001', firstName: 'Arjun', lastName: 'Mehta', phone: '9876543210', email: 'arjun.mehta@gmail.com', source: 'Website', status: 'NEW', heat: 'HOT', counsellor: 'Priya Sharma', program: 'B.Tech CSE', createdDate: '2024-04-01' },
  { id: 2, displayId: 'LD-002', firstName: 'Sneha', lastName: 'Patel', phone: '9845678901', email: 'sneha.patel@yahoo.com', source: 'Referral', status: 'INTERESTED', heat: 'WARM', counsellor: 'Rahul Verma', program: 'MBA Finance', createdDate: '2024-04-03' },
  { id: 3, displayId: 'LD-003', firstName: 'Karan', lastName: 'Singh', phone: '9812345678', email: 'karan.singh@outlook.com', source: 'Walk-in', status: 'CONTACTED', heat: 'HOT', counsellor: 'Priya Sharma', program: 'BCA', createdDate: '2024-04-05' },
  { id: 4, displayId: 'LD-004', firstName: 'Pooja', lastName: 'Gupta', phone: '9898765432', email: 'pooja.gupta@gmail.com', source: 'Social Media', status: 'FOLLOW_UP_DUE', heat: 'WARM', counsellor: 'Ananya Iyer', program: 'B.Sc Nursing', createdDate: '2024-04-06' },
  { id: 5, displayId: 'LD-005', firstName: 'Rohit', lastName: 'Kumar', phone: '9867543210', email: 'rohit.kumar@gmail.com', source: 'Event', status: 'NOT_CONTACTED', heat: 'COLD', counsellor: 'Rahul Verma', program: 'B.Com Hons', createdDate: '2024-04-08' },
  { id: 6, displayId: 'LD-006', firstName: 'Divya', lastName: 'Sharma', phone: '9823456789', email: 'divya.sharma@gmail.com', source: 'Website', status: 'CONVERTED', heat: 'HOT', counsellor: 'Priya Sharma', program: 'B.Tech IT', createdDate: '2024-04-10' },
  { id: 7, displayId: 'LD-007', firstName: 'Amit', lastName: 'Joshi', phone: '9856789012', email: 'amit.joshi@gmail.com', source: 'Referral', status: 'NEW', heat: 'WARM', counsellor: 'Ananya Iyer', program: 'MBA HR', createdDate: '2024-04-11' },
  { id: 8, displayId: 'LD-008', firstName: 'Nisha', lastName: 'Reddy', phone: '9878901234', email: 'nisha.reddy@yahoo.com', source: 'Google Ads', status: 'INTERESTED', heat: 'HOT', counsellor: 'Priya Sharma', program: 'MBBS', createdDate: '2024-04-12' },
  { id: 9, displayId: 'LD-009', firstName: 'Vikas', lastName: 'Mishra', phone: '9801234567', email: 'vikas.mishra@gmail.com', source: 'Cold Call', status: 'LOST', heat: 'COLD', counsellor: 'Rahul Verma', program: 'B.Tech ECE', createdDate: '2024-04-13' },
  { id: 10, displayId: 'LD-010', firstName: 'Priya', lastName: 'Nair', phone: '9823098765', email: 'priya.nair@gmail.com', source: 'Website', status: 'CONTACTED', heat: 'WARM', counsellor: 'Ananya Iyer', program: 'BBA', createdDate: '2024-04-14' },
  { id: 11, displayId: 'LD-011', firstName: 'Suresh', lastName: 'Pillai', phone: '9845012345', email: 'suresh.pillai@gmail.com', source: 'Referral', status: 'NEW', heat: 'HOT', counsellor: 'Priya Sharma', program: 'B.Tech Mech', createdDate: '2024-04-15' },
  { id: 12, displayId: 'LD-012', firstName: 'Meera', lastName: 'Kapoor', phone: '9867890123', email: 'meera.kapoor@gmail.com', source: 'Social Media', status: 'FOLLOW_UP_DUE', heat: 'WARM', counsellor: 'Rahul Verma', program: 'B.Sc Bio', createdDate: '2024-04-16' },
  { id: 13, displayId: 'LD-013', firstName: 'Aditya', lastName: 'Rao', phone: '9890123456', email: 'aditya.rao@gmail.com', source: 'Walk-in', status: 'INTERESTED', heat: 'HOT', counsellor: 'Ananya Iyer', program: 'Pharm D', createdDate: '2024-04-17' },
  { id: 14, displayId: 'LD-014', firstName: 'Kavitha', lastName: 'Iyer', phone: '9812056789', email: 'kavitha.iyer@gmail.com', source: 'Event', status: 'NOT_CONTACTED', heat: 'COLD', counsellor: 'Priya Sharma', program: 'B.Arch', createdDate: '2024-04-18' },
  { id: 15, displayId: 'LD-015', firstName: 'Rajesh', lastName: 'Tiwari', phone: '9834567890', email: 'rajesh.tiwari@gmail.com', source: 'Website', status: 'NEW', heat: 'WARM', counsellor: 'Rahul Verma', program: 'LLB', createdDate: '2024-04-19' },
];

// ─── Demo Students ─────────────────────────────────────────────
export const DEMO_STUDENTS = [
  { id: 1, displayId: 'ST-001', firstName: 'Anjali', lastName: 'Verma', phone: '9876501234', email: 'anjali.verma@gmail.com', program: 'B.Tech CSE', batch: '2023-27', enrollmentDate: '2023-08-01', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 2, displayId: 'ST-002', firstName: 'Siddharth', lastName: 'Rao', phone: '9845602345', email: 'siddharth.rao@gmail.com', program: 'MBA Finance', batch: '2023-25', enrollmentDate: '2023-08-05', status: 'ACTIVE', feesStatus: 'PENDING' },
  { id: 3, displayId: 'ST-003', firstName: 'Preethi', lastName: 'Nair', phone: '9812603456', email: 'preethi.nair@gmail.com', program: 'BCA', batch: '2023-26', enrollmentDate: '2023-08-10', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 4, displayId: 'ST-004', firstName: 'Rahul', lastName: 'Gupta', phone: '9898604567', email: 'rahul.gupta@gmail.com', program: 'B.Sc Nursing', batch: '2022-26', enrollmentDate: '2022-08-01', status: 'ACTIVE', feesStatus: 'OVERDUE' },
  { id: 5, displayId: 'ST-005', firstName: 'Lakshmi', lastName: 'Pillai', phone: '9867605678', email: 'lakshmi.pillai@gmail.com', program: 'B.Com Hons', batch: '2022-25', enrollmentDate: '2022-08-03', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 6, displayId: 'ST-006', firstName: 'Manoj', lastName: 'Kumar', phone: '9823606789', email: 'manoj.kumar@gmail.com', program: 'B.Tech IT', batch: '2021-25', enrollmentDate: '2021-08-01', status: 'GRADUATED', feesStatus: 'PAID' },
  { id: 7, displayId: 'ST-007', firstName: 'Sunita', lastName: 'Sharma', phone: '9856607890', email: 'sunita.sharma@gmail.com', program: 'MBA HR', batch: '2023-25', enrollmentDate: '2023-09-01', status: 'ACTIVE', feesStatus: 'PENDING' },
  { id: 8, displayId: 'ST-008', firstName: 'Vinod', lastName: 'Reddy', phone: '9878608901', email: 'vinod.reddy@gmail.com', program: 'MBBS', batch: '2022-27', enrollmentDate: '2022-08-20', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 9, displayId: 'ST-009', firstName: 'Poornima', lastName: 'Mishra', phone: '9801609012', email: 'poornima.mishra@gmail.com', program: 'B.Tech ECE', batch: '2023-27', enrollmentDate: '2023-08-15', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 10, displayId: 'ST-010', firstName: 'Ganesh', lastName: 'Patil', phone: '9823610123', email: 'ganesh.patil@gmail.com', program: 'BBA', batch: '2022-25', enrollmentDate: '2022-08-08', status: 'WITHDRAWN', feesStatus: 'PAID' },
  { id: 11, displayId: 'ST-011', firstName: 'Kavya', lastName: 'Menon', phone: '9845611234', email: 'kavya.menon@gmail.com', program: 'B.Tech Mech', batch: '2023-27', enrollmentDate: '2023-08-12', status: 'ACTIVE', feesStatus: 'OVERDUE' },
  { id: 12, displayId: 'ST-012', firstName: 'Ravi', lastName: 'Shankar', phone: '9867612345', email: 'ravi.shankar@gmail.com', program: 'B.Sc Bio', batch: '2022-25', enrollmentDate: '2022-07-30', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 13, displayId: 'ST-013', firstName: 'Deepa', lastName: 'Krishnan', phone: '9890613456', email: 'deepa.krishnan@gmail.com', program: 'Pharm D', batch: '2023-28', enrollmentDate: '2023-08-22', status: 'ACTIVE', feesStatus: 'PENDING' },
  { id: 14, displayId: 'ST-014', firstName: 'Arun', lastName: 'Tiwari', phone: '9812614567', email: 'arun.tiwari@gmail.com', program: 'B.Arch', batch: '2021-26', enrollmentDate: '2021-08-10', status: 'ACTIVE', feesStatus: 'PAID' },
  { id: 15, displayId: 'ST-015', firstName: 'Manjula', lastName: 'Shetty', phone: '9834615678', email: 'manjula.shetty@gmail.com', program: 'LLB', batch: '2022-25', enrollmentDate: '2022-08-01', status: 'ACTIVE', feesStatus: 'PAID' },
];

// ─── Finance Data ──────────────────────────────────────────────
export const FINANCE_MONTHLY = [
  { month: 'Nov', revenue: 420000, expenses: 310000 },
  { month: 'Dec', revenue: 380000, expenses: 280000 },
  { month: 'Jan', revenue: 510000, expenses: 360000 },
  { month: 'Feb', revenue: 490000, expenses: 340000 },
  { month: 'Mar', revenue: 560000, expenses: 390000 },
  { month: 'Apr', revenue: 620000, expenses: 410000 },
];

export const FINANCE_SUMMARY = {
  totalRevenue: 2980000,
  totalExpenses: 2090000,
  netProfit: 890000,
  pendingFees: 145000,
};

export const RECENT_PAYMENTS = [
  { id: 'PAY-001', student: 'Anjali Verma', amount: 45000, date: '2024-04-18', program: 'B.Tech CSE', method: 'Online', status: 'PAID' },
  { id: 'PAY-002', student: 'Siddharth Rao', amount: 38000, date: '2024-04-17', program: 'MBA Finance', method: 'Cheque', status: 'PAID' },
  { id: 'PAY-003', student: 'Rahul Gupta', amount: 30000, date: '2024-04-16', program: 'B.Sc Nursing', method: 'Online', status: 'PENDING' },
  { id: 'PAY-004', student: 'Vinod Reddy', amount: 60000, date: '2024-04-15', program: 'MBBS', method: 'DD', status: 'PAID' },
  { id: 'PAY-005', student: 'Poornima Mishra', amount: 45000, date: '2024-04-14', program: 'B.Tech ECE', method: 'Online', status: 'PAID' },
  { id: 'PAY-006', student: 'Kavya Menon', amount: 45000, date: '2024-04-13', program: 'B.Tech Mech', method: 'Online', status: 'OVERDUE' },
  { id: 'PAY-007', student: 'Deepa Krishnan', amount: 50000, date: '2024-04-12', program: 'Pharm D', method: 'Online', status: 'PENDING' },
  { id: 'PAY-008', student: 'Ravi Shankar', amount: 28000, date: '2024-04-11', program: 'B.Sc Bio', method: 'Cash', status: 'PAID' },
  { id: 'PAY-009', student: 'Preethi Nair', amount: 32000, date: '2024-04-10', program: 'BCA', method: 'Online', status: 'PAID' },
  { id: 'PAY-010', student: 'Lakshmi Pillai', amount: 26000, date: '2024-04-09', program: 'B.Com Hons', method: 'Online', status: 'PAID' },
];

// ─── Dashboard KPI Data ────────────────────────────────────────
export const DASHBOARD_KPI = {
  totalLeads: 247,
  leadsGrowth: 12.4,
  activeStudents: 1842,
  studentsGrowth: 8.7,
  conversionRate: 34.2,
  conversionGrowth: 3.1,
  totalRevenue: 2980000,
  revenueGrowth: 18.5,
};

export const LEAD_STATUS_DATA = [
  { name: 'New', value: 68, color: '#3B82F6' },
  { name: 'Interested', value: 52, color: '#10B981' },
  { name: 'Contacted', value: 45, color: '#06B6D4' },
  { name: 'Follow-up Due', value: 38, color: '#F59E0B' },
  { name: 'Converted', value: 34, color: '#8B5CF6' },
  { name: 'Lost', value: 10, color: '#F43F5E' },
];

export const LEAD_SOURCE_DATA = [
  { name: 'Website', value: 82, color: '#3B82F6' },
  { name: 'Referral', value: 64, color: '#10B981' },
  { name: 'Social Media', value: 48, color: '#8B5CF6' },
  { name: 'Walk-in', value: 31, color: '#F59E0B' },
  { name: 'Events', value: 22, color: '#F43F5E' },
];
