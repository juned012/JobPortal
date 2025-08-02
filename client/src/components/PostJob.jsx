import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const PostJob = () => {
  const { handleCreateJobPost } = useContext(UserContext);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    locationType: "Remote",
    salary: "",
    type: "Full-Time",
    experience: "",
    description: "",
    requirements: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.company || !form.description || !form.deadline) {
      setError("Please fill in all required fields.");
      return;
    }

    await handleCreateJobPost(form);

    setForm({
      title: "",
      company: "",
      location: "",
      locationType: "Remote",
      salary: "",
      type: "Full-Time",
      experience: "",
      description: "",
      requirements: "",
      deadline: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Post a Job</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Job Title *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Company Name *</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g. Google"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g. Remote, New York, India"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Location Type</label>
            <select
              name="locationType"
              value={form.locationType}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            >
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Salary (INR)</label>
            <input
              type="text"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g. 6 LPA - 12 LPA"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Job Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            >
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Experience</label>
            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g. 1-3 years"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Application Deadline *
            </label>
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Job Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            placeholder="Write a detailed job description..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Requirements</label>
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            placeholder="List the skills, qualifications, or tools needed..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
