import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { ClipLoader } from "react-spinners";

const Applications = () => {
  const { fetchSeekerApplications, seekerApplications, isLoading, user } =
    useContext(UserContext);

  useEffect(() => {
    fetchSeekerApplications();
  }, []);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    shortlisted: "bg-blue-100 text-blue-800",
    interview: "bg-purple-100 text-purple-800",
    selected: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <section className="bg-gradient-to-tr from-green-50 via-white to-green-100 pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
            My Applications
          </span>
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader size={50} color="#22c55e" />
          </div>
        ) : !seekerApplications || seekerApplications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {seekerApplications.map((job, index) => {
              const myApplication = job.applicants.find(
                (applicant) => applicant.userId === user._id
              );

              return (
                <div
                  key={job._id || index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-600 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {job.company} — {job.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Applied on:{" "}
                    {new Date(
                      myApplication?.appliedAt || job.createdAt
                    ).toLocaleDateString()}
                  </p>

                  <div className="mt-4">
                    <span className="text-sm font-semibold">Status:</span>{" "}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[myApplication?.status?.toLowerCase()] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {myApplication?.status || "Pending"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Applications;
