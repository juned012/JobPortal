import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { X } from "lucide-react";

const statusOptions = [
  { label: "Pending", value: "pending" },
  { label: "Shortlisted", value: "shortlisted" },
  { label: "Interview", value: "interview" },
  { label: "Selected", value: "selected" },
  { label: "Rejected", value: "rejected" },
];

const PopupRecruiterVeiwOption = ({ onClose, applicant, job }) => {
  const { handleUpdateApplicantStatus } = useContext(UserContext);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (applicant?.status) {
      setStatus(applicant.status.toLowerCase());
    }
  }, [applicant]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    if (!applicant || !job) return;
    handleUpdateApplicantStatus(job._id, applicant._id, status);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="relative border border-gray-200 rounded-2xl max-w-xl w-full p-8 bg-white shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X />
        </button>

        <h1 className="py-2 text-xl text-gray-800 font-black border-b border-gray-200">
          Applied for role: <span className="text-green-500">{job.title}</span>
        </h1>

        <div className="space-y-3 mt-2 text-sm text-gray-700">
          <p>
            <strong>Name:</strong> {applicant?.userId?.username}
          </p>
          <p>
            <strong>Email:</strong> {applicant?.userId?.email}
          </p>

          <div className="mt-4">
            <label htmlFor="status-select" className="block font-medium mb-1">
              Update Status:
            </label>
            <select
              id="status-select"
              value={status}
              onChange={handleStatusChange}
              className="w-full border rounded px-3 py-2"
            >
              {statusOptions.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupRecruiterVeiwOption;
