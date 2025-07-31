const stats = [
  { value: "1,200+", label: "Active Job Listings" },
  { value: "300+", label: "Hiring Companies" },
  { value: "8,000+", label: "Successful Hires" },
];

const HeroSection = () => {
  return (
    <section className="bg-green-50 pt-32 pb-16 relative min-h-[70vh] flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Your{" "}
          <span
            className="bg-gradient-to-r from-green-600 via-green-400 to-green-400 bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dream Job
          </span>{" "}
          Awaits
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Discover thousands of jobs from top companies. Create your profile,
          apply for roles, and take the next step in your career on our trusted
          job portal platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white cursor-pointer px-6 py-3 rounded font-semibold shadow hover:bg-green-700 transition">
            Find Jobs
          </button>
          <button className="bg-white border border-green-600 text-green-600 cursor-pointer px-6 py-3 rounded font-semibold hover:bg-green-50 transition">
            Get Started
          </button>
        </div>
        {/* Infinite Marquee Stats */}
        <div className="w-full mt-10 overflow-hidden relative">
          <div className="marquee flex gap-8 min-w-max">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center min-w-[170px]">
                <div className="text-2xl font-bold text-green-600">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {stats.map((item, idx) => (
              <div
                key={idx + stats.length}
                className="text-center min-w-[170px]"
              >
                <div className="text-2xl font-bold text-green-600">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add Marquee CSS */}
      <style>
        {`
          .marquee {
            animation: marqueeAnim 10s linear infinite;
          }
          @keyframes marqueeAnim {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
