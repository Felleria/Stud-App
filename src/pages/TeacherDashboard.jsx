
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const teacherLinks = [
  { name: 'Manage Grades', path: 'manage-grades' },
  { name: 'Manage Attendance', path: 'manage-attendance' },
  { name: 'Manage Courses', path: 'manage-courses' },
];

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <Sidebar links={teacherLinks} />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDashboard;
