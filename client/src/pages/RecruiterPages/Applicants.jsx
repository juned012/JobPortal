import React from "react";

const applicants = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Frontend Developer",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    position: "Backend Developer",
    status: "Accepted",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    position: "UI/UX Designer",
    status: "Rejected",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const Applicants = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Job Applicants</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Position</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr
                key={applicant.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {applicant.name}
                </td>
                <td className="px-6 py-4 text-gray-600">{applicant.email}</td>
                <td className="px-6 py-4 text-gray-600">
                  {applicant.position}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[applicant.status]
                    }`}
                  >
                    {applicant.status}
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
  );
};

export default Applicants;
