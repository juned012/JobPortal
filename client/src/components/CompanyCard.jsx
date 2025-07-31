import { MapPin } from "lucide-react";

const CompanyCard = ({
  company = "Myntra",
  location = "Noida, India",
  remote = true,
  logo,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all w-full max-w-md mx-auto p-6 flex flex-col gap-4 relative">
      <div className="absolute top-4 right-4">
        <img
          src={logo}
          alt={`${company} Logo`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900">{company}</h3>
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        {location}
        {remote && (
          <span className="text-blue-500 ml-1 hover:underline cursor-pointer">
            (Remote)
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-md w-max hover:bg-gray-100 transition">
        View Profile
      </div>
    </div>
  );
};

export default CompanyCard;
