import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-16">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
            alt="FindJob Logo"
            className="w-8 h-8 rounded"
          />
          <span className="text-xl font-bold text-green-700">FindJob</span>
        </div>
        <p className="text-gray-600 mb-4">
          Your launchpad to a successful career. Find trusted jobs, connect, and
          grow!
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-green-700 mb-3">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
          <li>
            <Link to="/jobs" className="hover:text-green-600 transition">
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link to="/companies" className="hover:text-green-600 transition">
              Companies
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-green-600 transition">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-green-600 transition">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

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
