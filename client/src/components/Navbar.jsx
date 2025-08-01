import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./../context/UserContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, handleUserLogout } = useContext(UserContext);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-medium"
      : "text-gray-700 hover:text-green-600 transition font-medium";

  const renderNavLinks = () => {
    if (!user) {
      return (
        <>
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
        </>
      );
    }

    if (user.role === "seeker") {
      return (
        <>
          <NavLink to="/jobs" className={navLinkClass}>
            Jobs
          </NavLink>
          <NavLink to="/companies" className={navLinkClass}>
            Companies
          </NavLink>
          <NavLink to="/my-applications" className={navLinkClass}>
            My Applications
          </NavLink>
        </>
      );
    }

    if (user.role === "recruiter") {
      return (
        <>
          <NavLink to="/recruiter-dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/applicants" className={navLinkClass}>
            Applicants
          </NavLink>
        </>
      );
    }
  };

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

          <div className="hidden md:flex space-x-8 items-center">
            {renderNavLinks()}

            <div className="space-x-2">
              {user ? (
                <div className="relative group flex items-center gap-3">
                  <p>{user?.username}</p>
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
                    alt="User Profile"
                    className="h-8 w-8 object-cover rounded-full cursor-pointer"
                  />

                  <div
                    className="absolute right-0 top-8 w-40 bg-white shadow-lg border border-gray-100 rounded-md
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50"
                  >
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

        {mobileMenu && (
          <div className="md:hidden bg-white rounded-b pb-2 border-t border-gray-100">
            {renderNavLinks()}
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
                  className="block px-4 py-2 bg-green-600 text-white rounded mb-2 mx-4 mt-2 text-center font-semibold hover:bg-green-700 transition"
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
