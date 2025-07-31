import React from "react";
import { UserCog, ShieldCheck, TrendingUp } from "lucide-react";

const ICONS = [
  {
    Icon: UserCog,
    title: "Personalized Jobs",
    desc: "Smart recommendations that fit your skills and ambitions.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted Companies",
    desc: "We only list openings from verified, reputable employers.",
  },
  {
    Icon: TrendingUp,
    title: "Career Growth",
    desc: "Thousands have advanced their careers with FindJob.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white rounded-xl p-8 md:p-12 shadow-md max-w-4xl mx-auto text-center my-10">
      <h2 className="text-3xl font-bold text-green-700 mb-10">
        Why Choose FindJob?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {ICONS.map(({ Icon, title, desc }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition w-full md:w-1/3"
          >
            <Icon className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="font-semibold text-green-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
