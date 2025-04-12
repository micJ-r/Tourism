import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
          <a href="/">Tourism Project</a>
        </div>      



        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 border-b-2 border-transparent hover:border-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 border-b-2 border-transparent hover:border-blue-600">
                Destinations
              </a>
            </li>
            <li>
              <a href="/tours" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 border-b-2 border-transparent hover:border-blue-600">
                Tours
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 border-b-2 border-transparent hover:border-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button (optional) */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;