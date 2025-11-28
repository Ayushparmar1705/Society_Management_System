import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserHeader() {
  const [myToken , setMyToken] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    console.log("token" , token)
    if(token)
    {
      setMyToken(token);
      return;
    }
  },[])
 

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: myToken?'Dashboard':'Login', path: myToken?'/dashboard':'/login' },
  ];

  return (
    <header className="w-full bg-white shadow-md  top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
        >
          SocietyHub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-semibold hover:text-blue-500 transition-all duration-200 ${
                location.pathname === link.path ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)} // close on click
              className={`py-2 text-base font-medium hover:text-blue-500 transition-all duration-200 ${
                location.pathname === link.path ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
