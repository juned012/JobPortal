import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./../context/UserContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { user } = useContext(UserContext);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-medium"
      : "text-gray-700 hover:text-green-600 transition font-medium";

  return (
    <nav className="bg-white border-b border-gray-100 w-full fixed top-0 left-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              <span className="text-green-600">Find</span>Job
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={navLinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/companies" className={navLinkClass}>
              Companies
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <div className="space-x-2">
              {user ? (
                <p>{user.username}</p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="ml-4 text-gray-600 border-2 border-gray-100 px-4 py-2 rounded hover:bg-gray-50 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-2 bg-green-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-green-700 transition"
                  >
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-gray-600 focus:outline-none"
              aria-label="Open Main Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenu && (
          <div className="md:hidden bg-white rounded-b pb-2 border-t border-gray-100">
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50"
              onClick={() => setMobileMenu(false)}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/companies"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50"
              onClick={() => setMobileMenu(false)}
            >
              Companies
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50"
              onClick={() => setMobileMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-50"
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </NavLink>
            <div>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenu(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 bg-green-600 text-white rounded mb-2 mx-4 mt-2 text-center font-semibold hover:bg-green-700 transition"
                onClick={() => setMobileMenu(false)}
              >
                Create Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
