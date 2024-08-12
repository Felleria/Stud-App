/*import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-semibold mb-4">Hello Again!</h2>
        <h3 className="text-center text-xl font-bold mb-6">Welcome Back</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="sr-only" htmlFor="email">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5l-9 6-9-6m18 9v-9m0 0l-9 6-9-6m18 9l-9 6-9-6" />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="sr-only" htmlFor="password">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V9a4.5 4.5 0 10-9 0v1.5M6 10.5h12a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0118 22.5H6a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 016 10.5z" />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            LOGIN
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-purple-500 hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
*/



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full max-w-md p-8 m-auto bg-white rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
        <p className="text-center text-gray-500 mt-2">Enter your account details below</p>

        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-center py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              {/* Google icon */}
              <path d="M21.35 11.1h-9.3v2.85h5.65a4.85 4.85 0 01-4.85 3.35A4.85 4.85 0 018.5 12 4.85 4.85 0 0113.85 7.15a4.7 4.7 0 013.25 1.3l2.25-2.25A7.75 7.75 0 0013.85 3.5 7.85 7.85 0 006 12a7.85 7.85 0 007.85 8 7.65 7.65 0 007.5-5.85v-3.05z" />
            </svg>
            Log in with Google
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="text-gray-500 mx-4">OR</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="relative">
            <label className="sr-only" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold shadow-md hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
        </div>
      </div>

      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/background-image.jpg')" }}
      />
    </div>
  );
};

export default LoginPage;
