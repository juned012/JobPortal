import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup new user
  const handleUserSignup = async (formData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/auth/signup`,
        formData
      );
      toast.success(res.data.message || "Account Created successfully");
      return true;
    } catch (error) {
      if (error.response?.status === 409)
        toast.error(error.response.data.message || "User already exists");
      else toast.error(error.response?.data?.message || "Signup failed");
      return false;
    }
  };

  // Login existing user
  const handleUserLogin = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/auth/login`,
        formData
      );
      const { user, token, message } = res.data;

      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success(message || "Login successful!");

      return { success: true, user };
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      return { success: false, user: null };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    } else {
      setToken("");
      setUser(null);
    }
    setLoading(false);
  }, []);

  const handleUserLogout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        handleUserSignup,
        handleUserLogin,
        handleUserLogout,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
