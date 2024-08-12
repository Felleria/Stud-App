const ContactPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          {/* Left Section - Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-gray-800 rounded-lg shadow-lg relative">
            <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-pink-400">
              Contact Us
            </h1>
            <p className="text-lg font-light mb-10 text-gray-300">
              We're here to help! Whether you have a question, feedback, or just want to say hello, reach out to us using the form below. Our team will get back to you promptly.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-2 bg-gray-900 bg-opacity-90 rounded-lg shadow-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 bg-gray-900 bg-opacity-90 rounded-lg shadow-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 mt-2 bg-gray-900 bg-opacity-90 rounded-lg shadow-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold rounded-full shadow-lg hover:from-red-400 hover:to-pink-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Right Section - Office Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-10 relative">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300 relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-pink-400">Our Office</h2>
              <p>
                1234 Elm Street, Suite 567<br />
                Your City, Your Country<br />
                Phone: +123 456 7890
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300 relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-pink-400">Business Hours</h2>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
            <img 
              src="/path-to-your-image.jpg" 
              alt="Decorative" 
              className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0" 
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  