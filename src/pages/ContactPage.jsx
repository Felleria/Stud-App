import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-20 px-10">
      <div className="w-full max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden lg:flex">
        
        {/* Left Section - Contact Form */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-6 text-pink-400">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Have a question or need assistance? Fill out the form below, and our team will reach out to you shortly.
          </p>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Office Info */}
        <div className="lg:w-1/2 bg-gray-700 p-8 lg:p-12 flex flex-col justify-center relative">
          <h2 className="text-4xl font-bold mb-8 text-pink-400">Contact Information</h2>
          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-2xl font-semibold">Our Office</h3>
              <p className="mt-2">
                Ngong Road, <br />
                Nairobi, Kenya<br />
                Phone: +254 785 679 490
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Business Hours</h3>
              <p className="mt-2">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
          <img 
            src="background-image.jpg" 
            alt="Office" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-0" 
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

