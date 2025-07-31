import React from "react";
import { Briefcase, Users, Star } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    datePosted: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Engineer",
    type: "Full-time",
    location: "New York, NY",
    datePosted: "5 days ago",
  },
  {
    id: 3,
    title: "Product Manager",
    type: "Contract",
    location: "San Francisco, CA",
    datePosted: "1 week ago",
  },
];

const CompanyDetailPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-green-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        {/* Header with logo and name */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 border-b border-gray-200 pb-8">
          <img
            src="https://via.placeholder.com/120x120.png?text=Logo"
            alt="Company Logo"
            className="rounded-full w-28 h-28 object-cover shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-green-700 mb-3">
              GreenTech Innovations
            </h1>
            <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0">
              Leading the way in sustainable technology solutions,
              revolutionizing how the world powers its future.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-8">
          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4 w-48 justify-center md:justify-start">
            <Briefcase className="w-7 h-7 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-green-700">120+</p>
              <p className="text-gray-600 text-sm">Jobs Posted</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4 w-48 justify-center md:justify-start">
            <Users className="w-7 h-7 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-green-700">450</p>
              <p className="text-gray-600 text-sm">Employees</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4 w-48 justify-center md:justify-start">
            <Star className="w-7 h-7 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-green-700">4.8/5</p>
              <p className="text-gray-600 text-sm">Company Rating</p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="mt-10 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            About GreenTech
          </h2>
          <p className="text-gray-700 leading-relaxed">
            GreenTech Innovations was founded in 2010 with a mission to design
            and implement green technologies that make a difference globally.
            Our dedicated team of experts focuses on renewable energy systems,
            sustainable manufacturing, and innovative products that reduce
            carbon footprint.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We are proud to have partnered with numerous Fortune 500 companies
            to build scalable green solutions that impact communities and the
            environment positively.
          </p>
        </div>

        {/* Job Openings */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Open Positions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto md:mx-0">
            {JOBS.map(({ id, title, type, location, datePosted }) => (
              <div
                key={id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-green-700">
                    {title}
                  </h3>
                  <span className="text-sm text-gray-500">{datePosted}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {type} — {location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:contact@greentech.com"
              className="text-green-600 hover:underline"
            >
              contact@greentech.com
            </a>
          </p>
          <p className="text-gray-700 mt-2">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-green-600 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-gray-700 mt-2">
            Website:{" "}
            <a
              href="https://greentech.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              https://greentech.example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetailPage;
