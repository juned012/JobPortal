import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const Applicants = () => {
  const { fetchRecruiterApplications, recruiterApplications } =
    useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplicants = async () => {
      setLoading(true);
      await fetchRecruiterApplications();
      setLoading(false);
    };
    loadApplicants();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Job Applicants</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading applicants...</p>
      ) : recruiterApplications.length === 0 ? (
        <p className="text-center text-gray-500">No applicants found.</p>
      ) : (
        recruiterApplications.map((job) => (
          <div key={job._id} className="mb-10">
            <h3 className="text-lg font-semibold mb-2">
              {job.title} ({job.applicants.length} applicants)
            </h3>

            <div className="overflow-x-auto bg-white shadow rounded-lg">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {job.applicants.map((applicant) => (
                    <tr
                      key={applicant._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {applicant.userId?.username}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {applicant.userId?.email}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors["Pending"]}`}
                        >
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:underline text-sm">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Applicants;
