import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/fckallonlogo.png";

const Navbar2 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/" },
    { label: "Fixtures", path: "/" },
    { label: "News", path: "/" },
    { label: "Team", path: "/team" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo and Club Name */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Bo Rangers FC Logo"
            className="h-12 w-12 object-cover rounded-full transition-transform duration-300 transform hover:scale-110"
          />
          <span className="text-xl md:text-2xl font-bold text-blue-700  tracking-wider">
          FC Kallon
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="hover:text-blue-700 transition-colors duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 rounded-b-lg">
          <ul className="space-y-4 text-center">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
