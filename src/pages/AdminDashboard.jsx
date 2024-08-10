// src/pages/AdminDashboard.jsx
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import OverviewSection from '../components/OverviewSection';


const adminLinks = [
  { name: 'Manage Students', path: 'manage-students' },
  { name: 'Manage Teachers', path: 'manage-teachers' },
  { name: 'Manage Classes', path: 'manage-classes' },
  { name: 'Assigned Teachers', path: 'assigned-teachers' },
  { name: 'Reports', path: 'reports' },
];

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar links={adminLinks} />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
