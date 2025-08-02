import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "./../context/UserContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, handleUserLogout } = useContext(UserContext);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {!user && (
              <>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={navLinkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </>
            )}

            {user?.role === "seeker" && (
              <>
                <NavLink to="/jobs" className={navLinkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/my-applications" className={navLinkClass}>
                  My Applications
                </NavLink>
              </>
            )}

            {user?.role === "recruiter" && (
              <>
                <NavLink to="/recruiter-dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
                <NavLink to="/applicants" className={navLinkClass}>
                  Applicants
                </NavLink>
                <NavLink to="/create-job" className={navLinkClass}>
                  Create Job
                </NavLink>
              </>
            )}

            {/* User Dropdown or Auth Buttons */}
            <div className="space-x-2">
              {user ? (
                <div className="relative group flex items-center gap-3">
                  <p className="font-extrabold bg-gradient-to-br from-green-300 via-green-400 to-blue-600 bg-clip-text text-transparent">
                    {user?.username}
                  </p>
                  <div className="w-8 h-8 bg-green-100 text-green-600 text-sm font-bold rounded-full flex items-center justify-center">
                    {user?.username?.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute right-0 top-8 w-40 bg-white shadow-lg border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleUserLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
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

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenu ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white rounded-b pb-2 border-t border-gray-100 mt-2 flex flex-col space-y-1 px-2">
            {!user && (
              <>
                <NavLink
                  to="/"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/about"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Contact
                </NavLink>
              </>
            )}

            {user?.role === "seeker" && (
              <>
                <NavLink
                  to="/jobs"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/my-applications"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  My Applications
                </NavLink>
              </>
            )}

            {user?.role === "recruiter" && (
              <>
                <NavLink
                  to="/recruiter-dashboard"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/applicants"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Applicants
                </NavLink>
                <NavLink
                  to="/create-job"
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenu(false)}
                >
                  Create Job
                </NavLink>
              </>
            )}

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenu(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    handleUserLogout();
                  }}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenu(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 bg-green-600 text-white rounded text-center font-semibold hover:bg-green-700 transition"
                  onClick={() => setMobileMenu(false)}
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
