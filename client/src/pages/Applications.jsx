const Applications = () => {
  const dummyApplications = [
    {
      jobTitle: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      appliedDate: "2025-07-28",
      status: "Pending",
    },
    {
      jobTitle: "UI/UX Designer",
      company: "Adobe",
      location: "Remote",
      appliedDate: "2025-07-30",
      status: "Shortlisted",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Applications</h1>

      <div className="grid gap-4">
        {dummyApplications.map((app, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 border hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-green-600">
              {app.jobTitle}
            </h2>
            <p className="text-gray-700">
              {app.company} — {app.location}
            </p>
            <p className="text-sm text-gray-500">
              Applied on: {app.appliedDate}
            </p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                  app.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : app.status === "Shortlisted"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {app.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Applications;
