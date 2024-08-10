// src/pages/StudentDashboard.jsx
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const studentLinks = [
  { name: 'Profile', path: 'profile' },
  { name: 'Progress', path: 'progress' },
  { name: 'Attendance', path: 'attendance' },
  { name: 'Grades', path: 'grades' },
  { name: 'Assigned Teachers', path: 'assigned-teachers' },
];

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar links={studentLinks} />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
