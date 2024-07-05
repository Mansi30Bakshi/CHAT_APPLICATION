import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-extrabold mb-6 animate-bounce">
                Welcome to ChatApp
              </h1>
              <p className="text-xl mb-6 animate-pulse">
                Connect, communicate, and collaborate seamlessly with our chat platform.
              </p>
              <a
                href="#features"
                className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="p-8 bg-white rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition duration-500">
                <p className="text-2xl font-bold text-purple-600">Stay Connected!</p>
                <p className="text-lg text-gray-700">Join us and enjoy seamless communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-600">
            Features
          </h2>
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">
                  Real-time Messaging
                </h3>
                <p>
                  Experience instant communication with our real-time messaging feature.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in delay-200">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">
                  Group Chats
                </h3>
                <p>
                  Create and join group chats to collaborate with multiple people at once.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in delay-400">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">
                  File Sharing
                </h3>
                <p>
                  Share documents, images, and more with ease through our file sharing feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-600">
            Testimonials
          </h2>
          <div className="md:flex md:space-x-6">
            <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <p className="text-xl font-semibold mb-4">"ChatApp transformed the way we communicate!"</p>
                <p className="text-gray-700">- User A</p>
              </div>
            </div>
            <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in delay-200">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <p className="text-xl font-semibold mb-4">"The best chat app I've ever used."</p>
                <p className="text-gray-700">- User B</p>
              </div>
            </div>
            <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in delay-400">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
                <p className="text-xl font-semibold mb-4">"Incredible features and super easy to use!"</p>
                <p className="text-gray-700">- User C</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-6">
            Join ChatApp today and start connecting with your friends and colleagues.
          </p>
          <a
            href="/signup"
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">&copy; 2024 ChatApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
