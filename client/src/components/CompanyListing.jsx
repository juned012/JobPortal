import React from "react";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    id: 1,
    name: "GreenTech Innovations",
    desc: "Leading the way in sustainable technology solutions.",
    logo: "https://via.placeholder.com/80?text=GT",
    location: "San Francisco, CA",
    jobs: 12,
  },
  {
    id: 2,
    name: "Healthify Co.",
    desc: "Making healthcare easy, digital, and accessible for all.",
    logo: "https://via.placeholder.com/80?text=H",
    location: "Boston, MA",
    jobs: 8,
  },
  {
    id: 3,
    name: "FinFlow Global",
    desc: "Modernizing global finance for businesses worldwide.",
    logo: "https://via.placeholder.com/80?text=FF",
    location: "Chicago, IL",
    jobs: 17,
  },
  // Add more company objects here
];

const CompanyListing = () => {
  return (
    <section className=" bg-gradient-to-tr from-green-50 via-white to-green-100 pt-25 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">
          Companies
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyListing;
