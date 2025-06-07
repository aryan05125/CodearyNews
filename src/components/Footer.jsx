// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1c1f27] to-[#3e3a3a] dark:from-[#111] dark:to-[#222] text-white pt-10 pb-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">CodearyNews</h2>
          <p className="text-sm text-gray-300">
            Stay updated with the latest buzz, drama, and trends from your favorite social media influencers — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/categories" className="hover:text-yellow-400">Categories</Link></li>
            <li><Link to="/influencers" className="hover:text-yellow-400">Influencers</Link></li>
            <li><Link to="/bookmark" className="hover:text-yellow-400">Bookmark</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
          </div>
        </div>

        {/* Built With */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Built With</h3>
          <div className="flex space-x-4 text-2xl text-gray-300">
            <FaReact className="hover:text-cyan-400" />
            <SiTailwindcss className="hover:text-teal-300" />
            <SiVite className="hover:text-purple-400" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} CodearyNews. Built with ❤️ by Aryan.
      </div>
    </footer>
  );
};

export default Footer;
