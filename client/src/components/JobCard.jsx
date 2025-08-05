import { CalendarDays, CircleDollarSign, MapPin } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useState } from "react";

const JobCard = ({
  _id,
  company,
  title,
  location,
  salary,
  createdAt,
  locationType,
  hasApplied,
}) => {
  const { handleApplyOnJob } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    setLoading(true);
    await handleApplyOnJob(_id);
    setLoading(false);
  };
  return (
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg 
    transition-all duration-300 p-6 relative"
    >
      <Link to={`/job-detailed/${_id}`}>
        <div className="absolute top-4 right-4">
          <p
            className="w-14 h-14 rounded-full bg-gradient-to-br from-green-300 via-green-400 to-blue-600 
  text-white font-bold flex items-center justify-center shadow-inner"
          >
            {company.charAt(0).toUpperCase()}
          </p>
        </div>
      </Link>

      <div className="mb-2">
        <p className="text-sm text-gray-500 font-medium">{company}</p>
        <Link to={`/job-detailed/${_id}`}>
          <h2 className="text-xl font-semibold text-gray-900 hover:underline">
            {title}
          </h2>
        </Link>
      </div>

      <div className="flex items-center text-sm text-gray-600 gap-1 mb-2">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
        {locationType && (
          <span className="ml-2 text-green-600 font-medium">
            {locationType}
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
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <button
        onClick={handleApply}
        className="w-full bg-gradient-to-l from-green-300 via-green-500 to-blue-500  
       text-white cursor-pointer py-2 rounded-md text-sm font-semibold transition duration-200"
      >
        {loading ? "Applying..." : "Apply Now"}
      </button>
    </div>
  );
};

export default JobCard;
