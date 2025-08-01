import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CompanyDetailPage from "./pages/CompanyDetailPage";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import RecruiterDashboard from "./pages/RecruiterPages/RecruiterDashboard";
import Applications from "./pages/Applications";
import Applicants from "./pages/RecruiterPages/Applicants";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import NotFoundPage from "./pages/NotFoundPage";
import GuestRoute from "./components/GuestRoute";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mb-15">
        <Navbar />
      </div>
      <Routes>
        {/* Public routes */}

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/company-detailed-page" element={<CompanyDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<GuestRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected routes: Recruiter */}

        <Route element={<ProtectedRoute allowedRoles={["recruiter"]} />}>
          <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
          <Route path="/applicants" element={<Applicants />} />
        </Route>

        {/* Protected routes: seeker */}
        <Route element={<ProtectedRoute allowedRoles={["seeker"]} />}>
          <Route path="/my-applications" element={<Applications />} />
        </Route>

        <Route
          element={<ProtectedRoute allowedRoles={["seeker", "recruiter"]} />}
        >
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
