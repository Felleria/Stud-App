/*const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="text-center p-8 rounded-lg shadow-xl bg-opacity-60 bg-white backdrop-blur-lg">
        <img 
          src="/logo.png" 
          alt="Student Sphere Logo" 
          className="h-32 w-32 mx-auto mb-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          Welcome to Student Sphere App
        </h1>
        <p className="text-lg font-light max-w-md mx-auto mb-6">
          Empowering your academic journey with seamless management and communication tools.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
*/

/*const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white">
      <div className="text-center p-8 rounded-lg shadow-2xl bg-opacity-60 bg-white backdrop-blur-md">
        <img 
          src="/logo.png" 
          alt="Student Sphere Logo" 
          className="h-32 w-32 mx-auto mb-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          Welcome to Student Sphere App
        </h1>
        <p className="text-lg font-light max-w-md mx-auto mb-6">
          Empowering your academic journey with seamless management and communication tools.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-pink-500 hover:to-red-400 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage; */


import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-gray-100"
      style={{ backgroundImage: "url('/background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Top Section */}
      <div className="text-center p-8 max-w-4xl mx-auto space-y-12">
        <h1 className="text-6xl font-extrabold tracking-tight text-white leading-tight">
          Welcome to Study Sphere
        </h1>
        <p className="text-2xl font-light max-w-lg mx-auto text-gray-300">
          Empowering your academic journey with seamless management and communication tools.
        </p>
        <div className="flex justify-center space-x-8 mt-8">
          <Link to="/about">
            <button className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
              About Us
            </button>
          </Link>
          <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            Learn more
          </button>
        </div>
      </div>

      {/* Bottom Section with Cards */}
      <div className="mt-20 px-6 py-12 w-full bg-white rounded-t-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Integrated Dashboard</h3>
            <p className="text-gray-100">
              Manage classes, assignments, and communication all in one place with our intuitive dashboard.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-pink-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Real-time Collaboration</h3>
            <p className="text-gray-100">
              Facilitate seamless collaboration between students and teachers through our real-time messaging and file-sharing tools.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
            <p className="text-gray-100">
              Tailor your learning experience with personalized content and resources that match your academic goals.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Secure & Reliable</h3>
            <p className="text-gray-100">
              Enjoy a secure platform that ensures the privacy and safety of all user data and communications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
