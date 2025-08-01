import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="overflow-hidden min-h-[80vh] bg-gradient-to-tr from-green-50 via-white to-green-100 pt-12 pb-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto w-full bg-white rounded-xl transition border border-gray-100 p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Have a question? Need support? Just want to say hello? Fill out the
          form and our team will get back to you soon!
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              name="name"
              required
              onChange={handleChange}
              value={form.name}
              className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              required
              onChange={handleChange}
              value={form.email}
              type="email"
              className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              value={form.message}
              rows={4}
              className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition resize-none"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
          {submitted && (
            <div className="text-center mt-4 text-green-600 font-semibold">
              Thank you! We will get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
