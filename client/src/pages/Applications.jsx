import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Applications = () => {
  const { fetchSeekerApplications, seekerApplications } =
    useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchSeekerApplications();
      setLoading(false);
    };
    load();
  }, []);
  console.log(seekerApplications);

  return (
    <section className="bg-gradient-to-tr from-green-50 via-white to-green-100 pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
            My Applications
          </span>
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading applications...</p>
        ) : !seekerApplications || seekerApplications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {seekerApplications.map((app, index) => (
              <div
                key={app._id || index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-1">
                  {app.title}
                </h3>
                <p className="text-gray-700 font-medium">
                  {app.company} — {app.location}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Applied on: {new Date(app.createdAt).toLocaleDateString()}
                </p>

                <div className="mt-4">
                  <span className="text-sm font-semibold">Status:</span>{" "}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Applications;
