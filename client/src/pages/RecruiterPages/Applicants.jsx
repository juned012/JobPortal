import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ClipLoader } from "react-spinners";
import PopupRecruiterVeiwOption from "../../components/PopupRecruiterVeiwOption";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const Applicants = () => {
  const { fetchRecruiterApplications, recruiterApplications } =
    useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

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
      <h2 className="text-3xl md:text-4xl font-bold mt-5 mb-10">
        <span
          className="bg-gradient-to-r from-green-600 via-green-400
           to-green-600 bg-clip-text text-transparent"
        >
          Job Applicants
        </span>
      </h2>
      {loading ? (
        <p className="text-center text-gray-500">
          <ClipLoader color="#16A34A" size={35} speedMultiplier={2} />
        </p>
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
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            statusColors[applicant.status] ||
                            statusColors["Pending"]
                          }`}
                        >
                          {applicant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => {
                            setIsOpenPopUp(true);
                            setSelectedApplicant(applicant);
                            setSelectedJob(job);
                          }}
                          className="text-blue-600 hover:underline text-sm"
                        >
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
      {isOpenPopUp && (
        <PopupRecruiterVeiwOption
          onClose={() => setIsOpenPopUp(false)}
          applicant={selectedApplicant}
          job={selectedJob}
        />
      )}
    </div>
  );
};

export default Applicants;
