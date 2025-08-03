import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { MoveLeft } from "lucide-react";

const JobDetailedPage = () => {
  const { handleViewJobDetail, singleJobPost } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      handleViewJobDetail(id);
    }
  }, [id]);

  if (!singleJobPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 my-10">
      <div className="py-8">
        <h1
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 cursor-pointer text-green-700 hover:text-green-600 transition-all duration-300 ease-in"
        >
          <MoveLeft /> Back to home
        </h1>
      </div>

      <header className="mb-8 border-b border-gray-300 pb-4">
        <h1
          className="text-4xl font-extrabold bg-gradient-to-br from-green-500 via-green-800
         to-green-700 bg-clip-text text-transparent"
        >
          {singleJobPost.title}
        </h1>

        <p className="text-lg text-gray-600 mt-2">{singleJobPost.company}</p>
        <p className="text-sm text-gray-500 mt-1">
          Posted on:{" "}
          {new Date(singleJobPost.createdAt).toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </header>

      <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-800">
            Job Overview
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Location:</strong>{" "}
              {singleJobPost.location || "Not specified"} (
              {singleJobPost.locationType})
            </li>
            <li>
              <strong>Salary:</strong> {singleJobPost.salary || "Not specified"}
            </li>
            <li>
              <strong>Job Type:</strong> {singleJobPost.type}
            </li>
            <li>
              <strong>Experience:</strong>{" "}
              {singleJobPost.experience || "Not specified"}
            </li>
            <li>
              <strong>Application Deadline:</strong>{" "}
              {singleJobPost.deadline
                ? new Date(singleJobPost.deadline).toLocaleDateString()
                : "Not specified"}
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3 text-green-700">
            Job Description
          </h2>
          <p className="whitespace-pre-line text-gray-800 leading-relaxed mb-6">
            {singleJobPost.description}
          </p>

          {singleJobPost.requirements && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                Requirements
              </h3>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {singleJobPost.requirements}
              </p>
            </>
          )}
        </div>
      </section>
      <div className="text-center mt-12">
        <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetailedPage;
