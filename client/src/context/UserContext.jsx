import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [getRecruiterPost, setGetRecruiterPost] = useState([]);
  const [getAllPost, setGetAllPost] = useState([]);

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

  const handleCreateJobPost = async (formData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/create-post`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Job Created");
      return res.data;
    } catch (error) {
      toast.error("Error while posting job");
      console.log("Error while posting job", error);
    }
  };

  const handleGetOnlyRecruiterPosts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/recruiter/posts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setGetRecruiterPost(res.data.jobs);
    } catch (error) {
      toast.error("Failed to fetch job posts.");
    }
  };

  const handleGetAllJobPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/get-all-posts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setGetAllPost(response.data.jobs);
    } catch (error) {
      toast.error("Failed to fetch jobs");
    }
  };

  const handleDeleteJobPost = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/delete-post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleGetOnlyRecruiterPosts();
      toast.success("Job post deleted successfully");
    } catch (error) {
      toast.error("Failed to fetch jobs");
    }
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
        handleCreateJobPost,
        handleGetOnlyRecruiterPosts,
        getRecruiterPost,
        handleGetAllJobPosts,
        getAllPost,
        handleDeleteJobPost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
