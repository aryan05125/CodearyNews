// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiBell, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "Influencers", path: "/influencers" },
    { label: "Bookmark", path: "/bookmark" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg dark:shadow-gray-800 bg-gradient-to-r from-[#1c1f27] to-[#3e3a3a] dark:from-[#111] dark:to-[#222] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold tracking-wide"
        >
          <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 hover:brightness-110 transition-all duration-200">
            CodearyNews
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-yellow-400 transition duration-200 ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl">
          <Link to="/search" className="hover:text-yellow-400">
            <FiSearch />
          </Link>
          <Link to="/notifications" className="hover:text-yellow-400">
            <FiBell />
          </Link>
          <button onClick={toggleTheme} className="hover:text-yellow-400">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-[#2d2d2d] dark:bg-[#111] text-white px-4 pb-4"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `block py-2 text-lg font-medium border-b border-gray-700 hover:text-yellow-400 ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
