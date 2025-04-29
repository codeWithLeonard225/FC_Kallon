import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/fckallonlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Fixtures", path: "#fixtures" },
    { name: "News", path: "#news" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "#contact" }, // Always last
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Club Name */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Bo Rangers FC Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-bold text-blue-900 tracking-wide">
          FC Kallon
          </h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden text-2xl text-green-700" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map(({ name, path }, index) =>
            path.startsWith("/") ? (
              <Link key={index} to={path} className="hover:text-green-600">
                {name}
              </Link>
            ) : (
              <a key={index} href={path} className="hover:text-green-600">
                {name}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map(({ name, path }, index) => (
              <li key={index}>
                {path.startsWith("/") ? (
                  <Link
                    to={path}
                    className="block hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                ) : (
                  <a
                    href={path}
                    className="block hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
