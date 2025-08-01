import JobCard from "./JobCard";

const jobs = [
  {
    company: "Myntra",
    role: "Senior Visual Designer",
    location: "Noida, India",
    remote: true,
    salary: "25k/month - 35k/month",
    postedAgo: "2 Weeks Ago",
    logo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
  },
  {
    company: "Zomato",
    role: "UI/UX Designer",
    location: "Bengaluru, India",
    remote: false,
    salary: "30k/month - 40k/month",
    postedAgo: "1 Week Ago",
    logo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
  },
  {
    company: "Swiggy",
    role: "Product Designer",
    location: "Hyderabad, India",
    remote: true,
    salary: "40k/month - 50k/month",
    postedAgo: "5 Days Ago",
    logo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
  },
];

const JobListing = () => {
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
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
