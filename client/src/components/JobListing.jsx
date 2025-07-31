import JobCard from "./JobCard";

const jobs = [
  {
    company: "Myntra",
    role: "Senior Visual Designer",
    location: "Noida, India",
    remote: true,
    salary: "25k/month - 35k/month",
    postedAgo: "2 Weeks Ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Myntra_logo.png/600px-Myntra_logo.png",
  },
  {
    company: "Zomato",
    role: "UI/UX Designer",
    location: "Bengaluru, India",
    remote: false,
    salary: "30k/month - 40k/month",
    postedAgo: "1 Week Ago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Zomato_Logo.svg/512px-Zomato_Logo.svg.png",
  },
  {
    company: "Swiggy",
    role: "Product Designer",
    location: "Hyderabad, India",
    remote: true,
    salary: "40k/month - 50k/month",
    postedAgo: "5 Days Ago",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
  },
];

const JobListing = () => {
  return (
    <section className="bg-gradient-to-tr from-green-50 via-white to-green-100 pt-25 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">
          Latest Jobs
        </h1>
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
