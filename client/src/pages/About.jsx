import { UserCog, ShieldCheck, TrendingUp } from "lucide-react";

const ICONS = [
  {
    icon: <UserCog className="w-8 h-8 text-green-500 mb-2" />,
    title: "Personalized Jobs",
    desc: "Smart recommendations that fit your skills and ambitions.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500 mb-2" />,
    title: "Trusted Companies",
    desc: "We only list openings from verified, reputable employers.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500 mb-2" />,
    title: "Career Growth",
    desc: "Thousands have advanced their careers with FindJob.",
  },
];

const About = () => {
  return (
    <section className="overflow-hidden min-h-[90vh] flex items-center justify-center pt-12 pb-20 bg-gradient-to-tr from-green-50 via-white to-green-100">
      <div className="max-w-4xl mx-auto w-full bg-white rounded-xl p-8 md:p-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span
            className="bg-gradient-to-r from-green-600 via-green-400
           to-green-600 bg-clip-text text-transparent"
          >
            About FindJob
          </span>
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to{" "}
          <span className="font-semibold text-green-600">FindJob</span> — your
          launchpad to a successful career! We connect talented people with top
          companies, using the latest technology for job search that's
          empowering and safe.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 my-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-green-600">
              1,200+
            </span>
            <span className="text-sm text-gray-600">Jobs Posted</span>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-green-600">300+</span>
            <span className="text-sm text-gray-600">Verified Companies</span>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-green-600">
              8,000+
            </span>
            <span className="text-sm text-gray-600">Careers Transformed</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-green-700 mt-10 mb-6">
          Why Choose FindJob?
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {ICONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 rounded-lg p-5 flex-1 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              {item.icon}
              <span className="font-semibold mt-1 mb-1 text-green-700">
                {item.title}
              </span>
              <span className="text-gray-600 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
            alt="FindJob Team"
            className="w-44 md:w-60 rounded-xl mx-auto shadow-md mb-3"
            loading="lazy"
          />
          <p className="text-gray-500 text-sm max-w-lg">
            <span className="font-semibold text-green-700">
              We're here for you.
            </span>{" "}
            Reach out to our team or join thousands who trust FindJob for their
            career success!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
