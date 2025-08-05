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
  const [singleJobPost, setSingleJobPost] = useState([]);
  const [seekerApplications, setSeekerApplications] = useState([]);
  const [recruiterApplications, setRecruiterApplications] = useState([]);

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

  const handleUpdateJobPost = async (form, id) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/update-post/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Job post updated successfully");
      handleGetOnlyRecruiterPosts();
      return res.data;
    } catch (error) {
      console.error(error);
      toast.error("Error while editing job post");
    }
  };

  const handleViewJobDetail = async (id) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/job-details/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const fetchJob = res.data.job;
      setSingleJobPost(fetchJob);
      return fetchJob;
    } catch (error) {
      console.log(error);
      toast.error("Error while fetching job detailed");
    }
  };

  const handleApplyOnJob = async (id) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/apply/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message || "Applied successfully!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return toast.error(
          error.response.data?.message || "Already applied to this job"
        );
      }
      toast.error("Error while applying job");
    }
  };

  const fetchSeekerApplications = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_ENDPOINT}/job/applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSeekerApplications(res.data.data || []);
      console.log(res.data.data);
    } catch (error) {
      toast.error("Error fetching seeker applications");
    }
  };

  const fetchRecruiterApplications = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_API_ENDPOINT
        }/job/recruiter/applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRecruiterApplications(res.data.data);
    } catch (error) {
      toast.error("Error fetching recruiter applications");
    }
  };

  const handleUpdateApplicantStatus = async (jobId, applicantId, status) => {
    try {
      await axios.put(
        `${
          import.meta.env.VITE_BACKEND_API_ENDPOINT
        }/job/update-applicant-status/${jobId}/${applicantId}`,
        { status: status.toLowerCase() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await fetchRecruiterApplications();
      toast.success("Applicant status updated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update applicant status");
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
        handleUpdateJobPost,
        handleViewJobDetail,
        singleJobPost,
        handleApplyOnJob,
        fetchSeekerApplications,
        fetchRecruiterApplications,
        seekerApplications,
        recruiterApplications,
        handleUpdateApplicantStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
