import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Add validation such as password === confirmPassword here

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <section
      className="overflow-hidden min-h-[80vh] bg-gradient-to-tr from-green-100 via-green-200 to-green-400
    pt-32 pb-20 flex items-center justify-center p-2"
    >
      <div className="relative max-w-md w-full bg-white rounded-xl p-5 md:p-10 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-5">
          <span
            className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 
          bg-clip-text text-transparent"
          >
            Create Your Account
          </span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full pl-10 pr-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full pl-10 pr-10 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-3 text-gray-500 hover:text-green-600 transition focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="role" className="mb-2 font-medium text-gray-700">
              Select Role
            </label>
            <select
              id="role"
              name="role"
              className="
      block w-full px-4 py-3 rounded border border-gray-300 text-gray-700
      focus:border-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none
      transition
      bg-white
      cursor-pointer
      hover:border-green-400
    "
            >
              <option value="seeker">Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          {/* Submission feedback message */}
          {submitted && (
            <div className="text-center mt-4 text-green-600 font-semibold">
              Thank you for signing up! (Demo)
            </div>
          )}
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-green-600 font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
