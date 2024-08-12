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


const HomePage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-gray-100"
      style={{ backgroundImage: "url('/background-image.jpg')" }}
    >
      <div className="relative text-center p-8 rounded-lg shadow-2xl bg-opacity-80 bg-black backdrop-blur-lg max-w-3xl mx-auto">
        <img 
          src="/logo.png" 
          alt="Student Sphere Logo" 
          className="h-32 w-32 mx-auto mb-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white">
          Welcome to Student Sphere
        </h1>
        <p className="text-lg font-light max-w-md mx-auto mb-8 text-gray-300">
          Empowering your academic journey with seamless management and communication tools.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white font-semibold rounded-full shadow-lg hover:from-purple-800 hover:via-pink-600 hover:to-red-600 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;

