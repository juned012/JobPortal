import { useContext, useState } from "react";
import { Lock, Eye, EyeOff, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { handleUserLogin, user } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await handleUserLogin(form);

    if (success) {
      setForm({ email: "", password: "" });
      setShowPassword(false);

      navigate("/");
    }

    setIsLoading(false);
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
            Welcome Login to FindJob
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Your password"
                className="w-full pl-10 pr-10 py-3 rounded border border-gray-200 
                 focus:border-green-600 focus:outline-none transition"
                autoComplete="current-password"
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

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded font-semibold transition ${
              isLoading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to={"/signup"}
            className="text-green-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
