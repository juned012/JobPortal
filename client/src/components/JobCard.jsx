import { CalendarDays, CircleDollarSign, MapPin } from "lucide-react";

const JobCard = ({
  company = "Myntra",
  role = "Senior Visual Designer",
  location = "Noida, India",
  remote = true,
  salary = "25k/month - 35k/month",
  postedAgo = "2 Weeks Ago",
  logo,
}) => {
  return (
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg 
    transition-all duration-300 p-6 relative"
    >
      <div className="absolute top-4 right-4">
        <img
          src={logo}
          alt={`${company} Logo`}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-500 font-medium">{company}</p>
        <h2 className="text-xl font-semibold text-gray-900">{role}</h2>
      </div>

      <div className="flex items-center text-sm text-gray-600 gap-1 mb-2">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
        {remote && (
          <span className="ml-2 text-green-600 font-medium hover:underline cursor-pointer">
            (Remote)
          </span>
        )}
      </div>

      <div className="flex flex-col text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1 mb-2">
          <CircleDollarSign className="w-4 h-4" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{postedAgo}</span>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer py-2 rounded-md text-sm font-semibold transition duration-200">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
