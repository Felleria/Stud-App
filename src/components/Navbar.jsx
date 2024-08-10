import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Student Sphere
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/admin" className="hover:text-gray-300">Admin Page</Link>
          <Link to="/teacher" className="hover:text-gray-300">Teacher Page</Link>
          <Link to="/student" className="hover:text-gray-300">Student Page</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
