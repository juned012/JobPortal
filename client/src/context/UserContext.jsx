import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  // Signup new user
  const handleUserSignup = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5005/api/auth/signup",
        formData
      );
      toast.success(res.data.message || "Account Created successfully");
      return true;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error(error.response.data.message || "User already exists");
        } else {
          toast.error(
            error.response.data?.message ||
              `Signup failed with status ${error.response.status}`
          );
        }
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("Error: " + error.message);
      }
      return false;
    }
  };

  // Login existing user
  const handleUserLogin = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5005/api/auth/login",
        formData
      );

      const data = res.data;

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(data.message || "Login successful!");
      return true;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error(
            error.response.data.message || "Invalid email or password"
          );
        } else {
          toast.error(error.response.data.message || "Login failed");
        }
      } else {
        toast.error("Network error or server not responding");
      }
      return false;
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        handleUserSignup,
        handleUserLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
