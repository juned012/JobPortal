import React from "react";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    id: 1,
    name: "GreenTech Innovations",
    desc: "Leading the way in sustainable technology solutions.",
    logo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
    location: "San Francisco, CA",
    jobs: 12,
  },
  {
    id: 2,
    name: "Healthify Co.",
    desc: "Making healthcare easy, digital, and accessible for all.",
    logo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
    location: "Boston, MA",
    jobs: 8,
  },
  {
    id: 3,
    name: "FinFlow Global",
    desc: "Modernizing global finance for businesses worldwide.",
    logo: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
    location: "Chicago, IL",
    jobs: 17,
  },
  // Add more company objects here
];

const CompanyListing = () => {
  return (
    <section className=" bg-gradient-to-tr from-green-50 via-white to-green-100 pt-12 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span
            className="bg-gradient-to-r from-green-600 via-green-400
           to-green-600 bg-clip-text text-transparent"
          >
            Companies
          </span>
        </h2>
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
