import { useContext, useEffect } from "react";
import JobCard from "./JobCard";
import { UserContext } from "../context/UserContext";

const JobListing = () => {
  const { handleGetAllJobPosts, getAllPost } = useContext(UserContext);

  useEffect(() => {
    handleGetAllJobPosts();
  }, []);

  console.log(getAllPost);

  return (
    <section className="bg-gradient-to-tr from-green-50 via-white to-green-100 pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span
            className="bg-gradient-to-r from-green-600 via-green-400
           to-green-600 bg-clip-text text-transparent"
          >
            Latest Jobs
          </span>
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {getAllPost.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
