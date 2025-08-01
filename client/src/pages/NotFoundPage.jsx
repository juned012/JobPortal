import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen 
    bg-gradient-to-b from-green-50 via-white to-green-200 px-4 text-center"
    >
      <h1 className="text-7xl font-extrabold text-green-600 mb-4">404</h1>

      <p className="text-lg text-gray-700 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition duration-300 shadow-lg"
      >
        <ArrowLeftCircle size={20} />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
