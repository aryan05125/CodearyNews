import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Basic validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      errs.email = "Invalid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    // No backend: just show thank you message
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-center">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold mb-1 block">Name</span>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            <span className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
              👤
            </span>
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1" id="name-error">
              {errors.name}
            </p>
          )}
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold mb-1 block">Email</span>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="you@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            <span className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
              📧
            </span>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1" id="email-error">
              {errors.email}
            </p>
          )}
        </label>

        {/* Message */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold mb-1 block">Message</span>
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 rounded border resize-y ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your message..."
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            />
            <span className="absolute left-3 top-3 text-gray-400 pointer-events-none">
              📝
            </span>
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1" id="message-error">
              {errors.message}
            </p>
          )}
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>

      {/* Optional Social Links */}
      <div className="mt-12 text-center space-x-6 text-gray-600 dark:text-gray-300">
        <a
          href="https://facebook.com/codearynews"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
          aria-label="Facebook"
        >
          📘 Facebook
        </a>
        <a
          href="https://twitter.com/codearynews"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
          aria-label="Twitter"
        >
          🐦 Twitter
        </a>
        <a
          href="https://instagram.com/codearynews"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
          aria-label="Instagram"
        >
          📸 Instagram
        </a>
        <a
          href="https://youtube.com/codearynews"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
          aria-label="YouTube"
        >
          ▶️ YouTube
        </a>
      </div>
    </div>
  );
};

export default Contact;
