import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-purple-600 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ChatApp
        </Link>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-purple-600 transition duration-300">Login</Link>
          <Link to="/signup" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-purple-600 transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
