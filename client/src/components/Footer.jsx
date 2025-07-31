import React from "react";
import { Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Logo & Tagline */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <img
            src="/logo192.png"
            alt="FindJob Logo"
            className="w-8 h-8 rounded"
          />
          <span className="text-xl font-bold text-green-700">FindJob</span>
        </div>
        <p className="text-gray-600 mb-4">
          Your launchpad to a successful career. Find trusted jobs, connect, and
          grow!
        </p>
        {/* Socials */}
        <div className="flex gap-4 mt-2">
          <a
            href="#"
            className="text-gray-400 hover:text-green-600 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-600 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-600 transition"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Useful Links */}
      <div>
        <h3 className="font-semibold text-green-700 mb-3">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
          <li>
            <a href="/jobs" className="hover:text-green-600 transition">
              Browse Jobs
            </a>
          </li>
          <li>
            <a href="/companies" className="hover:text-green-600 transition">
              Companies
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-green-600 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-600 transition">
              Contact
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-green-600 transition">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className="hover:text-green-600 transition">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-semibold text-green-700 mb-3">Contact</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Mail className="w-5 h-5" />
          <span>info@findjob.com</span>
        </div>
      </div>
    </div>
    <div className="text-center py-4 text-sm text-gray-400 border-t border-gray-100">
      &copy; {new Date().getFullYear()} FindJob. All rights reserved.
    </div>
  </footer>
);

export default Footer;
