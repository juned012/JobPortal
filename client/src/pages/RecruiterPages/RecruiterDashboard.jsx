import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SquarePen, Trash } from "lucide-react";

const RecruiterDashboard = () => {
  const {
    user,
    handleGetOnlyRecruiterPosts,
    getRecruiterPost,
    handleDeleteJobPost,
  } = useContext(UserContext);

  useEffect(() => {
    handleGetOnlyRecruiterPosts();
  }, []);

  const stats = [
    { label: "Job Posts", value: getRecruiterPost.length || 0 },
    { label: "Applicants", value: getRecruiterPost.applicants?.length || 0 },
    { label: "Interviews", value: 5 },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Recruiter Dashboard
        </h1>
        <Link to={"/create-job"}>
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
            + Post New Job
          </button>
        </Link>
      </div>

      <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 text-2xl font-bold rounded-full flex items-center justify-center">
          {user?.username?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            {user?.username}
          </h2>
          <p className="text-gray-500 capitalize">{user?.role}</p>
          <p className="text-sm text-gray-400">
            Welcome back! Here's your overview.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
            <p
              className="text-3xl font-bold bg-gradient-to-br from-green-300 via-green-400
           to-blue-600 bg-clip-text text-transparent"
            >
              {item.value}
            </p>
            <p className="text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Job Postings
        </h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="pb-2">Title</th>
              <th className="pb-2">Applicants</th>
              <th className="pb-2">Posted On</th>
              <th className="pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {getRecruiterPost.map((job) => (
              <tr key={job._id} className="border-b last:border-0">
                <td className="py-2">{job.title}</td>
                <td className="py-2">{job.applicants?.length || 0}</td>
                <td className="py-2">
                  {new Date(job.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 space-x-2">
                  <button title="edit">
                    <Link to={`/edit-job-post/${job._id}`} title="Edit">
                      <SquarePen className="h-5 w-5 text-green-500 cursor-pointer" />
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDeleteJobPost(job._id)}
                    title="delete"
                  >
                    <Trash className="h-5 w-5 text-red-500 cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
