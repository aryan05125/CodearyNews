import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6 space-y-10 text-gray-800 dark:text-gray-200"
    >
      <h1 className="text-4xl font-bold text-center mb-6">About CodearyNews</h1>

      {/* Project Purpose + Story */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2">
          Our Purpose & Story
        </h2>
        <p className="leading-relaxed">
          CodearyNews was born to serve as the ultimate news source exclusively
          for social media influencers and their viral moments. Our goal is to
          deliver timely, authentic, and engaging news about influencers across
          all platforms — Instagram, YouTube, TikTok, Twitter, and more.
        </p>
        <p className="leading-relaxed">
          In a world overflowing with generic news, we wanted a dedicated
          platform that celebrates the culture and creativity of influencers
          shaping the digital age.
        </p>
      </section>

      {/* Vision + Target Audience */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2">
          Vision & Audience
        </h2>
        <p className="leading-relaxed">
          Our vision is to be the top trusted source where fans, brands, and
          content creators discover trending stories, insightful updates, and
          behind-the-scenes influencer culture.
        </p>
        <p className="leading-relaxed">
          Whether you are an influencer looking to stay updated or a fan eager
          to catch viral content, CodearyNews is designed just for you.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2">
          Technology Stack
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React (Frontend framework)</li>
          <li>Vite (Build tool for fast dev)</li>
          <li>Tailwind CSS (Utility-first styling)</li>
          <li>Framer Motion (Smooth animations)</li>
          <li>React Router (Client-side routing)</li>
          <li>Optional: API for dynamic news data</li>
        </ul>
      </section>

      {/* Developer Info */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2">
          Developer Info
        </h2>
        <p className="leading-relaxed">
          Developed by <strong>Aryan Chauhan</strong>, passionate about web
          development and building impactful user experiences.
        </p>
        <p>
          Connect with me on{" "}
          <a
            href="https://github.com/aryanchauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/aryanchauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </section>

      {/* Screenshots */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold border-b-2 border-indigo-500 pb-2">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Placeholder images */}
          <img
            src="https://source.unsplash.com/600x400/?technology,app"
            alt="App screenshot 1"
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
          <img
            src="https://source.unsplash.com/600x400/?code,interface"
            alt="App screenshot 2"
            className="rounded-lg shadow-lg object-cover w-full h-48"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default About;
