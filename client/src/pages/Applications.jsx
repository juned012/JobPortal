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
    <section className="bg-gradient-to-tr from-green-50 via-white to-green-100 pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span
            className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 
          bg-clip-text text-transparent"
          >
            My Applications
          </span>
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {dummyApplications.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-1">
                {app.jobTitle}
              </h3>
              <p className="text-gray-700 font-medium">
                {app.company} — {app.location}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Applied on: {app.appliedDate}
              </p>

              <div className="mt-4">
                <span className="text-sm font-semibold">Status:</span>{" "}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : app.status === "Shortlisted"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
